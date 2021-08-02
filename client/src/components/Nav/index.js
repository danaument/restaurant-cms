import React from "react";

function Nav() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            src={`${process.env.PUBLIC_URL}/mabelita_112x28.png`}
            alt="Taco"
          />
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/home">Home</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/menu">Menu</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
          <a class="navbar-item" href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
