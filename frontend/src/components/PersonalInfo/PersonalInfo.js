import { Row, Col } from 'react-bootstrap'
import './PersonalInfo.css'
import CreateIcon from '@material-ui/icons/Create'
import infos from '../../data/infos'
import { motion } from 'framer-motion'

const PersonalInfo = () => {
  return (
    <motion.div 
      className='personalInfo'
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 0.3}}
    >
      <h4 className='personalInfo__title mb-4'>Personal Info</h4>
      { infos.map((info, i) => (
        <Row key={i} className='my-3'>
          <Col>
            <CreateIcon style={{ fontSize: '16px' }} />{info.title}
          </Col>
          <Col>
            <strong>{info.fact}</strong>
          </Col>
        </Row>
      )) }
    </motion.div>
  )
}

export default PersonalInfo
