# sqm-portal-change-password



<!-- Auto Generated Below -->


## Properties

| Property                         | Attribute                            | Description                             | Type                                                                                                                                                                                                                                                                                                                                                            | Default                             |
| -------------------------------- | ------------------------------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `cancelText`                     | `cancel-text`                        | Modal cancel button text                | `string`                                                                                                                                                                                                                                                                                                                                                        | `"Cancel"`                          |
| `changePasswordButtonText`       | `change-password-button-text`        | Modal change password button text       | `string`                                                                                                                                                                                                                                                                                                                                                        | `"Change Password"`                 |
| `confirmPasswordFieldLabel`      | `confirm-password-field-label`       | Password confirmation input field label | `string`                                                                                                                                                                                                                                                                                                                                                        | `"Confirm New Password"`            |
| `demoData`                       | --                                   |                                         | `{ states?: { open: boolean; error: string; loading: boolean; success: boolean; content: { modalChangePasswordHeader: string; cancelText: string; changePasswordButtonText: string; passwordFieldLabel: string; confirmPasswordFieldLabel: string; successMessage: string; portalChangePasswordHeader: string; portalChangePasswordButtonText: string; }; }; }` | `undefined`                         |
| `modalChangePasswordHeader`      | `modal-change-password-header`       |                                         | `string`                                                                                                                                                                                                                                                                                                                                                        | `"Change Password"`                 |
| `passwordFieldLabel`             | `password-field-label`               | Password input field label              | `string`                                                                                                                                                                                                                                                                                                                                                        | `"New Password"`                    |
| `portalChangePasswordButtonText` | `portal-change-password-button-text` |                                         | `string`                                                                                                                                                                                                                                                                                                                                                        | `"Change your password..."`         |
| `portalChangePasswordHeader`     | `portal-change-password-header`      | Portal change password section header   | `string`                                                                                                                                                                                                                                                                                                                                                        | `"Password"`                        |
| `successMessage`                 | `success-message`                    | Successful password change message      | `string`                                                                                                                                                                                                                                                                                                                                                        | `"Your password has been updated."` |


## Dependencies

### Used by

 - [sqm-stencilbook](../sqm-stencilbook)

### Depends on

- [sqm-form-message](../sqm-form-message)
- [sqm-password-field](../sqm-password-field)

### Graph
```mermaid
graph TD;
  sqm-portal-change-password --> sqm-form-message
  sqm-portal-change-password --> sqm-password-field
  sqm-stencilbook --> sqm-portal-change-password
  style sqm-portal-change-password fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
