import React from "react";
import Header from "../Components/Header";

export interface INewUrlsProps { }

const NewUrls: React.FunctionComponent<INewUrlsProps> = (props) => {
  return (
    <div>
      <Header />
      <h1>New Urls</h1>
    </div>
  )
};

export default NewUrls; 