import './ImageModal.css'
import { motion } from 'framer-motion'

const ImageModal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('imageModal')) {
      setSelectedImg(null)
    }
  }

  return (
    <div onClick={handleClick} className='imageModal d-none d-md-block'>
      <motion.img 
        src={selectedImg} 
        alt="Enlarged Pic"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </div>
  )
}

export default ImageModal
