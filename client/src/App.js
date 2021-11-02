import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Notes from './components/Notes'
import Voice from './components/voice/Voice'
import Overview from './components/overview/Overview'
import Video from './components/video/Video'
import Pictures from './components/pictures/Pictures'

function App() {
  return (
    <>
      <Router>
        <Header />
        <main class="main">
          <section class="main__container">          
            <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
            <label for="openSidebarMenu" class="sidebarIconToggle">
              <div class="spinner diagonal part-1"></div>
              <div class="spinner horizontal"></div>
              <div class="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
              <ul class="sidebarMenuInner">
              <li><a href="/">Startpage</a></li>
                <li><a href="/notes">My Notes</a></li>
                <li><a href="/voice">My Voice Records</a></li>
                <li><a href="/video">My Videos</a></li>
                <li><a href="/pictures">My Pictures</a></li>
                <li><a href="https://github.com/julianchahine" target="_blank">My Github Profile</a></li>
              </ul>
            </div>
        
            <AnimatePresence>
              <Switch>
                <Route path="/" component={Overview} exact />
                <Route path="/notes" component={Notes} />
                <Route path="/voice" component={Voice} />
                <Route path="/video" component={Video} />
                <Route path="/pictures" component={Pictures} />
              </Switch>
            </AnimatePresence>
          </section>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
