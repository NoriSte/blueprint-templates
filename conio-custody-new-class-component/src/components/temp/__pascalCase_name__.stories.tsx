import { wInfoStyle } from "@/stories/utils";
import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import {{pascalCase name}} from "./{{pascalCase name}}";

storiesOf("{{pascalCase name}}", module)
  .addDecorator(withInfo)
  .add(
    "default",
    () => (
      <{{pascalCase name}} />
    ),
    {
      info: {
        inline: true,
        propTablesExclude: [], // these components will be excluded from the propTypes table
        source: true,
        styles: wInfoStyle,
        text: `

  ### Notes

  TODO: component description

  Remember that:
  - TODO: ...
  - TODO: ...

  ### Usage
  ~~~js
  TODO: Report the most common uses
  <{{pascalCase name}}>Authorize</{{pascalCase name}}>

  TODO:
  <{{pascalCase name}} label="conio">Children</{{pascalCase name}}>
  ~~~`}}
  )
  .addWithJSX(
    "all cases",
    (() => (
       <div>
        <h3>With...</h3>
        <{{pascalCase name}} />
        <br />

        <h3>With...</h3>
        <{{pascalCase name}} />
        <br />
      </div>
    ))
  )
  .addWithJSX(
    "playground",
    (() => (
       <{{pascalCase name}} data={boolean("DATA_NAME", false)} />
    )),
    // @ts-ignore
    { eyes: { include: false } }
  );
