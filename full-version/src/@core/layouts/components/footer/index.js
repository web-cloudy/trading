// ** Icons Import
import { Twitter, Mail, Youtube, Linkedin } from 'react-feather'
import {
  Button
} from 'reactstrap'

const Footer = () => {
  return (
    <div className='mb-0' style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
        <div className='auth-footer-btn d-flex' style={{ paddingLeft: '1rem' }}>
          <img src='/LOGO.CAP1.png' style={{ objectFit: 'contain', height: '70px' }}></img>
        </div>
        <div className='auth-footer-btn d-flex' style={{ paddingLeft: '1rem', fontSize:'1rem' }}>
        Fynance.capital and its services are not available in the United States or other prohibited jurisdictions.
          <br/>Copyright © Fynance Capital SLP
        </div>
        <div className='auth-footer-btn d-flex' style={{ paddingRight: '30px' }}>
          <Button.Ripple color='flat-primary' style={{ marginRight: '1rem' }}>
            <Youtube size={14} />
          </Button.Ripple>
          <Button.Ripple color='flat-primary' style={{ marginRight: '1rem' }}>
            <Twitter size={14} />
          </Button.Ripple>
          <Button.Ripple color='flat-primary' style={{ marginRight: '1rem' }}>
            <Linkedin size={14} />
          </Button.Ripple>
          <Button.Ripple color='flat-primary' style={{ marginRight: '1rem' }}>
            <Mail size={14} />
          </Button.Ripple>
        </div>
      </div>
    </div>
  )
}

export default Footer
