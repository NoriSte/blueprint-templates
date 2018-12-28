import { AppState } from '@/data';
import * as React from 'react';
import * as PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styles from "./{{pascalCase name}}.module.scss";


interface Props {
  label?: string,
  version?: string,
  aCallbackProp?: () => void
};

const {{pascalCase name}} = (props: Props) => {
  return <div className={styles["{{kebabCase name}}-root"]}>{JSON.stringify(this.props, null, 2)}</div>;
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