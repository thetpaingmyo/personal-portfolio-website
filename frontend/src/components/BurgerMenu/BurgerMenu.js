import './BurgerMenu.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { motion } from 'framer-motion'

const BurgerMenu = ({ open, handleOpen, handleClose }) => {
  return (
    <div className='d-md-none'>
      {!open && (
        <motion.div
          transition={{ delay: 0.4, duration: 0.1 }}
          initial={{ y: '-100vw' }}
          animate={{ y: 0 }}
          className='burgerMenu'
          onClick={handleOpen}
        >
          <MenuIcon style={{ fontSize: '30px' }} />
        </motion.div>
      )}

      {open && (
        <motion.div
          transition={{ duration: 0.1 }}
          initial={{ y: '-100vw' }}
          animate={{ y: 0 }}
          className='burgerMenu'
          onClick={handleClose}
        >
          <CloseIcon style={{ fontSize: '30px' }} />
        </motion.div>
      )}
    
    </div>
  )
}

export default BurgerMenu
