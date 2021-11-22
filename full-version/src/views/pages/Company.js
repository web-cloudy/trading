import '@styles/base/pages/page-auth.scss'
import { Table, Row, Col } from 'reactstrap'
//eslint-disable-next-line

const Company = () => {
  return (
    <div className='auth-wrapper auth-v2' style={{ flexDirection: 'column' }}>
      <Row style={{ width: '100%', marginLeft: '0', marginRight: '0', display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(36, 43, 63)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ width: '1000px' }}>
          <img src='/banners/3.png' style={{ width: '100%' }} />
        </div>
      </Row>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto' }}>
        <Col className='d-none d-flex align-items-center p-5' lg='12' md='12' sm='12'>
          <div className='w-100 align-items-center justify-content-center px-5'>
            <h1 className="font-weight-bold pt-2 pb-2">Company</h1>
            <h5 className='pl-2 mb-1'>Fynance has been built on our belief that the blockchain technology and the underlying cryptocurrency sphere, will fundamentally change the world – and our principal focus is of course on the impact it has on the financial sector.</h5>

            <h5 className='pl-2 mb-1'>We are building a fair, open and efficient derivative market place that caters not only to professionals and institutional participants, but to retail traders and investors and people that seek to diversify and hedge.</h5>

            <h5 className='pl-2 mb-1'>From inception, our focus was on making the platform-user interaction as seamless and simple as possible, and we believe we have excelled in creating a easy to use interface powered by institutional grade technology.</h5>

            <h5 className='pl-2 mb-1'>Our next stage of growth is represented by our imminent evolution into a completely Decentralized Option Platform, where every trade is deployed on the blockchain via a trustless, permissionless protocol.</h5>

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Company