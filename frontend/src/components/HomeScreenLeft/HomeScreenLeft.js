import './HomeScreenLeft.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import { motion } from 'framer-motion'

const HomeScreenLeft = () => {
  return (
    <motion.div 
      initial={{ y: '-100vh' }} 
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className='d-flex justify-content-center align-items-center'>
        <img 
          className='homeScreenLeft__profileImg' 
          src='https://res.cloudinary.com/cloud112/image/upload/v1610307369/PortfolioWebsite/profile-picture_g1xd5e.png' 
          alt=""
        />
      </div>

      <p className='text-center mt-4'>
        <motion.a 
          href="https://github.com/thetpaingmyo" 
          rel="noreferrer" 
          target='_blank' 
          whileHover={{ opacity: 0.9 }}
        >
          <GitHubIcon 
            className='mr-4' 
            style={{ fontSize: '32px', color: '#212529' }} 
          />
        </motion.a>

        <motion.a 
          href="https://www.linkedin.com/in/thet-paing-myo" 
          rel="noreferrer" 
          target='_blank' 
          whileHover={{ opacity: 0.9 }}
        >
          <LinkedInIcon 
            className='mr-4' 
            style={{ fontSize: '40px', color: '#212529' }} 
          />
        </motion.a>

        <motion.a 
          href="https://www.facebook.com/profile.php?id=100009063690886" 
          rel="noreferrer" 
          target='_blank' 
          whileHover={{ opacity: 0.9 }}
        >
          <FacebookIcon 
            style={{ fontSize: '40px', color: '#212529' }}
          />
        </motion.a>
      </p>
    </motion.div>
  )
}

export default HomeScreenLeft
