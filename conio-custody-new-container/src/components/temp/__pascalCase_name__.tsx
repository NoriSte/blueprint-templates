import * as React from 'react';
import styles from "./{{pascalCase name}}.module.scss";
import * as PropTypes from "prop-types";
import c from "classnames";


// tslint:disable-next-line:no-empty-interface
export interface ComponentProps {
  label?: string,
}

// tslint:disable-next-line:no-empty-interface
interface State {}
const initialState: State = {};

class {{pascalCase name}} extends React.PureComponent<Props, State> {
  public static propTypes = {
    /**
     * Description
     */
    label: PropTypes.string,
    // anotherProp: requiredIf(PropTypes.number.isRequired, (props: Props) => !!props.label)
  };

  public static defaultProps = {
    label: '',
  };

  constructor(props: Props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = initialState;
  }

  public render() {
    return <div className={c("{{kebabCase name}}-root", styles["{{kebabCase name}}-root"])}>{JSON.stringify(this.props, null, 2)}</div>;
  }
}

export default {{pascalCase name}};
