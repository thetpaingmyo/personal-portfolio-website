import { useHistory } from 'react-router-dom'
import './SidebarOption.css'

const SidebarOption = ({ Icon, text, handleClose }) => {
  const history = useHistory()

  const clickHandler = () => {
    handleClose()
    if (text === 'Home') {
      history.push('/')
    } else {
      history.push(`/${text.toLowerCase()}`)
    }
  }

  return (
    <div 
      onClick={clickHandler}
      className='sidebarOption'
    >
        <Icon /><span className='sidebarOption__menuText'>{text}</span>
    </div>
  )
}

export default SidebarOption
