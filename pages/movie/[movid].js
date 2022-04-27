const MovieInfo = ({ data }) => {
     console.log('data', data?.movie)
     return (
          <div className="movie-info">
               hello
          </div>
     )
}

export default MovieInfo;

export const getStaticProps = async ({ params }) => {
     const { API_URL, TOKEN } = process.env
     const res = await fetch(`${API_URL}/content/main/2/show/${params.movid}?user=${TOKEN}`)
     const { data } = await res.json()
     return {
          props: { data }
     }
}

export const getStaticPaths = async () => {
     const { API_URL, TOKEN } = process.env
     const res = await fetch(`${API_URL}/content/main/2/list?user=${TOKEN}`)
     const { data } = await res.json()
     const paths = data?.movies.map(item => {
          return {
               params: { movid: `${item.id}` }
          }
     })
     return {
          paths,
          fallback: false
     }
}
