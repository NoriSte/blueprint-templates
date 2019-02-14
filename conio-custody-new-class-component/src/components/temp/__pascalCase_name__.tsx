import { AppState } from '@/data';
import * as React from 'react';
import * as PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styles from "./{{pascalCase name}}.module.scss";

// Remember to
// TODO: compile the stories
// TODO: add the callback tests

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

class {{pascalCase name}} extends React.PureComponent<Props, State> {
  public static propTypes = {
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

  public static defaultProps = {
    label: '',
    version: '0.0.0',
    aCallbackProp: null,
  };

  public state = initialState;

  public render() {
    return <div className={styles["{{kebabCase name}}-root"]}>{JSON.stringify(this.props, null, 2)}</div>;
  }
}

// export default {{pascalCase name}};
export default connect(mapStateToProps, mapDispatchToProps)({{pascalCase name}});
