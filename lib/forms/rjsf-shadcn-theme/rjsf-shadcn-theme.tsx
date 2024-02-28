import { ThemeProps, withTheme } from "@rjsf/core";
import { RegistryWidgetsType, WidgetProps } from "@rjsf/utils";
import ErrorListTemplate from "./templates/ErrorList";

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

const myTemplates = {
  ErrorListTemplate,
};

const myWidgets: RegistryWidgetsType = {
  myCustomWidget: MyCustomWidget,
};

const theme: ThemeProps = {
  templates: myTemplates,
  widgets: { test: () => <div>test</div> },
};

const ThemedForm = withTheme(theme);

export default ThemedForm;
