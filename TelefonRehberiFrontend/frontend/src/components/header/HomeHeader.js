import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchModal from '../modal/SearchModal'

const HomeHeader = () => {

  const [showSearchModal, setShowSearchModal] = useState(false)

  const handleShowSearchModal = () => {
    setShowSearchModal(true)
  }

  const handleCloseSearchModal = () => {
    setShowSearchModal(false)
  }

  return (
   <Fragment>
     <header>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow ">
      <div class="container">
        <a class="navbar-brand" href="/">
          TelefonRehberi{" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-sm-inline-flex justify-content-between"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav flex-grow-1">
            <li class="nav-item">
              <Link class="nav-link text-dark" to="/">
                Otobus Bileti
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-dark" to="/">
                Ucak Bileti
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link text-dark" to="/">
                Feribot Bileti
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-dark" to="/arac-kiralama">
                Araç Kiralama
              </Link>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <button class="btn border-0" type="text" >
                Sign in
              </button>

            
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" onClick={handleShowSearchModal}>
                {" "}
                <i class="fas fa-search"></i>
              </a>
              <SearchModal 
                showSearchModal={showSearchModal}
                handleCloseSearchModal={handleCloseSearchModal}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
   </Fragment>
  )
}

export default HomeHeader