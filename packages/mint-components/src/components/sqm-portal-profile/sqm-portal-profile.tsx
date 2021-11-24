import { Component, h, Prop, State } from "@stencil/core";
import { withHooks } from "@saasquatch/stencil-hooks";
import {
  PortalProfileView,
  PortalProfileViewProps,
} from "./sqm-portal-profile-view";
import { usePortalProfile } from "./usePortalProfile";
import { getProps } from "../../utils/utils";
import { isDemo } from "@saasquatch/component-boilerplate";
import { DemoData } from "../../global/demo";
import deepmerge from "deepmerge";

/**
 * @uiName Portal Profile
 */
@Component({
  tag: "sqm-portal-profile",
  shadow: true,
})
export class PortalProfile {
  @State()
  ignored = true;

  /**
   * @uiName First name input field label
   */
  @Prop() firstnametext: string = "First Name";

  /**
   * @uiName Last name input field label
   */
  @Prop() lastnametext: string = "Last Name";

  /**
   * @uiName Email input field label
   */
  @Prop() emailtext: string = "Email";

  /**
   * @uiName Country input field label
   */
  @Prop() countrytext: string = "Country";

  /**
   * @uiName Edit profile header
   */
  @Prop() editProfileHeader: string = "Edit your profile";

  /**
   * @uiName Edit profile sub header
   */
  @Prop() editProfileSubHeader: string = "Personal Information";

  /**
   * @uiName Text for the submit changes button
   */
  @Prop() submitChangeButtonText: string = "Submit Changes";

  /**
   * @uiName Show or hide country field
   */
  @Prop() showCountry: boolean = true;

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<PortalProfileViewProps>;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const props = isDemo()
      ? usePortalProfileDemo(getProps(this))
      : usePortalProfile(getProps(this));
    return <PortalProfileView {...props} />;
  }
}

function usePortalProfileDemo(props: PortalProfile): PortalProfileViewProps {
  return deepmerge(
    {
      states: {
        success: false,
        loading: false,
        submitDisabled: false,
        showCountry: true,
        user: {
          id: "01",
          accountId: "111100000",
          firstName: "Joe",
          lastName: "Smith",
          email: "jsmith@gmail.com",
          countryCode: "CA",
        },
        text: {
          firstnametext: "First Name",
          lastnametext: "Last Name",
          emailtext: "Email",
          countrytext: "Country",
          editProfileHeader: "Edit your profile",
          editProfileSubHeader: "Personal Information",
          submitChangeButtonText: "Submit Changes",
        },
        formState: {
          country: "Canada",
          firstName: "Joe",
          lastName: "Smith",
          errors: null,
          error: "",
        },
      },
      callbacks: {
        onSubmit: (e) => console.log(e),
        onChange: (e) => console.log(e),
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
