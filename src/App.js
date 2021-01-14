import React from 'react'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {MainState} from './context/main/MainState'
import {Header} from "./components/Header/Header"
import {Main} from './components/Main/Main'
import {List} from './pages/List/List'
import {Profile} from './pages/Profile/Profile'

function App() {
  return (
    <MainState>
        <BrowserRouter>
            <Header />
            <Main>
                <Switch>
                    <Route path="/" component={List} exact />
                    <Route path="/:id" component={Profile} />
                </Switch>
            </Main>
        </BrowserRouter>
    </MainState>
  )
}

export default App
