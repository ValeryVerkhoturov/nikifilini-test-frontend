import React from "react";
import styles from "./styles.m.styl";
import Navbar from "../Navbar";
import OrdersList from "../../screens/Orders/List";
import { BrowserRouter, BrowserRouterProps, Switch, Route } from "react-router-dom";
import { GlobalStateProvider, GlobalState } from "~/screens/globalState";
import OrdersShow from "~/screens/Orders/Show";

function Index(): JSX.Element {
  const [globalState] = React.useState(new GlobalState());
  if (window.location.pathname === "/") window.location.pathname = "/orders/";

  // @ts-ignore
  return (
      <GlobalStateProvider value={globalState}>
          <BrowserRouter {...({} as BrowserRouterProps)}>
            <div className={styles.app}>
              <Navbar />
              <Switch>
                <Route path="/orders/:id">
                  <OrdersShow />
                </Route>
                <Route path="/orders">
                  <OrdersList />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
      </GlobalStateProvider>

  );
}

export default Index;
