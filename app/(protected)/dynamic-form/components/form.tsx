"use client";

import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

const schema: RJSFSchema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const DynamicForm = () => {
  return (
    <div className="schema-form">
      <Form
        schema={schema}
        validator={validator}
        onChange={(e) => console.log("change", e)}
        onSubmit={(e) => console.log("submit", e)}
        onError={(e) => console.log("error", e)}
      />
    </div>
  );
};

export default DynamicForm;
