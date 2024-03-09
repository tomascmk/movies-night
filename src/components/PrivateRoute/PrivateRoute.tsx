/* import * as React from "react";
import { Route, Redirect, type RouteProps } from "react-router-dom";

import { StoreService } from "../../../services/StoreService";
import { routes } from "../../../constants/RouteConstants";

export const PrivateRoute = (props: RouteProps): JSX.Element => {
  console.log(`Checking login from ${props.path} - Current location: ${props.location?.pathname}`);
  const isLoggedIn = StoreService.checkLogin();
  const state = `${props.location?.pathname}${props.location?.search ?? ""}`;
  return isLoggedIn ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: routes.Login,
        state: { from: `${state}` }
      }}
    />
  );
};
 */
