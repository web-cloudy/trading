import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast, Slide } from 'react-toastify'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import {
  Row,
  Col,
  CardTitle,
  CardText
} from 'reactstrap'
import ToastContent from '../../components/ToastContent'

import '@styles/base/pages/page-auth.scss'
import API_URL from '../../constants/apiUrl'

const ResetPassword = () => {
  const [status, setStatus] = useState(0)
  const { resetCode } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    // code to run on component mount
    axios.post(`${API_URL}/auth/resetPassword`, {
      resetCode
    }).then(res => {
      if (res.data.error) {
        toast.error(
          <ToastContent title='ResetPassword' body={res.data.error} />,
          { transition: Slide, hideProgressBar: true, autoClose: 2000 }
        )
        setStatus(2)
      } else {
        setStatus(1)
        const { firstName, lastName } = res.data
        toast.success(
          <ToastContent success title={`Good Work, ${`${firstName} ${lastName}` || 'John Doe'}`} body='You have successfully reset your password. Now you can resume trading. Enjoy!' />,
          { transition: Slide, hideProgressBar: true, autoClose: 2000 }
        )
        // localStorage.setItem('user', JSON.stringify(res.data))
        history.push('/login')
      }
    })
  }, [])

  return (
    <div className='auth-wrapper auth-v2' style={{ minHeight: '0px' }}>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto' }}>
        <Col className='d-none d-flex align-items-center' lg='4' md='3' sm='0'>
        </Col>
        <Col className='d-flex align-items-center pt-5 pb-1' lg='4' md='6' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='12' md='12' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Reset Password
            </CardTitle>
            <CardText>
              {
                status === 0 ? "Please wait while resetting your password" : (status === 1 ? "You Password is reset" : "You Password is not reset")
              }
            </CardText>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default ResetPassword
