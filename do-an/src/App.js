
import { Route, Switch,Redirect } from "react-router-dom";

import Home from "./component/home/home"
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Footer from "./component/footer/footer";
import { lazy,Suspense, useEffect, useState } from "react";

import Loading from "./component/loading"
import { setLogin } from "./redux/actions/account";
import { useDispatch, useSelector } from "react-redux";
import webApi from "./api/webAPI";
import { set } from "date-fns";

const Header = lazy(() => import("./component/header/header"));
const ChangePass = lazy(() => import("./component/ChangePass/ChangePass"));
const Login = lazy(() => import("./component/login/login"));
const Register = lazy(() => import('./component/register/register'));
const InfoAccount = lazy(() => import('./component/account/account'));
const FormTest = lazy(() => import("./component/dialog-test/dialog-test"));
const ContactAccount = lazy(() => import('./component/contact/contact'));
const TestWeek = lazy(() => import("./component/dialog-test/testWeek/testWeek"));
const RollCall = lazy(() => import("./component/roll-call/rollCall"));
const NewsDetail = lazy(() => import("./component/newsDetail/newDetail"));

function App() {
  const [openLogin,setOpenLogin] = useState(false);
  const [openChangePass,setOpenChangePass] = useState(false);
  const [roleLogin,setRoleLogin] = useState(true);// true: student --- false: giang vien
  const [openFormRegister,setOpenFormRegister] =useState(false);
  const acc = useSelector(state => state.Login.acc);
  const dispatch = useDispatch();
  //---------- open login ---------------//
  const handleLogin = (e,e1) => {
    setOpenLogin(e);
    setRoleLogin(e1);
  }
  const takedatalogin = async() => {
    try{
      const response = await webApi.getInfoUser(localStorage.getItem('id'));
      console.log(response);
      const action = setLogin(response);
      dispatch(action);
    }catch(error) {
        console.log("Failed to call API Login remember ", error);
    };     
  }
  useEffect(()=>{
    if(localStorage.getItem('id')){
      takedatalogin();
    }
  },[])
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Header
          handleLogin={handleLogin}
          setOpenChangePass={setOpenChangePass}
        />
        <Login
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          setOpenFormRegister={setOpenFormRegister}
          roleLogin={roleLogin}
        />
        <ChangePass
          openChangePass={openChangePass}
          setOpenChangePass={setOpenChangePass}
        />
        <Register
          openFormRegister={openFormRegister}
          setOpenFormRegister={setOpenFormRegister}
        />
        <FormTest/>
        <Switch>
          <Route path="/pages" component={() => 
                                              <Home/>
          }/>
          <Route path="/thong-tin" component={() => 
                                              <InfoAccount/>
          }/>
          <Route path="/so-lien-lac" component={() => 
                                              <ContactAccount/>
          }/>
          <Route path="/kiem-tra" component={() => 
                                              <TestWeek/>
          }/>
          <Route path="/diem-danh" component={() => 
                                              <RollCall/>
          }/>
          <Route path="/tin-tuc/:str" component={() => 
                                              <NewsDetail/>
          }/>
          {/* <Route path="/phim" component={() => 
                                              <Film/>
          }/>
          <Route path="/search/:string" component={() => 
                                              <Search/>
          }/> */}
          <Redirect from="/" to="/pages/trang-chu"/>
        </Switch>
        <Footer/>
      </Suspense>
    </div>
    
  );
}

// function PrivateRoute({ children, ...rest }) {
//   const postdetail = useSelector(state => state.EditPost.postDetail)
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         postdetail.postID ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

export default withTranslation()(App);
