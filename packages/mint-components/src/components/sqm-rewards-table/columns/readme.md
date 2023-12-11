# sqm-rewards-table-column



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                      | Type     | Default                                                                                                                                                                                   |
| ------------------- | --------------------- | ---------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `columnTitle`       | `column-title`        |                                                                  | `string` | `"Status"`                                                                                                                                                                                |
| `expiryText`        | `expiry-text`         | Text shown before the date of an expiring reward.                | `string` | `"Expires on "`                                                                                                                                                                           |
| `pendingReviewText` | `pending-review-text` | Displayed when flagged for fraud.                                | `string` | `"Awaiting review"`                                                                                                                                                                       |
| `pendingScheduled`  | `pending-scheduled`   | Text shown before the available date of a pending reward.        | `string` | `"Until"`                                                                                                                                                                                 |
| `pendingUnhandled`  | `pending-unhandled`   | Displayed when fulfillment error occured when creating a reward. | `string` | `"Fulfillment error"`                                                                                                                                                                     |
| `pendingUsTax`      | `pending-us-tax`      | Displayed when a reward is pending due to W9 compliance.         | `string` | `"W-9 required"`                                                                                                                                                                          |
| `statusText`        | `status-text`         |                                                                  | `string` | `"{status, select, AVAILABLE {Available} CANCELLED {Cancelled} PENDING {Pending} PENDING_REVIEW {Pending} EXPIRED {Expired} REDEEMED {Redeemed} DENIED {Denied} other {Not available} }"` |


## Methods

### `renderCell(data: Reward, locale: string) => Promise<any>`



#### Returns

Type: `Promise<any>`



### `renderLabel() => Promise<string>`



#### Returns

Type: `Promise<string>`




## Dependencies

### Used by

 - [sqm-stencilbook](../../sqm-stencilbook)

### Depends on

- [sqm-rewards-table-status-cell](../cells)

### Graph
```mermaid
graph TD;
  sqm-rewards-table-status-column --> sqm-rewards-table-status-cell
  sqm-stencilbook --> sqm-rewards-table-status-column
  style sqm-rewards-table-status-column fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
