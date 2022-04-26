import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate'

export default function Home({ movies }) {
  const router = useRouter()
  console.log('movies', movies)
  console.log('router', router.query.page)
  return (
    <div>
      home page
      <div>
        <Link href={`/?page=2`}>
          <a>click here</a>
        </Link>
      </div>
      <div>
        <ReactPaginate
          pageCount={100}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          containerClassName={'custom-pagination'}
          pageClassName={'pagination-item'}
          breakClassName={'pagination-item'}
          previousClassName={'pagination-item'}
          nextClassName={'pagination-item'}
          activeClassName={'active'}
          forcePage={Number(router.query.page) || 0}
        />
      </div>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { API_URL, TOKEN } = process.env
  // console.log('query', query?.page || 1)
  let page = query?.page || 1
  const res = await fetch(`${API_URL}/content/main/2/list?page=${page}&user=${TOKEN}`)
  const data = await res.json()
  return {
    props: {
      movies: data
    }
  }
}
