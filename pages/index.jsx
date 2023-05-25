
import { Input } from '@chakra-ui/react'

const SpotifyWebApi = require('spotify-web-api-node')

import Script  from 'next/script'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Player from './components/Player'

export default function Home() {
  const [songs,setSongs] = useState()
  const Router = useRouter()
  const [refreshToken,setRefreshToken] = useState()
  const [accessToken,setAccessToken] = useState()
  const [expiresIn,setExpiresIn] = useState()
  const [photo,setPhoto] = useState(undefined)
  const code = Router.asPath.split("?").toString().split("=")[1]




  
  // useEffect(()=>{

  //   async function token_refresh(){
    
      
      
  //     const res = await fetch("/api/refresh",{
  //       method:"POST",
  //       body:JSON.stringify({token:refreshToken})
  //     }
  //     )
  //     await res.json().then(e=>{
  //       setExpiresIn(e.exp)
  //       setAccessToken(e.AccessToken)
  //     })
  //   }
  //   token_refresh()
    
  // },[refreshToken,expiresIn])
  useEffect(()=>{
    async function token_(){
      

      
      
      // const res = await fetch("/api/fetch",{
      //   method:"POST",
      //   body:JSON.stringify({code:code})
      // }
      const res = await fetch("https://accounts.spotify.com/api/token",{
        method:"POST",
        headers:{
          "Content-type":"application/x-www-form-urlencoded",
          "Authorization":"Basic " +  btoa("2d619d57084f437aa49f91cf7197f671:d3ba863d303c401c84b3e8dca435704b")
        },
        body:"grant_type=client_credentials"
      }
      )
      await res.json().then(e=>{
        // setRefreshToken(e.RefreshToken)
        // setExpiresIn(e.exp)
        setAccessToken(e.access_token)
      })
    }
    token_()
    
  },[code])  

  
  async function search(e){
    const SpotifyApi = new SpotifyWebApi({
      clientId:"2d619d57084f437aa49f91cf7197f671",
    })
    SpotifyApi.setAccessToken(accessToken)
    if(e.target.value && e.target.value != "" && e.target.value != " "){

      SpotifyApi.searchTracks(e.target.value,{limit:3}).then(d=>{
        setSongs(d.body.tracks.items)
      })
    }
    else{
      setSongs(undefined)
    }
    
    // const res = await fetch("/api/data",{
      //   method:"POST",
      //   body:JSON.stringify({token:accessToken})
      // }
      // )
      // await res.json().then(e=>{
        //   // console.log(e)
        // })
        
      }
      
      
      
      
      
      
      return (
        
        <div className='flex flex-col justify-center items-center'>
          <Script src='/front.js'></Script>
          <audio id="play" type='audio/webm'></audio>


         <Input id="search" onChange={search} width={"auto"} className={"mt-12"} placeholder='Search' size='lg' />
         {songs && songs.map((data,i)=>(
           <div onClick={async ()=>{
            const seek = document.getElementById("seekbar")
            const AudioElem = document.getElementById("play")
            AudioElem.src = ""
            seek.style.width = "0%"
            const artist = data.artists[0].name
             const res = await fetch("/api/get",{
               method:"POST",
               body:JSON.stringify({val:data.name + " " + artist})
              }
              )
              setPhoto(data.album.images[0].url)
              await res.json().then(async e=>{
                const res = await fetch("/api/link",{
                  method:"POST",
                  body:JSON.stringify({val:e.url})
                }
                )
                await res.json().then(async e=>{
                  const audio =  document.getElementById("play") 
                  const searchBar =  document.getElementById("search") 
                  audio.src = e.url
                  audio.play()
                  // searchBar.value = ""
                  // setSongs(undefined)
                  
                  
                  
                })
                
                
              })
              
              
              
            }} className='border cursor-pointer bortder-2 p-2 rounded-md' key={i}>
              <div className='flex gap-6'>

                  <img className='rounded-md' src={data.album.images[0].url} alt="" width="40" />
                  <p p>{data.name}</p>
              </div>

          </div>
         ))}
         <Player photoUrl={photo} />
     
    </div>
  )
}
