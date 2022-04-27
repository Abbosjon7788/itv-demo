import { memo } from 'react'
import Image from 'next/image'

const MovieItem = ({ data }) => {
     console.log('data', data)
     return (
          <div className="movie-item">
               <div className="movie-img">
                    <Image src={data?.files.poster_url} layout={'fill'} priority />
               </div>
               <p className="movie-name">{data?.title}</p>
               {/* <div className="movie-info">
                    <p className="movie-name">{data?.title}</p>
                    {data.rates?.imdb && <p className="imdb">IMDb {data.rates?.imdb}</p>}
                    <p className="country">{data?.year},{data.countries[0]?.title}</p>
               </div> */}
          </div>
     )
}

export default memo(MovieItem)
