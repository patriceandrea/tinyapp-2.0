import React from "react";
import Header from "../Components/Header";
import Table from "../Components/TableData";

export interface IMyUrlsProps { }

const MyUrls: React.FunctionComponent<IMyUrlsProps> = (props) => {
  return (

    <div>
      <Header />
      <h1>My Urls </h1>
      <Table />
    </div>
  )
};

export default MyUrls; 