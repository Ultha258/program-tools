import { JSONSchema7 } from "json-schema";
import React from "react";
import { Button } from "../Button";
import { RJSFInput } from "../Input";
import Form, { WidgetProps } from "@rjsf/core";
import { FieldTemplate } from "./FieldTemplate";
import { ObjectFieldTemplate } from "../ObjectFieldTemplate";
import { ErrorListTemplate } from "../ErrorListTemplate";

export default {
  tags: ["autodocs"],
  title: "RJSF / Field Template",
  component: FieldTemplate,
};

const log = (type: any) => console.log.bind(console, type);

export const Default = () => {
  const uiSchema = {
    "ui:title": "Field Title",
    "ui:description":
      "Field descriptions appear below their respective fields now. Descriptions can get quite long",
    "ui:widget": (props: WidgetProps) => {
      return <RJSFInput {...props} />;
    },
  };

  const schema: JSONSchema7 = {
    type: "string",
  };

  return (
    <div style={{ margin: "100px", resize: "horizontal", overflow: "hidden" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        FieldTemplate={FieldTemplate}
      >
        <Button buttonType="primary" style={{ marginTop: 15 }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export const HideLabel = () => {
  const uiSchema = {
    "ui:title": "Field Title",
    "ui:description":
      "Field descriptions appear below their respective fields now. Descriptions can get quite long",
    "ui:widget": (props: WidgetProps) => {
      return <RJSFInput {...props} />;
    },
    "ui:options": {
      hideLabel: true,
    },
  };

  const schema: JSONSchema7 = {
    type: "string",
  };

  return (
    <div style={{ margin: "100px", resize: "horizontal", overflow: "hidden" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        FieldTemplate={FieldTemplate}
      >
        <Button buttonType="primary" style={{ marginTop: 15 }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export const CustomCSS = () => {
  const uiSchema = {
    "ui:title": "Field Title",
    "ui:description":
      "Field descriptions appear below their respective fields now. Descriptions can get quite long",
    "ui:widget": (props: WidgetProps) => {
      return <RJSFInput {...props} />;
    },
    "ui:options": {
      limitWidth: false,
      customCSS: {
        background: "blue",
      },
    },
  };

  const schema: JSONSchema7 = {
    type: "string",
  };

  return (
    <div style={{ margin: "100px", resize: "horizontal", overflow: "hidden" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        FieldTemplate={FieldTemplate}
      >
        <Button buttonType="primary" style={{ marginTop: 15 }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export const NoDescription = () => {
  const uiSchema = {
    "ui:title": "Field Title Without Description",
    "ui:widget": (props: WidgetProps) => {
      return <RJSFInput {...props} />;
    },
  };

  const schema: JSONSchema7 = {
    type: "string",
  };

  return (
    <div style={{ margin: "100px", resize: "horizontal", overflow: "hidden" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        FieldTemplate={FieldTemplate}
      >
        <Button buttonType="primary" style={{ marginTop: 15 }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export const WithHelp = () => {
  const uiSchema = {
    "ui:title": "Field Title",
    "ui:description":
      "Field descriptions appear below their respective fields now. Descriptions can get quite long",
    "ui:help": "Help text can also be added to fields",
    "ui:widget": (props: WidgetProps) => {
      return <RJSFInput {...props} />;
    },
  };

  const schema: JSONSchema7 = {
    type: "string",
  };

  return (
    <div style={{ margin: "100px", resize: "horizontal", overflow: "hidden" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        FieldTemplate={FieldTemplate}
      >
        <Button buttonType="primary" style={{ marginTop: 15 }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export const Required = () => {
  const uiSchema = {
    field: {
      "ui:title": "Field Title",
      "ui:description":
        "Field descriptions appear below their respective fields now. Descriptions can get quite long",
      "ui:widget": (props: WidgetProps) => {
        return <RJSFInput {...props} />;
      },
    },
  };

  const schema: JSONSchema7 = {
    type: "object",
    properties: {
      field: {
        type: "string",
      },
    },
    required: ["field"],
  };

  return (
    <div style={{ margin: "100px", resize: "horizontal", overflow: "hidden" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        FieldTemplate={FieldTemplate}
        ObjectFieldTemplate={ObjectFieldTemplate}
      >
        <Button buttonType="primary" style={{ marginTop: 15 }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export const WithErrors = () => {
  const uiSchema = {
    field: {
      "ui:title": "Field Title",
      "ui:description":
        "Field descriptions appear below their respective fields now. Descriptions can get quite long",
      "ui:widget": (props: WidgetProps) => {
        return <RJSFInput {...props} />;
      },
    },
  };

  const schema: JSONSchema7 = {
    type: "object",
    properties: {
      field: {
        type: "string",
      },
    },
    required: ["field"],
  };

  return (
    <div style={{ margin: "100px", resize: "horizontal", overflow: "hidden" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        FieldTemplate={FieldTemplate}
        ObjectFieldTemplate={ObjectFieldTemplate}
        ErrorList={ErrorListTemplate}
        extraErrors={{ field: { __errors: ["This field cannot be blank"] } }}
      >
        <Button buttonType="primary" style={{ marginTop: 15 }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
