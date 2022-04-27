import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const pageRef = useRef()

  // useEffect(() => {
  //   console.log('page-ref', pageRef.current.offsetTop)
  //   const handleRouteChange = (url, { shallow }) => {
  //     pageRef.current.scrollIntoView()
  //   }
  //   window.scrollTo(0, pageRef.current.offsetTop)
  //   // pageRef.current.scrollIntoView()
  //   // router.events.on('routeChangeStart', () => pageRef.current.scrollIntoView())
  //   return () => {
  //     // router.events.off('routeChangeStart', () => pageRef.current.scrollIntoView())
  //     // pageRef.current.scrollIntoView()
  //     window.scrollTo(0, pageRef.current.offsetTop)
  //   }
  // }, [router.asPath])

  return (
    <Layout pageRef={pageRef}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
