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
    interface SqbAuthTemplateSwitch {
    }
    interface SqbConditionalSection {
        /**
          * Show child content when a user meets specified criteria. <a href="http://docs.jsonata.org/overview.html" target="_blank">JSONata expression</a> is used to define this logic. A participant’s segments, country code, custom fields and email can be used.
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
    interface SqbRedirect {
        /**
          * @uiName Redirect Path
          * @uiWidget pageSelect
         */
        "redirectTo": string;
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
    interface HTMLSqbAuthTemplateSwitchElement extends Components.SqbAuthTemplateSwitch, HTMLStencilElement {
    }
    var HTMLSqbAuthTemplateSwitchElement: {
        prototype: HTMLSqbAuthTemplateSwitchElement;
        new (): HTMLSqbAuthTemplateSwitchElement;
    };
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
    interface HTMLSqbRedirectElement extends Components.SqbRedirect, HTMLStencilElement {
    }
    var HTMLSqbRedirectElement: {
        prototype: HTMLSqbRedirectElement;
        new (): HTMLSqbRedirectElement;
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
        "sqb-auth-template-switch": HTMLSqbAuthTemplateSwitchElement;
        "sqb-conditional-section": HTMLSqbConditionalSectionElement;
        "sqb-hook-story-container": HTMLSqbHookStoryContainerElement;
        "sqb-program-section": HTMLSqbProgramSectionElement;
        "sqb-program-switch": HTMLSqbProgramSwitchElement;
        "sqb-redirect": HTMLSqbRedirectElement;
        "sqb-stencilbook": HTMLSqbStencilbookElement;
        "sqb-widget": HTMLSqbWidgetElement;
    }
}
declare namespace LocalJSX {
    interface SqbAuthTemplateSwitch {
    }
    interface SqbConditionalSection {
        /**
          * Show child content when a user meets specified criteria. <a href="http://docs.jsonata.org/overview.html" target="_blank">JSONata expression</a> is used to define this logic. A participant’s segments, country code, custom fields and email can be used.
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
    interface SqbRedirect {
        /**
          * @uiName Redirect Path
          * @uiWidget pageSelect
         */
        "redirectTo"?: string;
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
        "sqb-auth-template-switch": SqbAuthTemplateSwitch;
        "sqb-conditional-section": SqbConditionalSection;
        "sqb-hook-story-container": SqbHookStoryContainer;
        "sqb-program-section": SqbProgramSection;
        "sqb-program-switch": SqbProgramSwitch;
        "sqb-redirect": SqbRedirect;
        "sqb-stencilbook": SqbStencilbook;
        "sqb-widget": SqbWidget;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sqb-auth-template-switch": LocalJSX.SqbAuthTemplateSwitch & JSXBase.HTMLAttributes<HTMLSqbAuthTemplateSwitchElement>;
            "sqb-conditional-section": LocalJSX.SqbConditionalSection & JSXBase.HTMLAttributes<HTMLSqbConditionalSectionElement>;
            "sqb-hook-story-container": LocalJSX.SqbHookStoryContainer & JSXBase.HTMLAttributes<HTMLSqbHookStoryContainerElement>;
            "sqb-program-section": LocalJSX.SqbProgramSection & JSXBase.HTMLAttributes<HTMLSqbProgramSectionElement>;
            "sqb-program-switch": LocalJSX.SqbProgramSwitch & JSXBase.HTMLAttributes<HTMLSqbProgramSwitchElement>;
            "sqb-redirect": LocalJSX.SqbRedirect & JSXBase.HTMLAttributes<HTMLSqbRedirectElement>;
            "sqb-stencilbook": LocalJSX.SqbStencilbook & JSXBase.HTMLAttributes<HTMLSqbStencilbookElement>;
            "sqb-widget": LocalJSX.SqbWidget & JSXBase.HTMLAttributes<HTMLSqbWidgetElement>;
        }
    }
}
