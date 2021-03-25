import { useCurrentPage } from "@saasquatch/component-boilerplate";
import { useEffect, useState } from "@saasquatch/universal-hooks";
import debugFn from "debug";
const debug = debugFn("sq:useRouter");

export function useRouter() {
  const location = useCurrentPage();

  const [slot, setSlot] = useState<HTMLElement>(undefined);
  const [container, setContainer] = useState<HTMLDivElement>(undefined);

  const page = location.pathname;
  useEffect(() => {
    if (!container || !slot) {
      debug("DOM not ready for navigation rendering on:", page);
      return;
    }
    const template = slot.querySelector<HTMLTemplateElement>(
      `template[path="${page}"]`
    );
    const route = slot.querySelector<HTMLElement>(
      `sqm-route[path^="${page}"]`
    );

    if (!route && !template) {
      // No matching page, display nothing
      debug("No matching page found for ", page, " so displaying nothing");
      container.innerHTML = "";
      container.dataset.page = page;
      return;
    }

    debug("Page updated to ", page, template, route);

    if (container.dataset.page === page) {
      // Same page, do not re-render
      // Reduces dom mutations, speeds up page speed
    } else if (template) {
      // const element = template.content.cloneNode(true);
      container.innerHTML = template.innerHTML;
      container.dataset.page = page;
      // container.appendChild(element);
    } else if (route) {
      container.innerHTML = route.innerHTML;
      debug("route container innerHTML:", container.innerHTML)
      container.dataset.page = page;
    }
  }, [slot, container, page]);

  return {
    callbacks: {
      setSlot,
      setContainer,
    },
  };
}
