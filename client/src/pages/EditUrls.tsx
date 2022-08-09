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
  const [data, setData] = React.useState<any | null>([]);

  // const url = `http://localhost:8001/urls/edit/:shortUrl`;

  // useEffect(() => {
  //   axios.get(`http://localhost:8001/urls/:id`, { withCredentials: true })
  //     .then(res => {
  //       const urls = res.data
  //       setUrls(urls)
  //     })
  // }, [])

  React.useEffect((id: void) => {

    axios.get(`http://localhost:8001/urls/${id}`, { params: { id: id } }).then(res => {
      console.log(res.data);
      setData(res.data);
    })
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.put(`http://localhost:8001/urls/edit/id`, { longUrl }, { withCredentials: true })
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
          <>
            <h2>TinyURL for: insert URL link</h2>
            <p>Short URL: {url.short_url}</p></>
        })}



        <h2>EDIT</h2>

        <div className="text-field">
          <p>new Url:</p>
          <form onSubmit={handleSubmit}>
            <Text />
          </form>
        </div>

      </div>
    </div >
  )
};

export default EditUrls; 