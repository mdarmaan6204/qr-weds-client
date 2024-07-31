import VideoCard from "./VideoCard";

const VideoList = ({videoDetails}) => {
  return (
    <div className="flex px-8  justify-center py-10 flex-wrap">
      {/* {videoDetails.map((card) => (
        <VideoCard key={card.id} info={card} />
      ))} */}
      <VideoCard info= {videoDetails[0]}/>
      <VideoCard info= {videoDetails[1]}/>
    </div>
  );
};

export default VideoList;
