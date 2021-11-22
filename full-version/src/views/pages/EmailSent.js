import { useState, useContext, Fragment } from 'react'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast, Slide } from 'react-toastify'
import { handleLogin } from '@store/actions/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import {
  Alert,
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Input,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

import '@styles/base/pages/page-auth.scss'

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user to . Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const EmailSent = props => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { register, errors, handleSubmit } = useForm()
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className='auth-wrapper auth-v2' style={{ minHeight: '0px' }}>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto' }}>
        <Col className='d-none d-flex align-items-center' lg='4' md='3' sm='0'>
        </Col>
        <Col className='d-flex align-items-center pt-5 pb-1' lg='4' md='6' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='12' md='12' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Verify your email
            </CardTitle>

            <CardText>
              We have sent you an email. Please check your inbox.
            </CardText>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default EmailSent
