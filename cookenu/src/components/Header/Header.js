import React from "react";
import {goToRecipesList, goToLogin} from "../../routes/coordinator"
import {useHistory} from "react-router-dom"

const Header = () => {
    const history = useHistory()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-naranja-400">
  <div className="container-fluid">
  <button onClick={()=> goToRecipesList(history)} className="btn btn-outline bg-naranja-100" type="submit">Cookenu</button>
<div>
    <button onClick={() => goToLogin(history)} className="btn btn-outline bg-naranja-100" type="submit">Login</button>
</div>
</div>
</nav> 
  );
}
export default Header
