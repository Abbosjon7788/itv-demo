import { memo } from 'react'

const MovieItem = ({ data }) => {
     console.log('data', data)
     return (
          <div className="movie-item">
               movie item
          </div>
     )
}

export default memo(MovieItem)
