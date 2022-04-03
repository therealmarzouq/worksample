import React from "react";
import PropTypes from "prop-types";

const TabPane = (props) => {
  return <div className="app-l-tab__pane">{props.childern}</div>;
};
TabPane.propTypes = {
  name: PropTypes.string,
};

export default TabPane;
