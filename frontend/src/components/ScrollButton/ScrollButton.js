import { useState } from 'react'
import './ScrollButton.css'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const ScrollButton = () => {
  // const [c, setC] = useState('none')

  // const style={ display: c, position: 'fixed', bottom: '20px', right: '30px' }

  // window.onscroll= () => scrollFunction()

  // const scrollFunction = () => {
  //   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  //     setC('block')
  //   } else {
  //     setC('none')
  //   }
  // }

  // const topFunction = () => {
  //   document.body.scrollTop = 0
  //   document.documentElement.scrollTop = 0
  // }

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
  <KeyboardArrowUpIcon 
    className='scrollButton' 
    style={{display: showScroll ? 'flex' : 'none'}} 
    onClick={scrollTop}
  />
  )
}

export default ScrollButton
