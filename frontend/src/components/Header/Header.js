import {
  Navbar, Nav,  Container
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import BarChartIcon from '@material-ui/icons/BarChart'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import './Header.css'

const Header = () => {
  return (
    // <div>
    //   <div style={{ minWidth: '300px', height: '56px' }} className='sticky-top d-md-none position-relative'>
    //     <span style={{ right: '5%', top: '20%', color: 'blue' }} className='header__burger position-absolute'><MenuIcon /></span>
    //   </div>

      <Navbar style={{ minWidth: '300px' }} className='sticky-top d-none d-md-block' bg="light" variant="light">
        <Container>
          <Navbar.Brand className='header__navBrand'>Thet Paing Myo</Navbar.Brand>
          
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Nav className='ml-auto header__navlink'>
              <LinkContainer className='d-flex' to='/'>
                <Nav.Link>
                  <HomeOutlinedIcon className='mr-1' />Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer className='d-flex' to='/about'>
                <Nav.Link>
                  <PersonOutlineIcon className='mr-1' />About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer className='d-flex' to='/skills'>
                <Nav.Link>
                  <BarChartIcon className='mr-1' />Skills
                </Nav.Link>
              </LinkContainer>
              <LinkContainer className='d-flex' to='/portfolio'>
                <Nav.Link>
                  <WorkOutlineOutlinedIcon className='mr-1' />Portfolio
                </Nav.Link>
              </LinkContainer>
              <LinkContainer className='d-flex' to='/contact'>
                <Nav.Link>
                  <MailOutlineOutlinedIcon className='mr-1' />Contact
                </Nav.Link>
              </LinkContainer>
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    // </div>
  )
}

export default Header
