import { memo, useMemo } from 'react'
import Link from 'next/link'
import Icon from 'public/Icons'

const Header = () => {

     const navLinks = useMemo(() => {
          return [
               { name: 'Телеканалы', link: '/', id: 1 },
               { name: 'Фильмы', link: '/', id: 2 },
               { name: 'Сериалы', link: '/', id: 3 },
               { name: 'Детям', link: '/', id: 4 }
          ]
     }, [])

     return (
          <header className="header">
               <div className="header-links container">
                    <Link href="/">
                         <a className="logo-wrapper">
                              <Icon icon="film" color="#e41a4b" width={40} height={40} />
                         </a>
                    </Link>
                    <div className="menus">
                         {
                              navLinks.map(item => (
                                   <Link key={item.id} href={item.link}>
                                        <a>{item.name}</a>
                                   </Link>
                              ))
                         }
                    </div>
                    <Icon icon={'search'} width={24} height={24} className="search-icon" />
                    <div className="auth">
                         <Link href="/">
                              <a>Вход</a>
                         </Link>
                         <Link href="/">
                              <a>Регистрация</a>
                         </Link>
                    </div>
               </div>
          </header>
     )
}

export default memo(Header)
