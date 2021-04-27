import React, { lazy,Suspense, useEffect, useState } from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import { useTranslation, withTranslation, Trans } from 'react-i18next';


import Loading from "./component/loading";

const  Login = lazy(() => import("./component/login/login"));
const  Home = lazy(() => import('./component/homePage/home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Switch>
          {/* <Route path="/trang-chu" component={() => 
                                              <Home/>
          }/> */}
          <Route path="/dang-nhap" component={() => 
                                              <Login/>
          }/>
          <PrivateRoute path="/trang-chu">
            <Home/>
          </PrivateRoute>
          {/* <Route path="/phim" component={() => 
                                              <Film/>
          }/>
          <Route path="/search/:string" component={() => 
                                              <Search/>
          }/> */}
          <Redirect from="/" to="/trang-chu"/>
        </Switch>
      </Suspense>
    </div>
    
  );
}
function PrivateRoute({ children, ...rest }) {
  const [abc,setabc] = useState(false);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        abc ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dang-nhap",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
