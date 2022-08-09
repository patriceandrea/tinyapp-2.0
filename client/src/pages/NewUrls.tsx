import React from "react";
import Header from "../Components/Header";
import "../stylesheet/Text.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export interface INewUrlsProps { }


const NewUrls: React.FunctionComponent<INewUrlsProps> = (props: any) => {

  let navigate = useNavigate();

  const [longUrl, setLongUrl] = React.useState<any | null>(null);
  const [error, setError] = React.useState<any | null>(null);


  const url = 'http://localhost:8001/urls/add';

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post(url, { longUrl }, { withCredentials: true })
      .then((data) => {
        navigate("/myurls");

      })
      .catch((err) => console.log(err))

  }


  return (
    <div  >
      <Header />
      <h1>Create TinyURL</h1>
      <div className="text-field">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <p>Enter a URL:</p>
          <TextField
            fullWidth
            label="new TinyURL"
            id="fullWidth"
            onChange={(e) => { setLongUrl(e.target.value) }} />
          <Button variant="contained" sx={{ m: 1 }} type="submit" >Submit</Button>
          {error}
        </form>

      </div>
    </div >
  )
};

export default NewUrls; 