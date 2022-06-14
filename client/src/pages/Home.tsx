import React from "react";
import '../App.css'
import Header from '../Components/Header';

export interface IHomeProps { }

const Home: React.FunctionComponent<IHomeProps> = (props) => {

  return (
    <div>
      <Header />
      <h1>Welcome to TinyApp!</h1>
    </div>
  )
};

export default Home; 