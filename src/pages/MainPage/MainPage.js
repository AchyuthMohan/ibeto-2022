import React from 'react'
import Landing from '../../sections/Landing/Landing'
import About from '../../sections/About/About'
import Eventformat from '../../sections/Eventformat/Eventformat'
import Faq from '../../sections/Faq/Faq'
import Contact from '../../sections/Contact/Contact'
function MainPage() {
  return (
    <div>
        <Landing/>
        <About/>
        <Eventformat/>
        <Faq/>
        <Contact/>
    </div>
  )
}

export default MainPage