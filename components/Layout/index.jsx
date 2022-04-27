import { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from 'components/Header'

const Layout = ({ children, pageRef }) => {
     const { pathname } = useRouter()

     useEffect(() => {
          console.log('page-ref', pageRef.current.offsetTop)
          const handleRouteChange = (url, { shallow }) => {
               pageRef.current.scrollIntoView()
          }
          // window.scrollTo(0, pageRef.current.offsetTop)
          // pageRef.current.scrollIntoView()
          // router.events.on('routeChangeComplete', () => {
          //      pageRef.current.scrollIntoView()
          // })
          // return () => {
          //      router.events.off('routeChangeComplete', () => {
          //           pageRef.current.scrollIntoView()
          //      })
          //      // pageRef.current.scrollIntoView()
          //      // window.scroll({
          //      //      top: 0,
          //      //      left: 0,
          //      //      behavior: 'smooth'
          //      // })
          // }
     }, [pathname])

     return (
          <div className="layout">
               <Header />
               <div className="page" ref={pageRef}>
                    <div className="container">
                         {children}
                    </div>
               </div>
          </div>
     )
}

export default memo(Layout)
