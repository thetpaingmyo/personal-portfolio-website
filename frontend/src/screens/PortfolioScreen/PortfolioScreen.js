import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import './PortfolioScreen.css'
import ImageModal from '../../components/ImageModal/ImageModal'
import Project from '../../components/Project/Project'
import projects from '../../data/projects'
import { motion } from 'framer-motion'

const PortfolioScreen = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='portfolioScreen py-3'>

      <motion.p 
        className='portfolioScreen__title'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      >
        Some of my projects
      </motion.p>

      <Row className='portfolioScreen__projects'>
        { projects.map((project, i) => (
          <Col key={i} md={6} lg={4}>
            <Project 
              imgPath={project.imgPath} 
              name={project.name} 
              tech={project.tech} 
              address={project.address}
              selectImg={() => setSelectedImg(project.imgPath)} 
            />
          </Col>
        )) }
      </Row>
      { selectedImg && <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  )
}

export default PortfolioScreen
