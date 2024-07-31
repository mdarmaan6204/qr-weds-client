import {useState} from "react"
const VideoCard = ({ info }) => {
  const [play , setPlay] = useState(false)
  
  return (
    <div className="mx-10"
    onMouseEnter={()=>
      setPlay(true)
      // setSrc(info.urlWithPlay)
    }
    onMouseLeave={()=>
      setPlay(false)
      // setSrc(info.urlWithoutPlay)
    }
    
    >
      <iframe
        width="560"
        height="315"
        src={ play ? info.urlWithPlay :  info.urlWithoutPlay}
        // src={ src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
