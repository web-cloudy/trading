import { useState, useContext, useEffect, Fragment } from 'react'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast, Slide } from 'react-toastify'
import { handleLogin } from '@store/actions/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory, useParams } from 'react-router-dom'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import axios from 'axios'
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
import ToastContent from '../../components/ToastContent'

import '@styles/base/pages/page-auth.scss'
import API_URL from '../../constants/apiUrl'

const Verficiation = props => {
  const [skin, setSkin] = useSkin()
  const [status, setStatus] = useState(0)
  const { verifyCode } = useParams()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    // code to run on component mount
    axios.post(`${API_URL}/auth/verify`, {
        verifyCode
      }).then(res => {
        if (res.data.error) {
          toast.error(
            <ToastContent title='Verify Email' body={res.data.error}/>,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
          setStatus(2)
        } else {
          setStatus(1)
          const {firstName, lastName} = res.data
          toast.success(
            <ToastContent success title={`Welcome, ${`${firstName} ${lastName}` || 'John Doe'}`} body='You have successfully verified your email. Now you can start trading. Enjoy!'/>,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
          localStorage.setItem('user', JSON.stringify(res.data))
          history.push('/statistics')
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
              Verfication
            </CardTitle>
            <CardText>
              {
                status === 0 ? "Please wait while verifying Email" : (status === 1 ? "You Email is verified" : "You Email is not verified")
              }
            </CardText>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Verficiation
