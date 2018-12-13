import * as React from 'react';
import styles from "./{{pascalCase name}}.module.scss";


// tslint:disable-next-line:no-empty-interface
export interface ComponentProps {}

// tslint:disable-next-line:no-empty-interface
interface State {}
const initialState: State = {};

class {{pascalCase name}}Component extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = initialState;
  }

  public render() {
    return <div className={styles["{{kebabCase name}}-root"]}>{JSON.stringify(this.props, null, 2)}</div>;
  }
}

export default {{pascalCase name}}Component;
