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

function mapStateToProps(state: AppState) {
  return {
    version: state.version.version,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    aCallbackProp: () => dispatch({type:"TODO:"}),
  };
};

interface State {

}
const initialState:State = {

}

class {{pascalCase name}}Component extends React.PureComponent<Props, State> {
  public static propTypes = {
    version: PropTypes.string
  };

  public static defaultProps = {
    version: ''
  };

  public state = initialState;

  public render() {
    return <div className={styles["{{kebabCase name}}-root"]}>{JSON.stringify(this.props, null, 2)}</div>;
  }
}

// export default {{pascalCase name}}Component;
export default connect(mapStateToProps, mapDispatchToProps)({{pascalCase name}}Component);
