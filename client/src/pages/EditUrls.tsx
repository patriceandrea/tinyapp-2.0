import React from "react";
import '../App.css'
import Header from '../Components/Header';
import Text from "../Components/Text";
import "../stylesheet/Text.css";
import "../stylesheet/EditUrls.css"

export interface IHomeProps { }

const EditUrls: React.FunctionComponent<IHomeProps> = (props) => {

  return (
    <div>
      <Header />
      <div className="edit">
        <h2>TinyURL for: insert URL link</h2>
        <p>Short URL: insert shortURL</p>
        <h2>EDIT</h2>
        <div className="text-field">
          <p>new Url:</p>
          <Text />
        </div>
      </div>
    </div>
  )
};

export default EditUrls; 