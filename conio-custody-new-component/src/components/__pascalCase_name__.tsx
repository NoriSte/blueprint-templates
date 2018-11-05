import { AppState } from '@/data';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styles from "./{{pascalCase name}}.module.scss";


interface Props {
  aSimpleProp?: string,
  aCallbackProp?: (data:{}) => void
};

function mapStateToProps(state: AppState) {
  return {
    // token: state.auth.token,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // both for sync or async action creators
    // loadList: (params?:{}) => dispatch(actionName(params)),
  };
};

interface State {

}

class {{pascalCase name}} extends React.PureComponent<Props, State> {
  /*
  public  static getDerivedStateFromProps(nextProps: Props, prevState: State) {

  }
  */

  public render() {
    return <div className={styles["{{kebabCase name}}-root"]}>{JSON.stringify(this.props, null, 2)}</div>;
  }
}

// export default {{pascalCase name}};
export default connect(mapStateToProps, mapDispatchToProps)({{pascalCase name}});
