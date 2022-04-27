import { useRef } from 'react'
import Header from 'components/Header'

const Layout = ({ children }) => {

     const scrollRef = useRef()

     return (
          <div className="layout">
               <Header />
               <div className="page" ref={scrollRef}>
                    <div className="container">
                         {children}
                    </div>
               </div>
          </div>
     )
}

export default Layout
