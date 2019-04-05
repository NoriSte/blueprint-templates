import * as React from 'react';
import * as PropTypes from "prop-types";
import styles from "./{{pascalCase name}}.module.scss";
import c from "classnames";

// Remember to
// TODO: compile the stories
// TODO: add the callback tests

interface Props {
  label?: string,
  version?: string,
  aCallbackProp?: () => void
};

const {{pascalCase name}} = (props: Props) => {
  return <div className={c("{{kebabCase name}}-root", styles["{{kebabCase name}}-root"])}>{JSON.stringify(props, null, 2)}</div>;
};

// @see https://reactjs.org/docs/typechecking-with-proptypes.html
{{pascalCase name}}.propTypes = {
  /**
   * Description
   */
  label: PropTypes.string,
  /**
   * Description
   */
  version: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Description
   */
  aCallbackProp: PropTypes.func
  // aCallbackProp: requiredIf(PropTypes.number.isRequired, (props: Props) => !!props.label)
};

{{pascalCase name}}.defaultProps = {
  label: '',
  version: '0.0.0',
  aCallbackProp: null,
};

export default {{pascalCase name}};