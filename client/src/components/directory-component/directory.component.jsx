import React from "react";

import { selectDirectorySections } from "../../redux/directory/directory-selector";

import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item-component/menu-item.component";

import "./directory.style.scss";

const Directory = () => {
  const structuredSelector = createStructuredSelector({
    sections: selectDirectorySections,
  });
  const { sections } = useSelector(structuredSelector);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
};
export default Directory;
