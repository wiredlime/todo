import React from "react";

function Header({ title, subTitle }) {
  //props has to stay inside {}
  return (
    <h1 className="title">
      {title}
      <span className="subtitle">{subTitle}</span>
    </h1>
  );
}

export default Header;
