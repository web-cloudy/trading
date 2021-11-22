import { useState, useContext, Fragment } from 'react'
import classnames from 'classnames'
import { useSkin } from '@hooks/useSkin'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast, Slide } from 'react-toastify'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { isObjEmpty } from '@utils'
import {
  Row,
  Col,
  CardTitle,
  Form,
  Input,
  FormGroup,
  Label,
  Button
} from 'reactstrap'
import axios from 'axios'
import ToastContent from './ToastContent'

import '@styles/base/pages/page-auth.scss'
import API_URL from '../constants/apiUrl'

const LoginForm = props => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { register, errors, handleSubmit } = useForm()
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = async data => {
  
    if (isObjEmpty(errors)) {
      console.log('calling api')
      axios.post(`${API_URL}/auth/login`, {
        email, password
      }).then(res => {
        if (res.data.error) {
          toast.error(
            <ToastContent title='Log In' body={res.data.error} />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        } else {
          const { firstName, lastName } = res.data
          toast.success(
            <ToastContent success title={`Welcome, ${`${firstName} ${lastName}` || 'John Doe'}`} body='You have successfully logged in to Trading. Now you can start trading. Enjoy!' />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
          localStorage.setItem('user', JSON.stringify(res.data))
          history.push('/statistics')
        }
      })
    }
  
    // if (isObjEmpty(errors)) {
    //   useJwt
    //     .login({ email, password })
    //     .then(res => {
    //       const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
    //       dispatch(handleLogin(data))
    //       ability.update(res.data.userData.ability)
    //       history.push(getHomeRouteForLoggedInUser(data.role))
    //       toast.success(
    //         <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
    //         { transition: Slide, hideProgressBar: true, autoClose: 2000 }
    //       )
    //     })
    //     .catch(err => console.log(err))
    // }
  }

  return (
    <div className='auth-wrapper auth-v2' style={{ minHeight: '500px', height: '100%' }}>
      <Row className='auth-inner m-0' style={{ overflow: 'none', width: '100%', height: '100%', marginLeft: '', marginRight: '', display: 'flex', alignItems: 'center', backgroundColor: '#242b3f' }}>
        <Col className='d-flex pt-1 pb-1' lg='12' md='12' sm='12' style={{ height: '90%' }}>
          <Col sm='12' md='6' lg='6' style={{ backgroundImage: 'Url(/banners/6.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} onClick={e => history.push('/')}/>
          <Col className='px-3 mx-auto' sm='12' md='5' lg='5' style={{ borderRadius: '10px', paddingTop: '30px', paddingBottom: '30px', height: '', display: 'flex', alignItems: 'center' }}>
            <Col xs='12' sm='12' md='12' lg='12' xl='12'>
              <CardTitle tag='h2' className='font-weight-bold mb-1 text-white'>
                Log in
              </CardTitle>

              <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Label className='form-label text-white' for='login-email'>
                    Email
                  </Label>
                  <Input
                    autoFocus
                    type='email'
                    value={email}
                    id='login-email'
                    name='login-email'
                    placeholder='john@example.com'
                    onChange={e => setEmail(e.target.value)}
                    className={classnames({ 'is-invalid': errors['login-email'] })}
                    innerRef={register({ required: true, validate: value => value !== '' })}
                  />
                </FormGroup>
                <FormGroup>
                  <div className='d-flex justify-content-between'>
                    <Label className='form-label text-white' for='login-password'>
                      Password
                    </Label>
                    {/* <Link to='/forgotPassword'>
                      <small>Forgot Password?</small>
                    </Link> */}
                  </div>
                  <InputPasswordToggle
                    value={password}
                    id='login-password'
                    name='login-password'
                    className='input-group-merge'
                    onChange={e => setPassword(e.target.value)}
                    className={classnames({ 'is-invalid': errors['login-password'] })}
                    innerRef={register({ required: true, validate: value => value !== '' })}
                  />
                </FormGroup>
                <Button.Ripple type='submit' color='primary' block>
                  Sign in
                </Button.Ripple>
              </Form>
              <p className='text-center mt-2'>
                <span className='mr-25 text-white'>New on our platform?</span>
                <Link to='/'>
                  <span>Create an account</span>
                </Link>
              </p>
            </Col>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default LoginForm
