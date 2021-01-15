import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined'
import { motion } from 'framer-motion'
import './HomeScreenRight.css'

const HomeScreenRight = () => {
  const history = useHistory()

  return (
    <motion.div 
      initial={{ x: '-100vw' }} 
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className='homeScreenRight'
    >
      <h3 className='homeScreenRight__text'>Hi <PanToolOutlinedIcon className='homeScreenRight__greet' /></h3>
      <h1 className='homeScreenRight__text'>I'm <span className='homeScreenRight__name'>Thet Paing Myo</span></h1>
      <h3 className='homeScreenRight__text'>Web Developer</h3>

      <Button
        className='mt-3'
        variant='contained'
        color="primary"
        startIcon={<ContactMailIcon />}
        onClick={() => history.push('/contact')}
      >
        Contact
      </Button>

    </motion.div>
  )
}

export default HomeScreenRight
