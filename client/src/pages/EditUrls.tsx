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
import { UmbrellaSharp } from "@mui/icons-material";
export interface IHomeProps { }

const EditUrls: React.FunctionComponent<IHomeProps> = (props) => {

  let navigate = useNavigate();
  const { shortUrl } = useParams();

  const [longUrl, setLongUrl] = React.useState<any | null>(null);
  const [error, setError] = React.useState<any | null>(null);
  const [urls, setUrls] = React.useState<any | null>([]);


  const url = `http://localhost:8001/urls/edit/:shortUrl`;

  useEffect(() => {
    axios.get(`http://localhost:8001/urls/:shortUrl`, { params: { shortUrl } })
      .then(res => {
        const urls = res.data
        setUrls(urls)
      })
  }, [shortUrl])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.put(url, { longUrl }, { withCredentials: true })
      .then((data) => {
        navigate("/myurls");

      })
      .catch((err) => console.log(err))

  }
  return (



    <div>
      <Header />
      <div className="edit">
        {urls.map((url: any) => {
          <h2>TinyURL for: insert URL link{url}</h2>
        })}

        <p>Short URL: {JSON.stringify(shortUrl)}  :   {urls}</p>

        <h2>EDIT</h2>

        <div className="text-field">
          <p>new Url:</p>
          <form onSubmit={(e) => { handleSubmit(e) }}>
            <Text />
          </form>
        </div>

      </div>
    </div >
  )
};

export default EditUrls; 