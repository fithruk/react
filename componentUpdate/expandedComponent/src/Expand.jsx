import React, { Component } from "react";

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent() {
    this.setState({
      isOpen: (this.state.isOpen = !this.state.isOpen),
    });
  }

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;
    const arrowClass = isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down";
    const child = isOpen && <div className="expand__content">{children}</div>;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleContent}>
            <i className={arrowClass}></i>
          </button>
        </div>
        {child}
      </div>
    );
  }
}

export default Expand;
