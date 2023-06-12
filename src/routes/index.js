import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import MenuBar from "../components/menu";
import OnePageHeader from "../components/onePageHeader";
import About from "./about";
import Home from "./home";
import Newpage from "./newpage";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        {/* <RouteWrapper
          exact={true}
          path="/"
          component={Home}
          layout={DefaultLayout}
        /> */}
        <RouteWrapper
          exact={true}
          path="/"
          component={Newpage}
          layout={DefaultLayout}
        />
      </BrowserRouter>
    </>
  );
}

const DefaultLayout = ({ children, match }) => (
  <>
    <OnePageHeader />
    {children}
    <MenuBar />
  </>
);
function RouteWrapper({ component: Component, layout: Layout, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
