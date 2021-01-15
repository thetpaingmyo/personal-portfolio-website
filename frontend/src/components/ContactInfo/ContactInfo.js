import './ContactInfo.css'
import { motion } from 'framer-motion'

const ContactInfo = ({ Icon, title, text, duration, delay, initialPosition }) => {
  return (
    <motion.div 
      className='contactInfo'
      initial={{ x: initialPosition }}
      animate={{ x: 0 }}
      transition={{ duration, delay }}
    >
      <span className='contactInfo__icon'>
        <Icon color='primary' style={{ fontSize: '35px' }} />
      </span>
      
      <div>
        <h4 className='mt-1'>{title}</h4>
        <p>{text}</p>
      </div>
    </motion.div>
  )
} 

export default ContactInfo
