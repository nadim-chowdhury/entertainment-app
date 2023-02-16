import React from 'react'
import 'dotenv'
import Video from './Video';

const Body = () => {

    // const [video, setVideo] = useState([]);

    // const fetchData = () => {
    //   return fetch("https://youtube-v31.p.rapidapi.com")
    //     .then((res) => res.json())
    //     .then((data) => setVideo(data));
    // };
  
    // useEffect(() => {
    //   fetchData();
    // }, []);

  return (
    <>
      <h1 className="text-center p-6 font-bold text-6xl">Watch Your Favourite One</h1>
      {/* <div className="videos">
        {video.map((videoData) => {
          return <Video data={videoData} />;
        })}
      </div> */}
    </>
  )
}

export default Body