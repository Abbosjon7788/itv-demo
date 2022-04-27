import { memo } from 'react'
import VideoPlayer from 'react-video-js-player'

const Player = ({ videoUrl }) => {
     return (
          <div className="video-player">
               <VideoPlayer
                    controls={true}
                    src={videoUrl}
                    poster={'http://www.example.com/path/to/video_poster.jpg'}
                    width="100%"
                    height="100%"
                    className="react-player"
               // onReady={this.onPlayerReady.bind(this)}
               // onPlay={this.onVideoPlay.bind(this)}
               // onPause={this.onVideoPause.bind(this)}
               // onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
               // onSeeking={this.onVideoSeeking.bind(this)}
               // onSeeked={this.onVideoSeeked.bind(this)}
               // onEnd={this.onVideoEnd.bind(this)}
               />
          </div>
     )
}

export default memo(Player)
