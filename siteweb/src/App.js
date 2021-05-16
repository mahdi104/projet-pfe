import NavBar from "./Component/NavBar/NavBar";

import Footer from "./Component/Footer/Footer";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import PrivateRouteadmin from "./router/PrivateRouteadmin";

import Home from "./Pages/Home";
import Presentation from "./Pages/Presentation";
import References from "./Pages/References";
import Corporelle from "./Component/Corporelle/Corporelle";
import Linge from "./Component/Linge/Linge";
import Sanitaire from "./Component/Sanitaire/Sanitaire";
import Materiel from "./Component/Materiel/Materiel";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/profil/Profil";
import InterfaceAdmin from "./Pages/InterfaceAdmin/InterfaceAdmin";
import SignInAdmin from "./Pages/SignInAdmin/SignInAdmin";
import AddProduct from "./Component/AddProduct/AddProduct";

import ProductList from "./Component/ProductList/ProductList";
import GetUsers from "./Component/GetUsers/GetUsers";
import Errors from "./Component/Errors";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/presentation" component={Presentation} />
        <Route path="/Nos References" component={References} />
        <Route path="/Corporelle" component={Corporelle} />
        <Route path="/Linge" component={Linge} />
        <Route path="/Sanitaire" component={Sanitaire} />
        <Route path="/Materiel" component={Materiel} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/signinadmin" component={SignInAdmin} />
        <PrivateRouteadmin path="/interfaceadmin" component={InterfaceAdmin} />
        <PrivateRouteadmin
          path={["/AddProduct", "/edit/:id"]}
          component={AddProduct}
        />
        <PrivateRouteadmin path="/listeUtilisateurs" component={GetUsers} />
        <PrivateRouteadmin path="/Get" component={ProductList} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
