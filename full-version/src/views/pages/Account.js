// import RegisterForm from '../../components/RegisterForm'
import { useState, useContext, useEffect } from 'react'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast, Slide } from 'react-toastify'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { isObjEmpty } from '@utils'
import ToastContent from '../../components/ToastContent'
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
import '@styles/base/pages/page-auth.scss'
import API_URL from '../../constants/apiUrl'
const Account = () => {
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [id, setId] = useState()
  const [password, setPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [birthday, setBirthday] = useState('2000-01-01')
  const [passconf, setPassconf] = useState('')
  const { register, errors, handleSubmit } = useForm()
  const { register: register1, errors: errors1, handleSubmit: handleSubmit1 } = useForm()
  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setBirthday(user.birthday)
    setId(user._id)
  }, [])
  const onSubmit = (e) => {
    if (isObjEmpty(errors && id !== undefined)) {
      console.log(id)
      axios.put(`${API_URL}/users/${id}`, {
        firstName, lastName, birthday
      }).then(res => {
        console.log(res.data)
        if (res.data !== null) {
          localStorage.setItem('user', JSON.stringify(res.data))
          setFirstName(res.data.firstName)
          setLastName(res.data.lastName)
          setBirthday(res.data.birthday)
          toast.success(
            <ToastContent success title={`Welcome, ${`${res.data.firstName} ${res.data.lastName}` || 'John Doe'}`} body='You have successfully updated' />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        }

      })
    }
  }

  const onSubmitPassword = (e) => {
    console.log("submitpassword")
    if (isObjEmpty(errors && id !== undefined)) {
      console.log(id)
      axios.put(`${API_URL}/users/${id}`, {
        currentPassword, password
      }).then(res => {
        console.log(res.data)
        if (res.data !== "incorrect") {
          toast.success(
            <ToastContent success title={`Welcome, ${`${res.data.firstName} ${res.data.lastName}` || 'John Doe'}`} body='Your password successfully updated' />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        } else {
          toast.error(
            <ToastContent danger title="Incorrect password" body='Your password was wrong' />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        }
      })
    }
  }

  return (
    <div className='auth-wrapper auth-v2' style={{ minHeight: '0px' }}>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto', marginLeft: '', marginRight: '' }}>
        <Col className='d-flex align-items-center pb-1 pt-5' lg='6' md='6' sm='6'>
          <Col className='px-3 mx-auto' sm='12' md='12' lg='12' style={{ color: "black" }}>
            <CardTitle tag='h4' className='font-weight-bold mb-1'>
              UPDATE ACCOUNT
            </CardTitle>

            <Form key={1} className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label className='form-label' for='fist-name'>
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
                <Label className='form-label' for='fist-name'>
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
                <Label className='form-label' for='birthday'>
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
              <Button.Ripple type='submit' color='primary' block>
                Update Account
              </Button.Ripple>
            </Form>
          </Col>
        </Col>
        <Col className='d-flex align-items-center pb-1 pt-5' lg='6' md='6' sm='6'>
          <Col className='px-3 mx-auto' sm='12' md='12' lg='12'>
            <CardTitle tag='h4' className='font-weight-bold mb-1'>
              UPDATE PASSWORD
            </CardTitle>

            <Form key={2} className='auth-login-form mt-2' onSubmit={handleSubmit1(onSubmitPassword)}>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='currentPassword'>
                    Current Password
                  </Label>
                </div>
                <InputPasswordToggle
                  value={currentPassword}
                  id='current-password'
                  name='current-password'
                  className='input-group-merge'
                  onChange={e => setCurrentPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['current-password'] })}
                  innerRef={register1({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='password'>
                    Password
                  </Label>
                </div>
                <InputPasswordToggle
                  value={password}
                  id='password'
                  name='password'
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['password'] })}
                  innerRef={register1({ required: true, validate: value => value !== '' && value === passconf })}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='conf-password'>
                    Confirm Password
                  </Label>
                </div>
                <InputPasswordToggle
                  value={passconf}l
                  id='conf-password'
                  name='conf-password'
                  className='input-group-merge'
                  onChange={e => setPassconf(e.target.value)}
                  className={classnames({ 'is-invalid': errors['conf-password'] })}
                  innerRef={register1({ required: true, validate: value => value !== '' && value === password })}
                />
              </FormGroup>
              <Button.Ripple type='submit' color='primary' block>
                Update Password
              </Button.Ripple>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  )
}
export default Account