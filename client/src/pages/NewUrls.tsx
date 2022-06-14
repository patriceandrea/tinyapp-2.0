import React from "react";
import Header from "../Components/Header";
import Text from "../Components/Text";

export interface INewUrlsProps { }

const NewUrls: React.FunctionComponent<INewUrlsProps> = (props) => {
  return (
    <div>
      <Header />
      <h1>Create TinyURL</h1>
      <Text />
    </div >
  )
};

export default NewUrls; 