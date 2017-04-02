import jQuery from 'jquery';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { APP_NAME } from '../../shared/config';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from '../../shared/routes';

const handleNavLinkClick = () => {
  jQuery('body').scrollTop(0);
  jQuery('.js-navbar-collapse').collapse('hide');
};

const Nav = () =>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button className="navbar-toggle collapsed" type="button" role="button" data-toggle="collapse" data-target=".js-navbar-collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to={HOME_PAGE_ROUTE} className="navbar-brand">{APP_NAME}</Link>
      </div>
      <div className="js-navbar-collapse collapse navbar-collapse">
        <ul className="nav navbar-nav">
          {[
            { route: HOME_PAGE_ROUTE, label: 'Home' },
            { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
            { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Async' },
            { route: NOT_FOUND_PAGE_ROUTE, label: '404 Not Found' },
          ].map(link => (
            <li className="nav-item" key={link.route}>
              <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'white' }} exact onClick={handleNavLinkClick}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;
