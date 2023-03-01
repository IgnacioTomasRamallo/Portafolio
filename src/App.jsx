import { useState } from 'react'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Main } from './components/Main'
import { Projects } from './components/Projects'
import  Sidenav  from './components/Sidenav'
import { Work } from './components/Work'

function App() {

  return (
    <div>
        <Sidenav />
        <Main />
        {/* <Work /> */}
        <Projects />
        <AboutMe />
        <Contact />

    </div>
  )
}

export default App
