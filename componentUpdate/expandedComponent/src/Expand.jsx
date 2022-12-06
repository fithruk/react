import React from "react";

const Expand = ({ title, children, isOpen, toggleContent }) => {
  const styles = {
    transform: isOpen ? "rotate(0)" : "rotate(-180deg)",
  };

  //const child = isOpen && children;
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleContent}>
          <i className="fas fa-chevron-up" style={styles}></i>
        </button>
      </div>
      <div class="expand__content">{isOpen && children}</div>
    </div>
  );
};

export default Expand;
