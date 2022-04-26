import Header from 'components/Header'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
