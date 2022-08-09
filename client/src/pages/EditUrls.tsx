import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css'
import Header from '../Components/Header';
import "../stylesheet/Text.css";
import "../stylesheet/EditUrls.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export interface IHomeProps { }

const EditUrls: React.FunctionComponent<IHomeProps> = (props) => {

  let navigate = useNavigate();


  const [longUrl, setLongUrl] = React.useState<any | null>(null);
  const [urls, setUrls] = React.useState<any | null>([]);



  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8001/urls/${id}`, { withCredentials: true })
      .then(res => {
        setUrls(res.data[0])
      })
  }, [])


  const updateSubmit = (e: any) => {
    e.preventDefault();
    axios.put(`http://localhost:8001/urls/edit/${id}`, { longUrl, id }, { withCredentials: true })
      .then((res) => {
        setUrls(res.data)
        navigate("/myurls");

      })
      .catch((err) => console.log(err))

  }




  return (



    <div>
      <Header />
      <div className="edit">
        <h2>TinyURL for: {urls.long_url}</h2>
        <p>Short URL:<a href={`https://${urls.long_url}`} target="_blank" >{urls.short_url} </a></p>
        <h2>EDIT</h2>
        <div className="text-field">
          <p>new Url:</p>
          <form onSubmit={updateSubmit}>
            <Box
              sx={{
                width: 400,
                maxWidth: '70%',
              }}
            >
              <TextField
                fullWidth label="new TinyURL"
                id="fullWidth"
                onChange={(e) => { setLongUrl(e.target.value) }} />
            </Box>
            <Button variant="contained" sx={{ m: 1 }} type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div >
  )
};

export default EditUrls; 