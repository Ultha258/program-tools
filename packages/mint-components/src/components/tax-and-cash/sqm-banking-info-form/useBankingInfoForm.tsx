import { useRef, useState } from "@saasquatch/universal-hooks";
import { useParent } from "../../../utils/useParentState";
import { TAX_CONTEXT_NAMESPACE } from "../sqm-tax-and-cash/data";
import { BankingInfoForm } from "./sqm-banking-info-form";
import JSONPointer from "jsonpointer";

export function getIndex(binary, idx) {
  return binary.length - idx - 1;
}

export function useBankingInfoForm(props: BankingInfoForm) {
  const [step, setStep] = useParent<string>(TAX_CONTEXT_NAMESPACE);

  const [bitset, setBitset] = useState(42);

  const formRef = useRef<HTMLFormElement>(null);
  const [option, setOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = async (event: any) => {
    if (!option) {
      setErrors({ taxDetails: true });
      return;
    }

    let formData: Record<string, string> = { taxOption: option };
    let validationErrors: Record<string, string> = {};

    const controls = event.target.getFormControls();

    controls.forEach((control) => {
      if (!control.name || !control.id) return;
      if (option === "notRegistered") return; // Don't include fields for notRegistered option

      const key = control.name;
      const value = control.value;
      JSONPointer.set(formData, key, value);

      if (control.required && !value) {
        JSONPointer.set(validationErrors, key, true);
      }
    });

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) {
      return;
    }

    setLoading(true);
    try {
      console.log({ formData });

      // const result = await connectImpactPartner({
      //   vars: {
      //     userId: user.id,
      //     accountId: user.accountId,
      //     firstName: userForm.firstName,
      //     lastName: userForm.lastName,
      //     country: userForm.countryCode, // TODO: May need formatting
      //     currency: userForm.currency,
      //     ...fields,
      //   },
      // });
      // if (!result || (result as Error)?.message) throw new Error();

      // setStep("/3");
    } catch (e) {
      setErrors({ general: true });
    } finally {
      setLoading(false);
    }
  };

  return {
    step: step,
    setStep: setStep,

    text: { ...props, error: {} },

    callbacks: {
      onSubmit: async () => {},
      onChange: setOption,
    },
    states: {
      disabled: false,
      loading: false,
      hideSteps: false,
      formState: {
        checked: "toBankAccount" as "toBankAccount" | "toPaypalAccount",
        errors: {
          general: false,
        },
      },
    },
    refs: {
      formRef,
    },
    demo: {
      bitset,
      setBitset,
    },
  };
}
