import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.handleOpen}> Signin </button>
      <p>Icon</p>
      <p>Navs</p>
      <p>Modal</p>
    </React.Fragment>
  );
};

export default Header;
