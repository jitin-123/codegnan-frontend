import React from 'react'
import Demo from './Demo'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navigation from './components/Navigation'
import "./App.css"

class App extends React.Component{
  state={
    companyName:"Codegnan",
    year:2008
  }
  render(){
    return(
      <section>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
        {/*<h1>good afternoon</h1>
        <p>value is {this.state.companyName} {this.state.year}</p>
        <Demo name="ravi" company="codegnan"/>
        <Demo name="sita" company="amazon"/> */}
      </section>
    )
  }
}
export default App



