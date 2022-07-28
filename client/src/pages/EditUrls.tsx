import React from "react";
import '../App.css'
import Header from '../Components/Header';
import Text from "../Components/Text";
import "../stylesheet/Text.css";
import "../stylesheet/EditUrls.css"
import { TextField } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
export interface IHomeProps { }

const EditUrls: React.FunctionComponent<IHomeProps> = (props) => {

  let navigate = useNavigate();
  const { shortUrl } = useParams();

  const [longUrl, setLongUrl] = React.useState<any | null>(null);
  const [error, setError] = React.useState<any | null>(null);

  const url = `http://localhost:8001/urls/edit/:shortUrl`;

  useEffect(() => {
    axios.get('http://localhost:8001/urls/urls', { withCredentials: true }).then(res => {
      // setRows(res.data)
    })
  }, []);

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
        <p>Short URL: {JSON.stringify(shortUrl)}</p>
        <h2>EDIT</h2>
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <div className="text-field">
            <p>new Url:</p>
            <Text />
          </div>
        </form>
      </div>
    </div>
  )
};

export default EditUrls; 