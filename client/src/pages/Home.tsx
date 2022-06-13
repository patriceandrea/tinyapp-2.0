import React from "react";
import '../App.css'

export interface IHomeProps { }

const Home: React.FunctionComponent<IHomeProps> = (props) => {

  return (
    <h1>Welcome to TinyApp!</h1>
  )
};

export default Home; 