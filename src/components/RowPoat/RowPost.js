import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { IMG_URL,API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube'

import axios from '../../axios'

function RowPost(props) {
   const [movies, setMovies] = useState([])

   const [urlId,setUrlId]=useState([])    
   useEffect(() => {
      axios.get(props.url).then((response) => {
         console.log(response.data);
         setMovies(response.data.results)
      }).catch((err) => {
         // alert('network error')
      })
   }, [])

   const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };


    const handleMovie=(id)=>{
      console.log(urlId)
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
   
  if(response.data.results.length!=0){
   setUrlId(response.data.results[0])
  }else{
   console.log('trailer not available');
   
   setUrlId([])
  }
})
    }
   return (
      <div className='row'>
         <h2>{props.title}</h2>

         <div className="posters">
            {movies.map((obj) => {

               return <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'samallPoster' : 'poster'} alt='poster loading' src={`${IMG_URL + obj.backdrop_path}`}></img>
            })}
         </div>
       {urlId.length !== 0 && <YouTube opts={opts} videoId={urlId.key}/>} 
       {/* {urlId ? <YouTube opts={opts} videoId={urlId.key}/>: }  */}

      </div>
   )
}

export default RowPost

// 2cfcdbb2eb2844ad1aaa195e0480870b