import './PersonalOverview.css'
import { motion } from 'framer-motion'

const PersonalOverview = () => {
  return (
    <motion.div 
      className='personalOverview'
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, duration: 0.3}}
    >
      <h4 className='personalOverview__title mb-3'>Overview</h4>
      <p>
        I create full stack web applications with <span className='specialWord'>MERN</span> stack.
        <br />
        Sometimes, I use <span className='specialWord'>Django</span> for backend development.
        <br />
        Speaking of frontend, <span className='specialWord'>React</span> is the only framework that I always use. 
        I have decent knowledge 
        of <span className='specialWord'>Socket.io</span>, <span className='specialWord'>Firebase</span>, <span className='specialWord'>Graphql</span>, <span className='specialWord'>Tailwindcss</span> and <span className='specialWord'>Material UI</span> as well.
      </p>
    </motion.div>
)
}

export default PersonalOverview
