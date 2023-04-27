import { useProgramId } from '@saasquatch/component-boilerplate';
import { useEffect, useState } from '@saasquatch/universal-hooks';
import debugFn from 'debug';
import { useTemplateChildren } from '../../utils/useTemplateChildren';
const debug = debugFn('sq:useProgramSwitch');

export type ProgramTemplate = {
  programId: string;
};

export function useProgramSwitch() {
  const programId = useProgramId();

  const [slot, setSlot] = useState<HTMLElement>(undefined);
  const [container, setContainer] = useState<HTMLDivElement>(undefined);

  useEffect(() => {
    if (!container || !slot) {
      debug('DOM not ready for program rendering on:', programId);
      return;
    }

    useTemplateChildren(slot, () => {
      // <template>
      const templates = slot.querySelectorAll<HTMLTemplateElement & ProgramTemplate>(`template`);
      const templatesArray = Array.from(templates);

      const template = templatesArray.find(template => {
        const templateProgramId = template.attributes?.['program-id']?.nodeValue;
        if (programId === templateProgramId) return template;
      });

      //@ts-ignore - can't access template attributes directly
      const templateProgramId = template?.attributes?.['program-id']?.nodeValue;

      debug({
        template,
        containerDatasetProgramId: container.dataset['program-id'],
        templateProgramId,
        programId,
      });

      // if no routes found, and the old route doesn't match the new route
      if (!template) {
        // No matching page, display nothing
        debug('No matching programId Template found for ', programId, ', so render nothing');
        container.innerHTML = '';
        container.dataset.programId = programId;
        return;
      }

      debug('Program selection updated to ', programId, template);
      // use outerHTML if template's innerHTML is unset (only happens in Stencilbook)
      const newContent = template.innerHTML || template.firstElementChild.outerHTML;

      // if template contents are an exact match
      if (newContent === container.innerHTML) {
        debug("don't rerender");
        // Same page, do not re-render
        // Reduces dom mutations, speeds up page speed
      } else if (template) {
        container.innerHTML = newContent;
        container.dataset.programId = templateProgramId;
      }
    });
  }, [slot, container, programId]);

  return {
    callbacks: {
      setSlot,
      setContainer,
    },
  };
}
