import React from "react";

const TestCourseParent = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Aprrove</div>
          <div className="ui basic red button">Ignore</div>
        </div>
      </div>
    </div>
  );
};

export default TestCourseParent;
