import React, { PureComponent } from "react";
import "./Button.scss";

class Button extends PureComponent {
  render() {
    const { children, onClick } = this.props;
    return (
      <button onClick={onClick} type="submit" className="default-button">
        {children}
      </button>
    );
  }
}

export default Button;
