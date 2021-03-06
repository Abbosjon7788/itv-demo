import { memo } from 'react'
import Head from 'next/head'
import Header from 'components/Header'

const Layout = ({ children }) => {
     return (
          <div className="layout">
               <Head>
                    <title>iTV Demo</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
               </Head>
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
