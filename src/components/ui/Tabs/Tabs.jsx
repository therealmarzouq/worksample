import React, { useEffect, useState } from "react";
import { TabPane } from "../../common";
import "./Tabs.css";

const Tabs = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState("");
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
    console.log(childCnt);
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div className="tabs">
      <ul className="app-l-tab__header">
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={
              "app-l-tab__header-item" +
              " " +
              (item === active ? "app-l-tab__header-item--active" : "")
            }>
            {item}
          </li>
        ))}
      </ul>
      <div className="app-l-tab__content">
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return <div className="app-l-tab__child">{childContent[key]}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPane) {
        error = new Error(
          "`" + componentName + "` children should be of type `TabPane`."
        );
      }
    });
    return error;
  },
};

export default Tabs;
