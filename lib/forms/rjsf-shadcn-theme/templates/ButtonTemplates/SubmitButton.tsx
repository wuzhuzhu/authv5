import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  SubmitButtonProps,
  getSubmitButtonOptions,
} from "@rjsf/utils";

/** The `SubmitButton` renders a button that represent the `Submit` action on a form
 */
export default function SubmitButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({ uiSchema }: SubmitButtonProps<T, S, F>) {
  const {
    submitText,
    norender,
    props: submitButtonProps = {},
  } = getSubmitButtonOptions<T, S, F>(uiSchema);
  if (norender) {
    return null;
  }
  return (
    <Button
      type="submit"
      {...submitButtonProps}
      className={cn(
        submitButtonProps.className
        // "bg-red-400"
      )}
      // variant="outline"
    >
      {submitText}
    </Button>
  );
}
