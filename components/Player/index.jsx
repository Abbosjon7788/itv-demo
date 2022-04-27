import { memo } from 'react'
import ReactPlayer from 'react-player'

const Player = ({ videoUrl }) => {
     return (
          <div className="video-player">
               <ReactPlayer
                    url={videoUrl}
                    className="react-player"
                    playing
                    width="100%"
                    height="100%"
                    controls={true}
                    file
               />
          </div>
     )
}

export default memo(Player)
