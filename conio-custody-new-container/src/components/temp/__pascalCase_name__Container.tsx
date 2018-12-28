import { AppState } from "@/data";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {{pascalCase name}}, { ComponentProps } from "./{{pascalCase name}}";
import { Props } from './{{pascalCase name}}Container';


//////////////////////////////////////////////////
// STATE PROPS
export interface StateProps {
  version: string;
}

function mapStateToProps(state: AppState): StateProps {
  return {
    version: state.version.version
  };
}

//////////////////////////////////////////////////
// DISPATCH PROPS
export interface DispatchProps {
  dispatchAction: () => void;
}
const mapDispatchToProps = (dispatch: Dispatch /*, ownProps: ComponentProps*/): DispatchProps => {
  return {
    dispatchAction: () => dispatch(ACTION_creator())
  };
};

//////////////////////////////////////////////////
// PROPS
export interface Props extends StateProps, DispatchProps, ComponentProps {
  somethingMore: boolean;
}

const mergeProps = (
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: ComponentProps
): Props => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    somethingMore: !!stateProps.version && !!dispatchProps.dispatchAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)({{pascalCase name}});

