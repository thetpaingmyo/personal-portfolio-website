import { Row, Col } from 'react-bootstrap'
import HomeScreenLeft from '../../components/HomeScreenLeft/HomeScreenLeft'
import HomeScreenRight from '../../components/HomeScreenRight/HomeScreenRight'

const HomeScreen = () => {

  return (
    <Row style={{ height: '90vh' }} className='justify-content-md-center align-items-center'>
      <Col className='mt-5 mt-md-4 mb-1' md={6}>
        <HomeScreenLeft />
      </Col>
      <Col className='text-center' md={6}>
        <HomeScreenRight />
      </Col>
    </Row>
  )
}

export default HomeScreen
