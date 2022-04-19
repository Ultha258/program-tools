# sqm-share-link



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                             | Type                                                                                                        | Default                 |
| ----------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------- |
| `demoData`        | --                 |                                                                                                                         | `{ disabled?: boolean; onClick?: () => void; shareString?: string; open?: boolean; tooltiptext?: string; }` | `undefined`             |
| `programId`       | `program-id`       | The ID of the program that should generate the link. Defaults to the program ID in context where this widget is loaded. | `string`                                                                                                    | `undefined`             |
| `tooltiplifespan` | `tooltip-lifespan` | The number of milliseconds that the tooltip will appear for                                                             | `number`                                                                                                    | `1000`                  |
| `tooltiptext`     | `tooltip-text`     | This is shown after someone has successfully copied the link to the clipboard.                                          | `string`                                                                                                    | `"Copied to Clipboard"` |


## Dependencies

### Used by

 - [sqm-stencilbook](../sqm-stencilbook)

### Graph
```mermaid
graph TD;
  sqm-stencilbook --> sqm-share-link
  style sqm-share-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
