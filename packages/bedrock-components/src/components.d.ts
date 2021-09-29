/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FunctionalComponent } from "@stencil/core";
export namespace Components {
    interface SqbConditionalSection {
        /**
          * Only show this section when a user meets the following conditions.  Can use `user.segments` and `user.customFields`.   - `"VIP" in user.segments`  - `user.customFields.age > 19`
          * @uiName Condition
         */
        "condition": string;
    }
    interface SqbHookStoryContainer {
        "hookStory": FunctionalComponent;
    }
    interface SqbProgramSection {
        /**
          * The program that everything in this section should use
          * @uiName Program
         */
        "programId": string;
    }
    interface SqbProgramSwitch {
    }
    interface SqbStencilbook {
    }
    interface SqbWidget {
        /**
          * When enabled then this widget is hidden until a user is logged in. Defaults to false.
          * @uiName Auth Required
         */
        "requireAuth": boolean;
        /**
          * The type of widget to load. Can be a program's widget, a global widget, or a classic widget. If this prop is missing, then nothing is shown.
          * @uiName Widget Type
         */
        "widgetType": string;
    }
}
declare global {
    interface HTMLSqbConditionalSectionElement extends Components.SqbConditionalSection, HTMLStencilElement {
    }
    var HTMLSqbConditionalSectionElement: {
        prototype: HTMLSqbConditionalSectionElement;
        new (): HTMLSqbConditionalSectionElement;
    };
    interface HTMLSqbHookStoryContainerElement extends Components.SqbHookStoryContainer, HTMLStencilElement {
    }
    var HTMLSqbHookStoryContainerElement: {
        prototype: HTMLSqbHookStoryContainerElement;
        new (): HTMLSqbHookStoryContainerElement;
    };
    interface HTMLSqbProgramSectionElement extends Components.SqbProgramSection, HTMLStencilElement {
    }
    var HTMLSqbProgramSectionElement: {
        prototype: HTMLSqbProgramSectionElement;
        new (): HTMLSqbProgramSectionElement;
    };
    interface HTMLSqbProgramSwitchElement extends Components.SqbProgramSwitch, HTMLStencilElement {
    }
    var HTMLSqbProgramSwitchElement: {
        prototype: HTMLSqbProgramSwitchElement;
        new (): HTMLSqbProgramSwitchElement;
    };
    interface HTMLSqbStencilbookElement extends Components.SqbStencilbook, HTMLStencilElement {
    }
    var HTMLSqbStencilbookElement: {
        prototype: HTMLSqbStencilbookElement;
        new (): HTMLSqbStencilbookElement;
    };
    interface HTMLSqbWidgetElement extends Components.SqbWidget, HTMLStencilElement {
    }
    var HTMLSqbWidgetElement: {
        prototype: HTMLSqbWidgetElement;
        new (): HTMLSqbWidgetElement;
    };
    interface HTMLElementTagNameMap {
        "sqb-conditional-section": HTMLSqbConditionalSectionElement;
        "sqb-hook-story-container": HTMLSqbHookStoryContainerElement;
        "sqb-program-section": HTMLSqbProgramSectionElement;
        "sqb-program-switch": HTMLSqbProgramSwitchElement;
        "sqb-stencilbook": HTMLSqbStencilbookElement;
        "sqb-widget": HTMLSqbWidgetElement;
    }
}
declare namespace LocalJSX {
    interface SqbConditionalSection {
        /**
          * Only show this section when a user meets the following conditions.  Can use `user.segments` and `user.customFields`.   - `"VIP" in user.segments`  - `user.customFields.age > 19`
          * @uiName Condition
         */
        "condition"?: string;
    }
    interface SqbHookStoryContainer {
        "hookStory"?: FunctionalComponent;
    }
    interface SqbProgramSection {
        /**
          * The program that everything in this section should use
          * @uiName Program
         */
        "programId"?: string;
    }
    interface SqbProgramSwitch {
    }
    interface SqbStencilbook {
    }
    interface SqbWidget {
        /**
          * When enabled then this widget is hidden until a user is logged in. Defaults to false.
          * @uiName Auth Required
         */
        "requireAuth"?: boolean;
        /**
          * The type of widget to load. Can be a program's widget, a global widget, or a classic widget. If this prop is missing, then nothing is shown.
          * @uiName Widget Type
         */
        "widgetType"?: string;
    }
    interface IntrinsicElements {
        "sqb-conditional-section": SqbConditionalSection;
        "sqb-hook-story-container": SqbHookStoryContainer;
        "sqb-program-section": SqbProgramSection;
        "sqb-program-switch": SqbProgramSwitch;
        "sqb-stencilbook": SqbStencilbook;
        "sqb-widget": SqbWidget;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sqb-conditional-section": LocalJSX.SqbConditionalSection & JSXBase.HTMLAttributes<HTMLSqbConditionalSectionElement>;
            "sqb-hook-story-container": LocalJSX.SqbHookStoryContainer & JSXBase.HTMLAttributes<HTMLSqbHookStoryContainerElement>;
            "sqb-program-section": LocalJSX.SqbProgramSection & JSXBase.HTMLAttributes<HTMLSqbProgramSectionElement>;
            "sqb-program-switch": LocalJSX.SqbProgramSwitch & JSXBase.HTMLAttributes<HTMLSqbProgramSwitchElement>;
            "sqb-stencilbook": LocalJSX.SqbStencilbook & JSXBase.HTMLAttributes<HTMLSqbStencilbookElement>;
            "sqb-widget": LocalJSX.SqbWidget & JSXBase.HTMLAttributes<HTMLSqbWidgetElement>;
        }
    }
}
