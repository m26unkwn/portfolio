import React from 'react'
import {Header ,Main, Footer, Contact} from "./components";
import "./App.css";
import { Route, Switch } from 'react-router';
export const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route  exact path="/">
                <Main />

                </Route>
                < Route exact path="/contact">
                    <Contact />
                </Route>

            </Switch>
            <Footer />
        </>
    )
}
