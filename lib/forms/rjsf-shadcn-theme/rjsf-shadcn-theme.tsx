import { ThemeProps, withTheme } from "@rjsf/core";
import { RegistryWidgetsType, WidgetProps } from "@rjsf/utils";
// import templates
import BaseInputTemplate from "./templates/BaseInputTemplate";
import SubmitButton from "./templates/ButtonTemplates/SubmitButton";
import ErrorListTemplate from "./templates/ErrorList";
import TextWidget from "./widgets/TextWidget";
import TextareaWidget from "./widgets/TextareaWidget";

const MyCustomWidget = (props: WidgetProps) => {
  return (
    <div>
      <h1>I'm here</h1>
      <input
        type="text"
        className="custom"
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
};

const customizedTemplates = {
  BaseInputTemplate,
  ErrorListTemplate,
  ButtonTemplates: {
    SubmitButton,
  },
};

const customizedWidget: RegistryWidgetsType = {
  TextWidget,
  TextareaWidget,
};

const theme: ThemeProps = {
  templates: customizedTemplates,
  widgets: customizedWidget,
};

const ThemedForm = withTheme(theme);

export default ThemedForm;
