import { useRouter } from "next/router"
import Link from "next/link"

export default function Home() {

      const Router = useRouter()
      
      
      
      return (
    // <div style={{background:"#121212"}} className='w-screen h-screen'>
     <div>
      <button onClick={()=>{window.location.href = "https://accounts.spotify.com/authorize?client_id=2d619d57084f437aa49f91cf7197f671&response_type=code&redirect_uri=https://music2-two.vercel.app/dashboard&scope=ugc-image-upload%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20streaming%20app-remote-control%20user-read-email%20user-read-private%20playlist-read-collaborative%20playlist-modify-public%20playlist-read-private%20playlist-modify-private%20user-library-modify%20user-library-read%20user-top-read%20user-read-playback-position%20user-read-recently-played%20user-follow-read%20user-follow-modify"}}>Login with spotify</button>
     </div>
    // </div>
  )
}
