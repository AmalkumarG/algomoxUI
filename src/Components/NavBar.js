import React from 'react'

function NavBar() {
  return (

 <nav class="navbar navbar-expand-lg  bg-dark  ">
  <div class="container-fluid">
  <a class="navbar-brand text-light fw-bold" href="#">DownloadOtFitApp</a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
     
      <ul class="navbar-nav ms-auto mb-2 me-3 mb-lg-0 ">
        <li class="nav-item ">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light">About Us</a>
        </li>
      </ul>

    </div>
  </div>
</nav> 




  )
}

export default NavBar