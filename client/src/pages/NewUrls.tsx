import React from "react";
import Header from "../Components/Header";
import Text from "../Components/Text";
import "../stylesheet/Text.css";

export interface INewUrlsProps { }

const NewUrls: React.FunctionComponent<INewUrlsProps> = (props) => {
  return (
    <div  >
      <Header />
      <h1>Create TinyURL</h1>
      <div className="text-field">
        <p>Enter a URL:</p>
        <Text />
      </div>
    </div >
  )
};

export default NewUrls; 