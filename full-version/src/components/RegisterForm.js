import { useState, useContext } from 'react'
import classnames from 'classnames'
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

/*
"firstName":"Dragan",
    "lastName":"Draganov",
    "email":"smartdev@innovdev.com",
    "birthday":"2000-08-04",
    "password":"vnfmsgksmf2084"
*/

const RegisterForm = ({ setForm }) => {
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthday, setBirthday] = useState('2000-01-01')
  const [passconf, setPassconf] = useState('')
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = data => {
    if (isObjEmpty(errors)) {
      axios.post(`${API_URL}/users`, {
        firstName, lastName, email, birthday, password
      }).then(res => {
        console.log(res)
        if (res.data.error) {
          toast.error(
            <ToastContent title='Sign Up' body={res.data.error} />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
          toast.error(res.data.error)
        } else {
          toast.success(
            <ToastContent success title={`Welcome, ${`${firstName} ${lastName}` || 'John Doe'}`} body='You have successfully signed up to Trading. Now please verify your email.' />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
          // localStorage.setItem('user', JSON.stringify(res.data))
          history.push('/emailSent')
        }
      })
    }
  }

  return (
    <div className='auth-wrapper auth-v2' style={{ minHeight: '0px' }}>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto', marginLeft: '', marginRight: '' }}>
        <Col className='d-flex align-items-center pt-5 pb-1' lg='12' md='12' sm='12'>
          <Col className='px-3 mx-auto' sm='12' md='12' lg='12'>
            <CardTitle tag='h4' className='font-weight-bold mb-1 text-white'>
              OPEN YOUR FYNANCE ACCOUNT
            </CardTitle>

            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label className='form-label text-white' for='fist-name'>
                  First Name
                </Label>
                <Input
                  autoFocus
                  type='text'
                  value={firstName}
                  id='first-name'
                  name='first-name'
                  placeholder='John'
                  onChange={e => setFirstName(e.target.value)}
                  className={classnames({ 'is-invalid': errors['first-name'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label text-white' for='fist-name'>
                  Last Name
                </Label>
                <Input
                  autoFocus
                  type='text'
                  value={lastName}
                  id='last-name'
                  name='last-name'
                  placeholder='Smith'
                  onChange={e => setLastName(e.target.value)}
                  className={classnames({ 'is-invalid': errors['last-name'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
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
                  innerRef={register({ required: true, validate: value => value !== '' && value.includes('@') })}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label text-white' for='birthday'>
                  Birthday
                </Label>
                <Input
                  autoFocus
                  type='date'
                  value={birthday}
                  id='birthday'
                  name='birthday'
                  onChange={e => setBirthday(e.target.value)}
                  className={classnames({ 'is-invalid': errors['birthday'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label text-white' for='login-password'>
                    Password
                  </Label>
                </div>
                <InputPasswordToggle
                  value={password}
                  id='login-password'
                  name='login-password'
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['login-password'] })}
                  innerRef={register({ required: true, validate: value => value !== '' && value === passconf })}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label text-white' for='conf-password'>
                    Confirm Password
                  </Label>
                </div>
                <InputPasswordToggle
                  value={passconf}
                  id='conf-password'
                  name='conf-password'
                  className='input-group-merge'
                  onChange={e => setPassconf(e.target.value)}
                  className={classnames({ 'is-invalid': errors['conf-password'] })}
                  innerRef={register({ required: true, validate: value => value !== '' && value === password })}
                />
              </FormGroup>
              <Button.Ripple type='submit' color='primary' block>
                Sign Up
              </Button.Ripple>
            </Form>
            <p className='text-center mt-2 text-white'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign In</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default RegisterForm