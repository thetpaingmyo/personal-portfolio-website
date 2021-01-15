import './Sidebar.css'
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import BarChartIcon from '@material-ui/icons/BarChart'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import { motion } from 'framer-motion'

const Sidebar = ({ handleClose }) => {
  return (
    <motion.div 
      initial={{ x: '-100vw' }} 
      animate={{ x: 0 }} 
      transition={{ duration: 0.15 }}
      className='sidebar d-md-none'
    >
      <p className='sidebar__name'>Thet Paing Myo</p>
      <div className='sidebar__menu'>
        <SidebarOption Icon={HomeOutlinedIcon} text='Home' handleClose={handleClose} />
        <SidebarOption Icon={PersonOutlineIcon} text='About' handleClose={handleClose} />
        <SidebarOption Icon={BarChartIcon} text='Skills' handleClose={handleClose} />
        <SidebarOption Icon={WorkOutlineOutlinedIcon} text='Portfolio' handleClose={handleClose} />
        <SidebarOption Icon={MailOutlineOutlinedIcon} text='Contact' handleClose={handleClose} />
      </div>
    </motion.div>
  )
}

export default Sidebar
