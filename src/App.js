import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from 'axios'
import Header from './components/Header'

function App() {
  const[post,setPost] = useState([])

  useEffect(()=>{
      axios.get("http://localhost:5000/get")
      .then(res=>{
          setPost(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  },[])

  return (
    <>
    <Header />
    <div className="app">
      <div className='app__videos'>
        { post.map(data =>(
          <Video url={data.url} channel={data.channel} 
          description={data.description} song={data.song} 
          likes={data.likes} shares ={data.shares} 
          messages = {data.messages}/> ))
        } 
      </div>
    </div> 
    </>
  )}

export default App
