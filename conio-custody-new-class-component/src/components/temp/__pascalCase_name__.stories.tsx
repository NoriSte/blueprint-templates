import { wInfo } from "@/stories/utils";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import {{pascalCase name}} from "./{{pascalCase name}}";

storiesOf("{{pascalCase name}}", module)
  .addWithJSX(
    "default",
    wInfo(`

  ### Notes

  TODO: component description

  ### Usage
  ~~~js
  TODO: Report the most common uses
  <{{pascalCase name}}>Authorize</{{pascalCase name}}>

  TODO:
  <{{pascalCase name}} label="conio">Children</{{pascalCase name}}>
  ~~~`)(() => (
      <div>
        <span>Not received HSM</span>
        <{{pascalCase name}}>Label</{{pascalCase name}}>

        <span>Not received HSM</span>
        <{{pascalCase name}} label="conio">Children</{{pascalCase name}}>
      </div>
    ))
  )
  .addWithJSX(
    "all cases",
    (() => (
      <div>
        <span>Not received HSM</span>
        <{{pascalCase name}}>Label</{{pascalCase name}}>

        <span>Not received HSM</span>
        <{{pascalCase name}} label="conio">Children</{{pascalCase name}}>
      </div>
    ))
  );
