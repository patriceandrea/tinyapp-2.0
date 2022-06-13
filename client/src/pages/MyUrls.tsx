import React from "react";
import Header from "../Components/Header";


export interface IMyUrlsProps { }

const MyUrls: React.FunctionComponent<IMyUrlsProps> = (props) => {
  return (

    <div>
      <Header />
      <h1>My Urls </h1>
    </div>
  )
};

export default MyUrls; 