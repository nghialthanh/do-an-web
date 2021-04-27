
import { Route, Switch,Redirect } from "react-router-dom";

import Header from "./component/header/header";
import Home from "./component/home/home"
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Footer from "./component/footer/footer";
import { lazy,Suspense, useEffect, useState } from "react";

import Loading from "./component/loading"
import { setLogin } from "./redux/actions/account";
import { useDispatch } from "react-redux";

const  Login = lazy(() => import("./component/login/login"));
const Register = lazy(() => import('./component/register/register'));
const InfoAccount = lazy(() => import('./component/account/account'));
const FormTest = lazy(() => import("./component/dialog-test/dialog-test"));
const ContactAccount = lazy(() => import('./component/contact/contact'));

function App() {
  const [openLogin,setOpenLogin] = useState(false);
  const [openFormRegister,setOpenFormRegister] =useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('acc')){
      const params = {
        userName: localStorage.getItem('acc'),
        avatar: localStorage.getItem('avatar')
      }
      const action = setLogin(params);
      dispatch(action);
    }
  })
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Header
          setOpenLogin={setOpenLogin}
        />
        <Login
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          setOpenFormRegister={setOpenFormRegister}
        />
        <Register
          openFormRegister={openFormRegister}
          setOpenFormRegister={setOpenFormRegister}
        />
        <FormTest/>
        <Switch>
          <Route path="/trang-chu" component={() => 
                                              <Home/>
          }/>
          <Route path="/thong-tin" component={() => 
                                              <InfoAccount/>
          }/>
          <Route path="/so-lien-lac" component={() => 
                                              <ContactAccount/>
          }/>
          {/* <Route path="/phim" component={() => 
                                              <Film/>
          }/>
          <Route path="/search/:string" component={() => 
                                              <Search/>
          }/> */}
          <Redirect from="/" to="/trang-chu"/>
        </Switch>
        <Footer/>
      </Suspense>
    </div>
    
  );
}

export default withTranslation()(App);
