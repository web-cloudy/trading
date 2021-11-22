import {
  Row,
  Col
} from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const Milestones = () => {
  return (
    <div className='auth-wrapper auth-v2' style={{ flexDirection: 'column' }}>
      <Row style={{ width: '100%', marginLeft: '0', marginRight: '0', display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(36, 43, 63)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ width: '1000px' }}>
          <img src='/banners/4.png' style={{ width: '100%' }} />
        </div>
      </Row>
      <Row style={{ width: '100%', marginLeft: '0', marginRight: '0', display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ width: '1000px' }}>
          <img src='/Milestones.png' style={{ width: '100%' }} />
        </div>
      </Row>
    </div>
  )
}

export default Milestones