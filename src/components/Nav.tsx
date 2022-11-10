import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AiFillHome, AiFillShopping } from 'react-icons/ai'
import { RiLogoutBoxFill, RiMovieFill } from 'react-icons/ri'
import { MdLocalMovies } from 'react-icons/md'
import { IoGameController } from 'react-icons/io5'
import '../styles/components/nav.scss'

export default function Nav() {

  useEffect(() => {
    const li = document.querySelectorAll('li')
    li.forEach((item) => {
      item.classList.remove('active')
    })

    const param = window.location.pathname

    li.forEach((item) => {
      if (item.getAttribute('data-path') === param) {
        item.classList.add('active')
      }
    })
  }, [])

  function nontoionhas() {
    const li = document.querySelectorAll('li')
    li.forEach((item) => {
      item.classList.remove('active')
    })

    const param = window.location.pathname

    li.forEach((item) => {
      if (item.getAttribute('data-path') === param) {
        item.classList.add('active')
      }
    })
  }

  if (window.location.pathname === '/signin') {
    return null
  }

  return (
    <nav>

      <img className="logo" src="/images/DC_Comics_logo.svg" alt="" />

      <ul onClick={nontoionhas}>
        <Link to="/">
          <li data-path="/"><AiFillHome /> Home</li>
        </Link>
        <Link to="/movies">
          <li data-path="/movies"><MdLocalMovies /> Movies</li>
        </Link>
        <Link to="/shows">
          <li data-path="/shows"><RiMovieFill />TV Shows</li>
        </Link>
        <Link to="/games">
          <li data-path="/games"><IoGameController />Games & Apps</li>
        </Link>
        <Link to="/shop">
          <li data-path="/shop"><AiFillShopping /> Shop</li>
        </Link>
        <a href="/signin">
          <li><RiLogoutBoxFill />Sair</li>
        </a>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search" />
        <img src="/images/icons/icon-search.svg" alt="" />
      </div>
    </nav>
  )
}