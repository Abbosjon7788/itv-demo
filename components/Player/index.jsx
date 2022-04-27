import { memo } from 'react'
import ReactPlayer from 'react-player'

const Player = ({ videoUrl }) => {
     return (
          <div className="video-player">
               <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="auto"
                    className="react-player"
               />
          </div>
     )
}

export default memo(Player)
