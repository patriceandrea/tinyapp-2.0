import React from "react";
import '../App.css'
import Header from '../Components/Header';
import Text from "../Components/Text";
import "../stylesheet/Text.css";

export interface IHomeProps { }

const EditUrls: React.FunctionComponent<IHomeProps> = (props) => {

  return (
    <div>
      <Header />
      <h2>TinyURL for: insert URL link</h2>
      <p>Short URL: insert short URL</p>
      <h2>EDIT</h2>
      <div className="text-field">
        <p>new Url:</p>
        <Text />
      </div>
    </div>
  )
};

export default EditUrls; 