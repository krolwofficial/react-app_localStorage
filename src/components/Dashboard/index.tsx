import React from "react";
import Form from "./Form";
import Preview from "./Preview";

const Dashboard = () => (
  <div className="row page ">
    <div className="col s12 m5 l5 offset-l1">
      <div className="container">
        <Form />
      </div>
    </div>
    <div className="col s12 m7 l6">
      <div className="container white">
        <Preview />
      </div>
    </div>
  </div>
);

export default Dashboard;
