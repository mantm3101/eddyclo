import React from "react";
import { Link } from "react-router-dom";
import { HOME, SHOP, LOGIN } from '../../../constants/routes'

const Navbar = () => (
  <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <Link class="navbar-brand" to={HOME}>
          EddyClo
        </Link>
      </div>
      <div class="collapse navbar-collapse" id="custom-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <Link to={SHOP} >
              Shop
            </Link>
          </li>
          <li class="dropdown">
            <Link to={LOGIN}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;