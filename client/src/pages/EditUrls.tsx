import React from "react";
import '../App.css'
import Header from '../Components/Header';
import Text from "../Components/Text";
import "../stylesheet/Text.css";
import "../stylesheet/EditUrls.css"
import { TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface IHomeProps { }

const EditUrls: React.FunctionComponent<IHomeProps> = (props) => {

  let navigate = useNavigate();

  const [longUrl, setLongUrl] = React.useState<any | null>(null);
  const [error, setError] = React.useState<any | null>(null);

  const url = `http://localhost:8001/urls/:id`;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post(url, { longUrl }, { withCredentials: true })
      .then((data) => {
        // console.log(user);
        // setLongUrl(data)
        // console.log("yay!")
        navigate("/myurls");

      })
      .catch((err) => console.log(err))

  }
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