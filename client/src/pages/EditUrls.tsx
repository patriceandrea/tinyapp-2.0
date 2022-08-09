import React from "react";
import '../App.css'
import Header from '../Components/Header';
import Text from "../Components/Text";
import "../stylesheet/Text.css";
import "../stylesheet/EditUrls.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
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
        <h2>TinyURL for: {urls.long_url}</h2>
        <p>Short URL: {urls.short_url}</p>
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