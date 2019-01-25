import React, { Component } from "react";
// import TestCourse from "./components/course-4/TestCourse";
// import TestCourse from "./components/course-16/TestCourse";
// import TestCourse from "./components/course-19/TestCourse";
// import TestCourse from "./components/course-26/TestCourse";
// import TestCourse from "./components/course-27/TestCourse";
import TestCourse from "./components/course-27/TestCourse";
import TestCourseParent from "./components/course-27/TestCourseParent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestCourseParent>
          <TestCourse name="takim" time="3:00" comment="gokil" />
        </TestCourseParent>
        <TestCourseParent>
          <TestCourse name="putri" time="3:20" comment="gokil banget" />
        </TestCourseParent>
        <TestCourseParent>
          <TestCourse name="ghisa" time="3:40" comment="woww" />
        </TestCourseParent>
      </div>
    );
  }
}

export default App;
