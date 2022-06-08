/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FunctionalComponent } from "@stencil/core";
import { DemoData } from "./global/demo";
export namespace Components {
    interface SqbConditionalSection {
        /**
          * Show child content when a user meets specified criteria. Logic is created with JSONata. A user's segments, country code, custom fields and email can be used.
          * @uiName Condition
          * @uiWidget textArea
          * @required 
          * @minLength 1
         */
        "condition": string;
    }
    interface SqbHookStoryContainer {
        "hookStory": FunctionalComponent;
    }
    interface SqbProgramSection {
        /**
          * Overwrite the program context used by child components with the selected program.
          * @uiName Program
          * @uiWidget programSelector
         */
        "programId": string;
    }
    interface SqbProgramSwitch {
    }
    interface SqbStencilbook {
    }
    interface SqbWidget {
        /**
          * @undocumented 
          * @uiType object
         */
        "demoData"?: DemoData<WidgetProps>;
        /**
          * When enabled then this widget is hidden until a user is logged in. Defaults to false.
          * @uiName Auth Required
         */
        "requireAuth": boolean;
        /**
          * When enabled then a load event will be recorded in analytics.
          * @uiName Track Widget Loads
         */
        "trackLoads": boolean;
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
          * Show child content when a user meets specified criteria. Logic is created with JSONata. A user's segments, country code, custom fields and email can be used.
          * @uiName Condition
          * @uiWidget textArea
          * @required 
          * @minLength 1
         */
        "condition"?: string;
    }
    interface SqbHookStoryContainer {
        "hookStory"?: FunctionalComponent;
    }
    interface SqbProgramSection {
        /**
          * Overwrite the program context used by child components with the selected program.
          * @uiName Program
          * @uiWidget programSelector
         */
        "programId"?: string;
    }
    interface SqbProgramSwitch {
    }
    interface SqbStencilbook {
    }
    interface SqbWidget {
        /**
          * @undocumented 
          * @uiType object
         */
        "demoData"?: DemoData<WidgetProps>;
        /**
          * When enabled then this widget is hidden until a user is logged in. Defaults to false.
          * @uiName Auth Required
         */
        "requireAuth"?: boolean;
        /**
          * When enabled then a load event will be recorded in analytics.
          * @uiName Track Widget Loads
         */
        "trackLoads"?: boolean;
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
