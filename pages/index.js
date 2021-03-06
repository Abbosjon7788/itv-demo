import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate'
import Icon from 'public/assets/Icons'
import MovieItem from 'components/MovieItem'

export default function Home({ data }) {
  const router = useRouter()

  const handleChanges = ({ selected }) => {
    router.push({
      query: { page: selected + 1 }
    })
  }

  if (!data?.movies) {
    return <p className="data-not-found">Movies not found</p>
  }

  const { movies } = data
  const pageCount = Math.ceil(data?.total_items / 18)

  return (
    <div className="home">
      <h5 className="title">Фильмы</h5>
      <div className="movies-wrapper">
        {
          movies?.length > 0 ?
            movies.map(item => (
              <MovieItem key={item.id} data={item} />
            )) :
            <p className="data-not-found">Movies not found</p>
        }
      </div>
      <div className="pagination-wrapper">
        <ReactPaginate
          previousLabel={<Icon icon="chevron-left" width={20} height={20} />}
          nextLabel={<Icon icon="chevron-right" width={20} height={20} />}
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          containerClassName={'custom-pagination'}
          pageClassName={'pagination-item'}
          breakClassName={'pagination-item'}
          previousClassName={'pagination-item'}
          nextClassName={'pagination-item'}
          activeClassName={'active'}
          onPageChange={handleChanges}
          forcePage={Number(router.query.page) - 1 || 0}
        />
      </div>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { API_URL, TOKEN } = process.env
  let page = query?.page || 1
  const res = await fetch(`${API_URL}/content/main/2/list?page=${page}&user=${TOKEN}`)
  const { data } = await res.json()
  return {
    props: {
      data
    }
  }
}
