import './Intro.css'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <motion.div 
      className='intro'
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3}}
    >
      A dedicated <span className='intro__job'>web developer</span>.
      <br/>
      I am passionate to learn new things and always exploring what new is out there.
      <br />
      Coding can and will ever mesmerize me.
    </motion.div>
  )
}

export default Intro
