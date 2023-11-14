import './App.css'
import About from './components/About'

import Experience from './components/Experience'
import Home from './components/Home'
import {NavBar} from './components/NavBar'
import Portfolio from './components/Portfolio'
import SocialLinks from './components/SocialLinks'

export default function App() {
  return (
    <div className="app">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <SocialLinks />
    </div>
  )
}