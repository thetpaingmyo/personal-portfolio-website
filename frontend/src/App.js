import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import ScrollButton from './components/ScrollButton/ScrollButton'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import AboutScreen from './screens/AboutScreen/AboutScreen'
import SkillsScreen from './screens/SkillsScreen/SkillsScreen'
import PortfolioScreen from './screens/PortfolioScreen/PortfolioScreen'
import ContactScreen from './screens/ContactScreen/ContactScreen'
import { motion, AnimatePresence } from 'framer-motion'

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='app' style={{ height: '100vh', minWidth: '300px' }}>
      <BurgerMenu 
        open={open} 
        handleOpen={() => setOpen(true)} 
        handleClose={() => setOpen(false)}
      />

      <Router>
        <Header />

        <AnimatePresence>
          {open && (
            <motion.div
              exit={{ x: '-100vw' }}
              transition={{ duration: 0.5 }}
            >
              <Sidebar handleClose={() => setOpen(false)} />
            </motion.div>
            )}
        </AnimatePresence>

        <main onClick={() => setOpen(false)}>
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/about' component={AboutScreen} />
            <Route path='/skills' component={SkillsScreen} />
            <Route path='/portfolio' component={PortfolioScreen} />
            <Route path='/contact' component={ContactScreen} />
          </Container>
        </main>
      </Router>
      <ScrollButton />
    </div>
  )
}

export default App
