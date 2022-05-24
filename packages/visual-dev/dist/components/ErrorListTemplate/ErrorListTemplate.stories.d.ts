/// <reference types="react" />
/// <reference types="@rjsf/core" />
declare const _default: {
    title: string;
    component: {
        (props: import("@rjsf/core").FieldTemplateProps<any>): JSX.Element;
        Label: import("styled-components").StyledComponent<"label", any, {}, never>;
        Description: import("styled-components").StyledComponent<"div", any, {}, never>;
        HelpText: import("styled-components").StyledComponent<"div", any, {}, never>;
        Errors: import("styled-components").StyledComponent<"ul", any, {}, never>;
        Container: import("styled-components").StyledComponent<"div", any, {}, never>;
        ErrorItem: import("styled-components").StyledComponent<"li", any, {}, never>;
        RequiredLabel: import("styled-components").StyledComponent<"span", any, {}, never>;
    };
};
export default _default;
export declare const OneError: () => JSX.Element;
export declare const MultipleErrorsForOneField: () => JSX.Element;
export declare const ManyErrors: () => JSX.Element;
export declare const LongError: () => JSX.Element;
