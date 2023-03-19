import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "../components/Header/Header"
import AddRecipePage from "../pages/AddRecipesPage/AddRecipesPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipeListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = () => {
    return(
        <BrowserRouter>
         <Header/>
        <Switch>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/adicionar-receita">
                <AddRecipePage/>
            </Route>
            <Route exact path="/detalhe/:id">
                <RecipeDetailPage/>
            </Route>
            <Route exact path="/">
                <RecipeListPage/>
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage/>
            </Route>
            <Route>
            <ErrorPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Router