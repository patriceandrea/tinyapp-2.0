import React from "react";
import '../App.css'
import Header from '../Components/Header';

export interface IHomeProps { }

const EditUrls: React.FunctionComponent<IHomeProps> = (props) => {

  return (
    <div>
      <Header />
      <h1>Welcome to Edit Page!</h1>
    </div>
  )
};

export default EditUrls; 