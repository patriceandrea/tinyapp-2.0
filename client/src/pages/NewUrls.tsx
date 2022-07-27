import React from "react";
import Header from "../Components/Header";
import Text from "../Components/Text";
import "../stylesheet/Text.css";
import { useNavigate } from "react-router-dom";

export interface INewUrlsProps { }

const NewUrls: React.FunctionComponent<INewUrlsProps> = (props) => {

  let navigate = useNavigate();

  // make a url generator function 
  function generateRandomString() {
    return Math.floor((1 + Math.random()) * 0x1000000).toString(16).substring(1);
  };


  // create request for 
  // make a handle submit function 


  // add a form and handle dubmit 


  return (
    <div  >
      <Header />
      <h1>Create TinyURL</h1>
      <div className="text-field">
        <form>
          <p>Enter a URL:</p>
          <Text />
        </form>
      </div>
    </div >
  )
};

export default NewUrls; 