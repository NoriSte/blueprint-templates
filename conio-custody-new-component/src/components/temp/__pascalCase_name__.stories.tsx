import { wInfo } from "@/stories/utils";
import { storiesOf } from "@storybook/react";
import React from "react";
import {{pascalCase name}}Component from "./{{pascalCase name}}Component";

storiesOf("{{pascalCase name}}", module)
  .addWithJSX(
    "default",
    wInfo(`

  ### Notes

  TODO: component description

  ### Usage
  ~~~js
  TODO: Report the most common uses
  <{{pascalCase name}}Component>Authorize</{{pascalCase name}}Component>

  TODO:
  <{{pascalCase name}}Component label="conio">Children</{{pascalCase name}}Component>
  ~~~`)(() => (
      <div>
        <span>Not received HSM</span>
        <{{pascalCase name}}Component>Label</{{pascalCase name}}Component>

        <span>Not received HSM</span>
        <{{pascalCase name}}Component label="conio">Children</{{pascalCase name}}Component>
      </div>
    ))
  )
  .addWithJSX(
    "all cases",
    wInfo(`

  ### Notes

  TODO: component description

  ### Usage
  ~~~js
  TODO: Report the most common uses
  <{{pascalCase name}}Component>Authorize</{{pascalCase name}}Component>

  TODO:
  <{{pascalCase name}}Component label="conio">Children</{{pascalCase name}}Component>
  ~~~`)(() => (
      <div>
        <span>Not received HSM</span>
        <{{pascalCase name}}Component>Label</{{pascalCase name}}Component>

        <span>Not received HSM</span>
        <{{pascalCase name}}Component label="conio">Children</{{pascalCase name}}Component>
      </div>
    ))
  );
