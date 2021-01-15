import { Row, Col } from 'react-bootstrap'
import './AboutScreen.css'
import Intro from '../../components/Intro/Intro'
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo'
import PersonalOverview from '../../components/PersonalOverview/PersonalOverview'
import { motion } from 'framer-motion'

const AboutScreen = () => {
  return (
    <div className='aboutScreen py-3'>
      <motion.p 
        className='aboutScreen__title'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        A few things about me...
      </motion.p>

      <Row className='justify-content-center'>
        <Col xs={12} sm={10} md={7} lg={5} xl={4}>
          <Intro />
        </Col>
      </Row>
      
      <div className='aboutScreen__facts mt-4'>
        <Row className='justify-content-md-center'>
          <Col md={6} lg={4} className='mb-4'>
            <PersonalInfo />
          </Col>
          <Col md={6}>
            <PersonalOverview />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AboutScreen
