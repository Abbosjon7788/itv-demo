import { memo } from 'react'
import Header from 'components/Header'

const Layout = ({ children }) => {
     return (
          <div className="layout">
               <Header />
               <div className="page">
                    <div className="container">
                         {children}
                    </div>
               </div>
          </div>
     )
}

export default memo(Layout)
