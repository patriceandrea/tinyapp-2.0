import React from "react";
import Header from "../Components/Header";
import Text from "../Components/Text";
import "../stylesheet/Text.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export interface INewUrlsProps { }


const NewUrls: React.FunctionComponent<INewUrlsProps> = (props: any) => {
  const { user } = props;

  let navigate = useNavigate();

  const [longUrl, setLongUrl] = React.useState<any | null>(null);
  const [error, setError] = React.useState<any | null>(null);


  const url = 'http://localhost:8001/urls/add';

  const handleSubmit = (e: any) => {

    axios.post(url, { user, longUrl }, { withCredentials: true })
      .then((data) => {
        // console.log(user);
        setLongUrl(data)
        navigate("/myurls");

      })
      .catch((e) => console.log(e))

  }


  return (
    <div  >
      <Header />
      <h1>Create TinyURL</h1>
      <div className="text-field">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <p>Enter a URL:</p>
          <TextField fullWidth label="new TinyURL" id="fullWidth" onChange={(e) => { setLongUrl(e.target.value) }} />
          {/* <Text /> */}
          <Button variant="contained" sx={{ m: 1 }} type="submit">Submit</Button>
          {error}
        </form>

      </div>
    </div >
  )
};

export default NewUrls; 