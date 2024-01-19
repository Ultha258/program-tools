import { useParent } from "../../../utils/useParentState";
import { TAX_CONTEXT_NAMESPACE } from "../sqm-tax-and-cash/useTaxAndCash";
import { TaxForm } from "./sqm-tax-form";

export function useTaxForm(props: TaxForm) {
  const [step, setStep] = useParent<string>(TAX_CONTEXT_NAMESPACE);

  return {
    step: step,
    setStep: setStep,
    text: {
      ...props,
    },
  };
}
