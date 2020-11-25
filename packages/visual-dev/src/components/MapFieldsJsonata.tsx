import jsonata from "jsonata";
import {
  serializer,
  ConditionNode,
} from "jsonata-ui-core";
import {
  ConditionEditorProps,
  Editor,
  ComparisonEditorProps,
  Consts,
  LeafValueEditorProps,
  PathEditorProps,
  // SchemaProvider,
  ObjectUnaryEditorProps,
  ArrayUnaryEditorProps,
  RootNodeEditorProps,
  NodeEditorProps,
  SchemaProvider,
} from "jsonata-visual-editor";
import React, { useState } from "react";

// what is this button div doing in a modal ?
// import { ButtonDiv } from "../../../uiLibrary/Modal";

import { H3 } from "./Typography";
import {
  FormEditorTheme,
  TData,
  THead,
  JSONataTable,
  FormButton,
  TRow,
  TypeSwitch,
  AddRemoveGroup,
  TBody,
  nextAst,
  defaultPath,
  addNewObject,
  addNewArray,
  getButton,
  updateOperator,
  DisplayRulesIDETextarea,
} from "./JSONata/FormEditorTheme";
import { Form, FormControl } from "react-bootstrap";
import { Path as PathSuggestion } from "jsonata-visual-editor/dist/schema/PathSuggester";
import { PathSuggester } from "jsonata-visual-editor/dist/AstEditor";
import PathPicker, { Reducer } from "./JSONata/PathEditor";
import { AST } from "jsonata-visual-editor";
// import { LoadingSpinnerCard } from "../../../uiLibrary/LoadingSpinnerNew";
import styled from "styled-components";
import { TierName } from "./JSONata/JSONataStyle";
import { SaasquatchTheme } from "./JSONata/SaasquatchTheme";
import JSONataUtils from "./JSONata/JSONataUtils";
import { GenericInput } from "./Inputs";

const ButtonDiv = styled.div`
  display: flex;
`

const TableWrapper = styled.table`
  width: 100%;
  border: 0px solid #e2e2e2;
  padding: 0;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const SmallPickerWrapper = styled.div`
  max-width: 194px;
  width: 194px;
  min-width: 100px;
  & .Select,
  & .Select-control {
    max-width: 194px;
    width: 194px;
    min-width: 100px;
  }
`;

const { baseOperators, numberOperators, arrayOperators } = Consts;

type Option = {
  type: "suggested" | "created";
  label: string;
  value: AST;
  data: PathSuggestion;
};

function JSONataEditorView(props: JSONataEditorViewProps) {
  const { showButton, loading, defaultValue } = props.states;
  const { value, inputDataSchema, SchemaContext } = props.data;
  const { onChange } = props.callbacks;

  console.log("Context", SchemaContext);

  function ComparisonEditor({
    lhs,
    rhs,
    changeOperator,
    ast,
  }: ComparisonEditorProps) {
    const getPaths = PathSuggester;
    const options: PathSuggestion[] = getPaths(inputDataSchema);
    //@ts-ignore
    const schemaOptions: Option[] = options.reduce(Reducer, []);
    const exactMatch = (inputValue: string) => {
      return schemaOptions.filter(
        (i: Option) => i.data && i.data.path === inputValue
      );
    };

    const stringValue = serializer(lhs.props.ast);
    const foundOptions = exactMatch(stringValue);

    const foundNumber = foundOptions.filter(
      (option) =>
        (option.data && option.data.type === "number") ||
        (option.data && option.data.type === "integer")
    );
    const foundArray = foundOptions.filter(
      (option) => option.data && option.data.typePath.includes("array")
    );

    if (foundNumber.length) {
      updateOperator(
        ast.value,
        changeOperator,
        Object.keys(numberOperators),
        "="
      );
    } else if (foundArray.length) {
      updateOperator(
        ast.value,
        changeOperator,
        Object.keys(arrayOperators),
        "in"
      );
    } else if (foundOptions.length) {
      updateOperator(
        ast.value,
        changeOperator,
        Object.keys(baseOperators),
        "="
      );
    }

    return (
      <Form style={{ display: "flex" }}>
        <div>
          {lhs}
        </div>
        <FormControl
          style={{
            padding: "4px 12px",
            maxWidth: "180px",
            minWidth: "180px",
            width: "180px",
            height: "30px",
            margin: "0 15px",
          }}
          // componentClass="select"
          placeholder="select"
          value={ast.value}
          onChange={(e: any) => changeOperator(e.target.value)}
        >
          {!foundArray.length && (
            <optgroup label="Common Operators">
              {Object.keys(baseOperators).map((k) => (
                <option key={k} value={k}>
                  {baseOperators[k]}
                </option>
              ))}
            </optgroup>
          )}
          {(!foundOptions.length || foundNumber.length) && (
            <optgroup label="Number Operators">
              {Object.keys(numberOperators).map((k) => (
                <option key={k} value={k}>
                  {numberOperators[k]}
                </option>
              ))}
            </optgroup>
          )}
          {(!foundOptions.length || foundArray.length) && (
            <optgroup label="Array Operators">
              {Object.keys(arrayOperators).map((k) => (
                <option key={k} value={k}>
                  {arrayOperators[k]}
                </option>
              ))}
            </optgroup>
          )}
        </FormControl>
        <div>
          {rhs}
        </div>
      </Form>
    );
  }

  function ObjectUnaryEditor({
    children,
    ast,
    onChange,
    removeLast,
  }: ObjectUnaryEditorProps) {
    const canDelete = children.length > 0;
    return (
      <>
        <JSONataTable>
          <thead>
            <tr>
              <THead>
                <H3>{props.options?.keyTitle ? props.options.keyTitle : "Key"}</H3>
              </THead>
              <THead>
                <H3>{props.options?.valueTitle ? props.options.valueTitle : "Value"}</H3>
              </THead>
              <THead />
            </tr>
          </thead>
          <tbody>
            {children.map((c) => {
              // const schemaK = "Key";
              // const schemaV = "Value";
              return (
                <>
                  <TRow>
                      <TData>{c.key}</TData>
                      <TData>{c.value}</TData>
                    <TData style={{ paddingTop: "0px" }}>
                      <FormButton
                        onClick={c.remove}
                        disabled={!canDelete}
                        style={{ fontWeight: "lighter" }}
                      >
                        {/* <i className="icon-sqh-close" /> */}
                        X
                      </FormButton>
                    </TData>
                  </TRow>
                </>
              );
            })}
          </tbody>
        </JSONataTable>
        <AddRemoveGroup
          addNew={() => addNewObject(ast, onChange)}
          removeLast={removeLast}
        />
      </>
    );
  }

  function ArrayUnaryEditor({
    children,
    ast,
    onChange,
    removeLast,
  }: ArrayUnaryEditorProps) {
    const canDelete = children.length > 0;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <JSONataTable>
          <thead>
            <tr>
              <THead>
                <H3>Value</H3>
              </THead>
              <THead />
            </tr>
          </thead>
          <tbody>
            {children.map((c) => {
              // const schemaV = "Value";
              return (
                <TRow>
                    <TData>{c.editor}</TData>
                  <TData>
                    <FormButton
                      onClick={c.remove}
                      disabled={!canDelete}
                      style={{ fontWeight: "lighter" }}
                    >
                      {/* <i className="icon-sqh-close" /> */}
                      X
                    </FormButton>
                  </TData>
                </TRow>
              );
            })}
          </tbody>
        </JSONataTable>
        <AddRemoveGroup
          addNew={() => addNewArray(ast, onChange)}
          removeLast={removeLast}
        />
      </div>
    );
  }

  const AddTier = ({
    currentChildren,
  }: NodeEditorProps<ConditionNode> & { currentChildren: any[] }) => {
    return (
      <ButtonDiv style={{ padding: "0px" }}>
        <FormButton
          onClick={(e) => {
            e.preventDefault();

            console.log('currentchildren', currentChildren)

            // This uses context
            JSONataUtils.addRule(currentChildren);
          }}
        >
          + Add Rule
        </FormButton>
      </ButtonDiv>
    );
  };

  const ConditionEditor = ({
    children,
    ast,
    elseEditor,
    onChange,
  }: ConditionEditorProps) => {
    const canDelete = children.length > 0;
    return (
      <TableWrapper>
        <THead>Condition</THead>
        <THead>Error message</THead>
        <TBody>
          {children.map((pair, i) => {
            const deleteDisabled = !pair.Condition.props.ast.lhs.lhs;
            return (
              <>
                <TRow>
                    <TData style={{ paddingRight: "20px", width: "1px" }}>
                      {pair.Condition}
                    </TData>
                    <TData style={{ verticalAlign: "top" }}>
                      <TierName
                        className="error-container"
                        style={{ justifyContent: "flex-start" }}
                      >
                        {pair.Then}
                      </TierName>
                    </TData>
                    <TData style={{ verticalAlign: "top" }}>
                      {getButton(pair, elseEditor, children, canDelete)}
                    </TData>
                </TRow>
                <TRow>
                  <TData
                    style={{
                      columnSpan: "all",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "right",
                      }}
                    >
                      <ButtonDiv style={{ display: "flex", gap: "20px" }}>
                        <FormButton
                          onClick={(e: { preventDefault: () => void }) => {
                            e.preventDefault();
                            const current = serializer(
                              pair.Condition.props.ast
                            );
                            const combineValue = "and";
                            pair.Condition.props.onChange(
                              jsonata(
                                `${current} ${combineValue} select = ""`
                              ).ast()
                            );
                          }}
                        >
                          + Add Condition
                        </FormButton>
                        {!deleteDisabled && (
                          <>
                            <FormButton
                              onClick={(e: { preventDefault: () => void }) => {
                                e.preventDefault();
                                const current = serializer(
                                  pair.Condition.props.ast.lhs
                                );
                                pair.Condition.props.onChange(
                                  jsonata(`${current}`).ast()
                                );
                              }}
                            >
                              {/* <i className="icon-sqh-close" /> */}
                              X
                            </FormButton>
                          </>
                        )}
                      </ButtonDiv>
                      <ButtonDiv style={{ display: "flex", gap: "20px" }}>
                        {i == children.length - 1 && (
                          <AddTier
                            currentChildren={children}
                            ast={ast}
                            onChange={onChange}
                          />
                        )}
                      </ButtonDiv>
                    </div>
                  </TData>
                </TRow>
              </>
            );
          })}
        </TBody>
      </TableWrapper>
    );
  };

  function PathEditor({ ast, onChange }: PathEditorProps) {
    const newSchemaProvider = SchemaProvider.makeSchemaProvider(
       inputDataSchema
    );
    // const renderDropDown = newSchema?.value == "show" ? true : false;
    const changeType = () => onChange(nextAst(ast, defaultPath()));

    console.log('ast', ast);

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* {renderDropDown && ( */}
          <TypeSwitch ast={ast} onChange={onChange} changeType={changeType} />
        {/* // )} */}
        <SmallPickerWrapper>

          <PathPicker
            value={ast}
            onChange={(option) => onChange(option.value as AST)}
            schemaProvider={newSchemaProvider}
          />
        </SmallPickerWrapper>
      </div>
    );
  }

  function LeafValueEditor({
    onChangeText,
    onChange,
    text,
    ast,
  }: LeafValueEditorProps) {
    // const newSchema: { value: string } = SchemaContext.useContainer();
    // const renderDropDown = newSchema?.value === "Value" ? true : false;
    const [input, setInput] = useState(text || "");
    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      if (e.key === "Enter" || e.key === "Escape") {
        e.currentTarget.blur();
      }
    }

    const changeType = () => onChange(nextAst(ast, defaultPath()));
    // const message =
    //   newSchema?.value === "show" ? "Variable value" : newSchema?.value;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* {renderDropDown && ( */}
          <TypeSwitch ast={ast} onChange={onChange} changeType={changeType} />
        {/* )} */}
        <GenericInput
          type="text"
          // placeholder={message}
          value={input}
          onKeyDown={handleKeyDown}
          // prevent enter key from creating a new condition
          onKeyPress={(e) => (e.which === 13 ? e.preventDefault() : e)}
          onChange={(e) => setInput(e.target.value)}
          onBlur={() => onChangeText(input)}
        />
      </div>
    );
  }

  function RootNodeEditor({ editor }: RootNodeEditorProps) {
    return <div>{editor}</div>;
  }


  if (showButton) {
    return (
      <div>
        <FormButton
          onClick={(e) => {
            e.preventDefault();
            console.log(defaultValue);
            onChange(defaultValue);
          }}
        >
          + Add Rule(s)
          </FormButton>
      </div>
    );
  } else if (loading) {
    // return <LoadingSpinnerCard height="133px"></LoadingSpinnerCard>;
    return <div>Loading...</div>
  } else {
    return (
      <Editor
        text={value || defaultValue}
        onChange={onChange}
        // isValidBasicExpression={JSONataUtils.isValidBasicExpression}
        theme={{
          ...SaasquatchTheme,
          ...FormEditorTheme,
          RootNodeEditor,
          ConditionEditor,
          ComparisonEditor,
          LeafValueEditor,
          PathEditor,
          ObjectUnaryEditor,
          ArrayUnaryEditor,
          IDETextarea: DisplayRulesIDETextarea,
        }}
      />
    );
  }
}

type ContextFormData = {
  schema: string;
};

type FormContext = {
formData: ContextFormData;
};

type JSONataEditorHookProps = {
  formContext: FormContext;
  value: string;
  options: {
    defaultValue: string;
  };
  onChange: (value: string) => void;
};


const JSONataEditorPreFill: React.FC<JSONataEditorHookProps> = (props) => {

  const { onChange } = props;
  const defaultValue = props.options.defaultValue;
  console.log('do we have a value', props.value)
  const value = props.value;

  const loading = false;
  const showButton = (!value || value === `null` || value.replace(/[\n\s\r]/g, "") === "{}");;

  const emptyBlock = value === null || value === undefined;


  const newProps = {
    states: {
      showButton,
      emptyBlock,
      loading,
      defaultValue,
    },
    data: {
      value,
      inputDataSchema: {},
      SchemaContext: null
    },
    callbacks: {
      onChange,
    },
  };

  return <JSONataEditorView {...newProps} />;
};

export default JSONataEditorPreFill;



type JSONataEditorHookStates = {
  showButton: boolean,
  emptyBlock: boolean,
  loading: boolean,
  defaultValue: string,
}

type JSONataEditorHookData = {
  value: string,
  inputDataSchema: Object,
  SchemaContext: any, //TODO
}

type WidgetOption = {
  keyTitle?: string,
  valueTitle?: string
}

type JSONataEditorViewProps = {
  states: JSONataEditorHookStates,
  data: JSONataEditorHookData,
  options?: WidgetOption,
  callbacks: {
    onChange: any // TODO
  }
}
