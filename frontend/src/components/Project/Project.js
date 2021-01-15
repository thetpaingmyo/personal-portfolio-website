import { useState } from 'react'
import { Card, Collapse } from 'react-bootstrap'
import './Project.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import Button from '@material-ui/core/Button'
import { motion } from 'framer-motion'

const Project = ({ imgPath, name, selectImg, tech, address }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <Card className='project my-3 rounded position-relative'>
        <Card.Img 
          className='project__imageWithFeature d-none d-md-block' 
          src={imgPath}
          variant='top'
          onClick={selectImg}
        />
        <Card.Img 
          className='project__image d-md-none' 
          src={imgPath} 
          variant='top'
        />

        <div className='my-3 mx-3'>
          <strong>{name}</strong>
          <Button
            variant='contained'
            color="primary"
            className='btn-sm float-right'
            onClick={() => setOpen(prev => !prev)}
          >
            { open ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
          </Button>
        </div>

        <Collapse in={open}>
          <div className='mx-3 mb-4'>
            <p>Technology used: <strong>{tech}</strong></p>

            <a 
              style={{ textDecoration: 'none', color: 'white' }} 
              href={address} 
              rel="noreferrer" 
              target='_blank' 
            >
              <Button 
                variant='contained'
                color="primary"
              >
                Go to website
              </Button>
            </a>
          </div>
        </Collapse>
      </Card>
    </motion.div>
  )
}

export default Project
