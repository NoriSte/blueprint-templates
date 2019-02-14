import "jest-dom/extend-expect";
import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import BeanPanel from "./BeanPanel";
import {{pascalCase name}} from "./{{pascalCase name}}";

describe("{{pascalCase name}} component tests", () => {
  it(`Should invoke the passed callback when the user clicks on ...`, () => {
    const mock = jest.fn();
    const { getByText } = render(
      <{{pascalCase name}}
        handleCloseClick={mock}
      />
    );

    fireEvent.click(getByText(...));

    expect(mock).toHaveBeenCalled();
    cleanup();
  });
});
