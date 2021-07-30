import { h } from "@stencil/core";
import jss from "jss";
import preset from "jss-preset-default";
import { PortalContainerView } from "../sqm-portal-container/sqm-portal-container-view";
import { PortalSectionView } from "../sqm-titled-section/sqm-portal-section-view";
import { TextSpanView } from "../sqm-text-span/sqm-text-span-view";

export interface PortalChangePasswordViewProps {
  states: { open: boolean; error: string; loading: boolean; success: boolean };
  callbacks: {
    setOpen: (open: boolean) => void;
    submit: (event: MouseEvent) => void;
  };
}

export function PortalChangePasswordView(props: PortalChangePasswordViewProps) {
  const { states, callbacks } = props;
  const style = {
    Dialog: {
      padding: "0",
      "&::part(close-button)": {
        "margin-top": "var(--sl-spacing-medium)",
      },

      "&::part(body)": {
        padding:
          "0 var(--sl-spacing-x-large) var(--sl-spacing-x-large) var(--sl-spacing-x-large)",
      },
    },

    Error: {
      "&::part(erroralert-base)": {
        "margin-bottom": "15px",
      },
    },

    InputContainer: {
      "& > :not(:last-child)": {
        "margin-bottom": "var(--sl-spacing-x-large)",
      },
    },

    CancelButton: {
      width: "25%",
      margin: "var(--sl-spacing-large) auto",
    },
  };

  jss.setup(preset());
  const sheet = jss.createStyleSheet(style);
  const styleString = sheet.toString();

  return (
    <div>
      <style type="text/css">{styleString}</style>
      <sl-dialog
        class={sheet.classes.Dialog}
        open={states.open}
        onSl-hide={() => callbacks.setOpen(false)}
      >
        {/* {states.error && (
          <sqm-form-message
            class={sheet.classes.Error}
            type="error"
            exportparts="erroralert-icon"
          >
            <div part="erroralert-text">{states.error}</div>
          </sqm-form-message>
        )}
        {states.success && (
          <sqm-form-message type="success" exportparts="successalert-icon">
            <div part="successalert-text">Your password has been updated.</div>
          </sqm-form-message>
        )} */}
        <PortalSectionView
          {...{
            labelMargin: "x-large",
            padding: "none",
            label: (
              <TextSpanView {...{ type: "h2" }}>Change password</TextSpanView>
            ),
            content: (
              <PortalContainerView
                {...{ direction: "column", padding: "none", gap: "32px" }}
              >
                {states.error && (
                  <sqm-form-message
                    class={sheet.classes.Error}
                    type="error"
                    exportparts="erroralert-icon"
                  >
                    <div part="erroralert-text">{states.error}</div>
                  </sqm-form-message>
                )}
                {states.success && (
                  <sqm-form-message
                    type="success"
                    exportparts="successalert-icon"
                  >
                    <div part="successalert-text">
                      Your password has been updated.
                    </div>
                  </sqm-form-message>
                )}
                <sl-form onSl-submit={callbacks.submit}>
                  <div class={sheet.classes.InputContainer}>
                    <sl-input
                      name="/password"
                      label="New password"
                      required
                      togglePassword
                      disabled={states.loading}
                      type="password"
                    ></sl-input>
                    <sl-input
                      name="/confirmPassword"
                      label="Confirm new password"
                      required
                      togglePassword
                      disabled={states.loading}
                      type="password"
                    ></sl-input>
                  </div>

                  <PortalContainerView
                    {...{ direction: "row", padding: "none", gap: "20px" }}
                  >
                    <sl-button
                      class={sheet.classes.CancelButton}
                      type="text"
                      onClick={() => callbacks.setOpen(false)}
                    >
                      Cancel
                    </sl-button>
                    <sl-button type="default" submit loading={states.loading}>
                      Change Password
                    </sl-button>
                  </PortalContainerView>
                </sl-form>
              </PortalContainerView>
            ),
          }}
        ></PortalSectionView>
      </sl-dialog>
      <PortalSectionView
        {...{
          labelMargin: "x-large",
          padding: "xxx-large",
          label: <TextSpanView {...{ type: "h2" }}>Password</TextSpanView>,
          content: (
            <sl-button onClick={() => callbacks.setOpen(true)}>
              Change your password...
            </sl-button>
          ),
        }}
      >
        <style type="text/css">{styleString}</style>
      </PortalSectionView>
    </div>
  );
}
