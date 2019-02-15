import Excel from 'exceljs';
import chalk from 'chalk';

import { generate as generateJson } from '../util/json';
import { setupTable } from '../util/xlsx';
import { styles } from '../util/styles';
import { isDir, gherkins, getOutputFileName, getAllPaths } from '../util/fio';

export const command = 'xlsx';
export const desc = 'Parse the provided file or directory into XLSX';

const NUM_CONTENT_ROWS = 30;
const COLUMN_WIDTH_PADDING = 1.5;

export const handler = async (argv) => {
  argv._.shift();

  const args = argv._;

  if (args.length !== 1) {
    console.log('Wrong number of arguments.');
    console.log('Pass a .feature file or directory.');
    return;
  }

  const outFile = getOutputFileName(argv.out);
  const files = isDir(args[0]) ? gherkins(args[0]) : [args[0]];
  const json = await generateJson(files);
  const wb = new Excel.Workbook();
  const testers = argv.testers || 0;
  const toc = {};

  wb.creator = `${json.configuration.program} v${json.configuration.version}`;
  wb.created = new Date(json.configuration.generatedOnTimestamp);
  wb.modified = new Date(json.configuration.generatedOnTimestamp);

  json.features.forEach(feature => {
    const name = feature.feature.name;
    const ws = wb.addWorksheet(name);
    const maxWidths = {};

    const allRelativePaths = getAllPaths(feature.relativeFolder);
    let curr = toc;

    allRelativePaths.forEach((path, index) => {
      if (!curr[path]) {
        curr[path] = {
          title: path,
          sheets: [],
          subdirs: {}
        };
      }

      if (index < allRelativePaths.length - 1) {
        curr = curr[path].subdirs;
      } else {
        curr = curr[path];
      }
    });

    curr.sheets.push({name, id: ws.id});

    ws.state = 'show';
    ws.views = [{
      state: 'frozen',
      ySplit: 1
    }];

    setupTable(ws, name, testers, NUM_CONTENT_ROWS, maxWidths);

    if (feature.feature.tags.length > 0) {
      ws.addRow({content0: 'Tags:', content1: feature.feature.tags.join(', ')});
      ws.lastRow.font = styles.light;
    }

    ws.addRow();

    if (feature.feature.description) {
      ws.addRow({content0: feature.feature.description.replace(/\n +/g, '\n').trim()});
      ws.lastRow.height = (feature.feature.description.split(/\r\n|\r|\n/).length - 1) * 11 + 15;
      ws.addRow();
    }

    feature.feature.featureElements.forEach(scenario => {
      genScenarioContent(ws, scenario, testers, maxWidths);
    });

    for (let key in maxWidths) {
      ws.getColumn(key).width = maxWidths[key] + COLUMN_WIDTH_PADDING;
    }
  });

  genTocTable(wb, toc, testers);

  wb.xlsx.writeFile(outFile)
    .then(() => {
      console.log(`${chalk.green('Success')}: Sheets generated & written to ${outFile}`);
    })
    .catch(err => {
      console.log(`${chalk.red('ERROR')}: ${err.message}`);
    });
};

const genTocTable = (wb, toc, testers) => {
  const ws = wb.addWorksheet('TOC');
  setupTable(ws, 'Sections', testers, NUM_CONTENT_ROWS);
  generateSheetStructure(ws, toc, 0);
};

/* _recursive_ */
const generateSheetStructure = (ws, dir, indentLevel) => {
  for (let key in dir) {
    ws.addRow({name: dir[key].title});

    dir[key].sheets.forEach(sheet => {
      ws.addRow({
        [`content${indentLevel}`]: {
          text: sheet.name,
          hyperlink: `#${sheet.name}!a1`
        }
      });
    });

    for (let subkey in dir.subdirs) {
      generateSheetStructure(ws, dir.subdirs[subkey], indentLevel + 1);
    }
  }
};

const genScenarioContent = (ws, scenario, testers, maxWidths) => {
  scenario.beforeComments.forEach(comment => {
    ws.addRow({content0: comment});
    ws.lastRow.font = styles.light;
  });

  ws.addRow({content0: scenario.name});
  ws.lastRow.font = styles.bold;

  if (scenario.tags) {
    ws.addRow({content0: 'Tags:', content1: scenario.tags.join(', ')});
    ws.lastRow.font = styles.light;
  }

  ws.addRow();

  scenario.steps.forEach(step => {
    genStepContent(ws, step, testers, maxWidths);
  });

  if (scenario.examples.length > 0) {
    ws.addRow();
  }

  scenario.examples.forEach(example => {
    genExampleTable(ws, example, testers || 0, maxWidths);
  });

  scenario.afterComments.forEach(comment => {
    ws.addRow({content0: comment});
    ws.lastRow.font = styles.light;
  });

  ws.addRow();
};

const genStepContent = (ws, step, testers, maxWidths) => {
  step.beforeComments.forEach(comment => {
    ws.addRow({content1: comment});
    ws.lastRow.font = styles.light;
  });

  ws.addRow({content1: step.rawKeyword, content2: step.text});
  ws.lastRow.getCell(3 + testers).font = styles.bold;
  ws.lastRow.getCell(3 + testers).alignment = styles.keywordAlignment;

  step.afterComments.forEach(comment => {
    ws.addRow({content1: comment});
    ws.lastRow.font = styles.light;
  });

  if (step.dataTable) {
    genDataTable(ws, step.dataTable, testers || 0, maxWidths);
  }
};

const genExampleTable = (ws, example, testers, maxWidths) => {
  example.beforeComments.forEach(comment => {
    ws.addRow({content0: comment});
    ws.lastRow.font = styles.light;
  });

  ws.addRow({content0: 'Examples:'});
  const headerRow = {};
  const cellsToStyle = [];

  example.header.forEach((header, index) => {
    const key = `content${index + 2}`;
    headerRow[key] = header;
    if (maxWidths[key] < header.toString().length) {
      maxWidths[key] = header.toString().length;
    }
    cellsToStyle.push(index + 4 + testers);
  });

  ws.addRow(headerRow);
  ws.lastRow.font = styles.boldItalic;

  cellsToStyle.forEach(cellNum => {
    ws.lastRow.getCell(cellNum).fill = styles.blueFill;
    ws.lastRow.getCell(cellNum).border = styles.fullBorder;
  });

  example.data.forEach(row => {
    const cellsToStyle = [];
    const contentRow = {};

    row.forEach((entry, index) => {
      const key = `content${index + 2}`;
      contentRow[key] = entry;

      if (maxWidths[key] < entry.toString().length) {
        maxWidths[key] = entry.toString().length;
      }

      cellsToStyle.push(index + 4 + testers);
    });

    ws.addRow(contentRow);

    cellsToStyle.forEach(cellNum => {
      ws.lastRow.getCell(cellNum).border = styles.fullBorder;
    });
  });

  example.afterComments.forEach(comment => {
    ws.addRow({content0: comment});
    ws.lastRow.font = styles.light;
  });
};

const genDataTable = (ws, table, testers, maxWidths) => {
  if (table.length === 0) {
    return;
  }

  const headerRow = {};
  const cellsToStyle = [];

  table[0].forEach((header, index) => {
    const key = `content${index + 2}`;
    headerRow[key] = header;

    if (maxWidths[key] < header.toString().length) {
      maxWidths[key] = header.toString().length;
    }

    cellsToStyle.push(index + 4 + testers);
  });

  ws.addRow(headerRow);
  ws.lastRow.font = styles.boldItalic;

  cellsToStyle.forEach(cellNum => {
    ws.lastRow.getCell(cellNum).fill = styles.blueFill;
    ws.lastRow.getCell(cellNum).border = styles.fullBorder;
  });

  table.shift();
  table.forEach(row => {
    const cellsToStyle = [];
    const contentRow = {};

    row.forEach((entry, index) => {
      const key = `content${index + 2}`;
      contentRow[key] = entry;

      if (maxWidths[key] < entry.toString().length) {
        maxWidths[key] = entry.toString().length;
      }

      cellsToStyle.push(index + 4 + testers);
    });

    ws.addRow(contentRow);

    cellsToStyle.forEach(cellNum => {
      ws.lastRow.getCell(cellNum).border = styles.fullBorder;
    });
  });
};
