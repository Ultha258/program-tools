import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, Prop, State } from "@stencil/core";
import { usePortalProtectedRoute } from "./usePortalProtectedRoute";

/**
 * @uiName Portal Protected Route
 */
@Component({
  tag: "sqm-portal-protected-route",
  shadow: true,
})
export class PortalProtectedRoute {
  @State()
  ignored = true;

  @Prop()
  redirectTo = "/";

  @Prop()
  requireEmailVerification = false;

  @Prop()
  redirectToUnverified = "/emailVerification";

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    isDemo()
      ? usePortalProtectedRouteDemo(this)
      : usePortalProtectedRoute(this);
  }
}

function usePortalProtectedRouteDemo({}) {
  return;
}
