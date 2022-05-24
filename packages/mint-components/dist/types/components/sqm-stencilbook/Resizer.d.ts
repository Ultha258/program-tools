import { FunctionalComponent } from "../../stencil-public-runtime";
export declare const ResizerStylesheet = "\n\n:root{\n    --checker-color-1: #ffffff00;\n    --checker-color-2: #ffffff00;\n    --checker-size: 7px;\n    --checker-gradient: linear-gradient(45deg, var(--checker-color-1) 25%, transparent 25%, transparent 75%, var(--checker-color-1) 75%);\n}\n.resizer{\n    resize: horizontal;\n    border: 2px dashed gray;\n\tmargin: -2px;\n    padding: 12px;\n    height: fit-content;\n    overflow: hidden;\n}\n\n.resizer{\n    background-color: var(--checker-color-2);\n    background-image: var(--checker-gradient), var(--checker-gradient);\n    background-position: 0 0, var(--checker-size) var(--checker-size);\n    background-size: calc(var(--checker-size) * 2) calc(var(--checker-size) * 2);\n}\n";
export declare const Resizer: FunctionalComponent;
