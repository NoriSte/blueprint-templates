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

export default {{pascalCase name}};