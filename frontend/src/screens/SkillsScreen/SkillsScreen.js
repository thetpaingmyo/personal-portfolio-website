import { Row, Col } from 'react-bootstrap'
import './SkillsScreen.css'
import skills from '../../data/skills'
import Skill from '../../components/Skill/Skill'
import { motion } from 'framer-motion'

const SkillsScreen = () => {
  return (
    <div className='skills py-3'>
      <p className='skills__header'>What do I know?</p>

      <motion.p 
        className='skills__intro'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <strong>My skills for web development</strong>
      </motion.p>

      <Row>
        {skills.map((skillColumn, i) => (
          <Col key={i} md={6}>
            {skillColumn.map((skill, c) => (
              <div key={c} className="skills__bars">
                <Skill skill={skill} />
              </div>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default SkillsScreen
