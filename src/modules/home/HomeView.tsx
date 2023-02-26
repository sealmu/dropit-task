import React from "react";
import { Link } from "react-router-dom";

import routesApp from "../../contexts/navigation/routesApp";
import DropitLogo from "../../tools/assets/logo-dropit-business.svg";

import StyledHomeView from "./StyledHomeView";

const HomeView = () => {
  return (
    <StyledHomeView>
      <div className="HomeView__header">
        <img src={DropitLogo} alt="logo" />

        <div className="HomeView__header_title">
          {"Welcome To Dropit's Frontend test project"}
        </div>

        <Link to={routesApp.getCatalog()}>Continue to Catalog</Link>
      </div>

      <div className="HomeView__content">
        <div className="HomeView__content_github">
          <a
            href="https://github.com/dropit-dev/fullstack-task"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo and instructions
          </a>
        </div>
      </div>
    </StyledHomeView>
  );
};

export default HomeView;
