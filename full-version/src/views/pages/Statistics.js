import { useState, useContext, Fragment, useEffect } from 'react'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { AbilityContext } from '@src/utility/context/Can'
import { useHistory } from 'react-router-dom'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {
  Row,
  Col,
  ButtonGroup,
  Button,
  Nav,
  NavItem,
  NavLink,
  Table,
  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle
} from 'reactstrap'
import ApexChart from './chart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faHistory } from '@fortawesome/free-solid-svg-icons'
import { faRocketchat } from '@fortawesome/free-brands-svg-icons'
import { Check } from 'react-feather'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/page-auth.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './statistics.css'
import axios from 'axios'
import API_URL from '../../constants/apiUrl'
const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const Statistics = props => {
  const [options, setOptions] = useState(1)
  const [gearing, setGearing] = useState(3)
  const [margin, setMargin] = useState(5)
  const [lifeSpan, setLifeSpan] = useState(45)
  const [currentPrice, setCurrentPrice] = useState(0)
  const [active, setActive] = useState('1')
  const [tradeType, setTradeType] = useState(1)
  const [data, setData] = useState([])
  const [basicModal, setBasicModal] = useState(false)
  const [update, setUpdate] = useState(0)
  const [balance, setBalance] = useState(0)
  // const [isExpired, setExpire] = useState(0)
  let timer
  const stateFlag = (entry, trade) => {
    if ((entry > currentPrice && trade === false) || (entry < currentPrice && trade === true)) {
      return true
    } else return false
  }

  const outcomeFlag = (entry, trade) => {
    if ((entry > currentPrice && trade === false) || (entry < currentPrice && trade === true)) {
      return true
    } else return false
  }

  const isExpiredFunc = async (data) => {
    if (data.isExpired === false && Date.now() > data.endTime) {
      const outcome = outcomeFlag(data.entryPrice, data.tradeType)
      const result = Math.trunc(Math.abs((currentPrice - data.entryPrice) * data.options * data.gearing))
      const dat = await axios.put(`${API_URL}/trade`, { _id: data._id, outcome, result })
      if (dat.data.length > 0) {
        setData(dat.data)
      }
    }
  }

  const timeFunc = async () => {
    // const options = {
    //   headers: { 'X-Custom-X-CMC_PRO_API_KEY': '628cb45c-0165-485e-9317-a1331310091c' }
    // }
    if (location.pathname !== "/statistics") {
      clearInterval(timer)
    }
    const price = await axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD')
    // const price = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', options)
    // console.log(price)
    setCurrentPrice(price.data.data.amount)
    setUpdate(Date.now())
  }
  useEffect(() => {
    timer = setInterval(() => {
      timeFunc()
    }, 1000)

  }, [])
  useEffect(async () => {
    setBalance(JSON.parse(localStorage.getItem('user')).balance)
    const dat = axios.get(`${API_URL}/trade`).then((dat) => {
      if (dat.data.length > 0) {
        setData(dat.data)
      }
    })
  }, [])
  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  async function tradeCom() {
    if (currentPrice > 0) {
      axios.post(`${API_URL}/trade/create`, {
        tradeType, options, gearing, lifeSpan, entryPrice: currentPrice
      }).then((dat) => {
        setData(dat.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
  const activeCountFunc = () => {
    let num = 0
    for (let i = 0; i < data.length; i++) {
      if (data[i].isExpired === false) {
        num++
      }
    }
    return num
  }

  const restTime = (data) => {
    const secondTime = Math.trunc((data.endTime - Date.now()) / 1000)
    if (secondTime >= 0) {
      const second = secondTime % 60
      const minute = Math.trunc(secondTime / 60)
      const rest = `${minute}:${second}`
      return rest
    } else {
      isExpiredFunc(data)
    }
  }

  return (
    <div className='auth-wrapper auth-v2 background' style={{ flexDirection: 'column', paddingBottom: '20px' }}>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto' }}>
        <Col lg='1' sm='12' md='12' xl='1' style={{ marginTop: '40px' }}>
          <Row style={{ margin: '10px' }}>
            <Col>
              <Row style={{ justifyContent: 'center', marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faShoppingBag} size='2x' style={{ cursor: 'pointer' }} />
              </Row>
              <Row style={{ fontSize: '15px', justifyContent: 'center' }}>
                TOTAL
              </Row>
              <Row style={{ fontSize: '15px', justifyContent: 'center' }}>
                PORTFOLIO
              </Row>
            </Col>
          </Row>
          <Row style={{ margin: '10px' }}>
            <Col>
              <Row style={{ justifyContent: 'center', marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faHistory} size='2x' style={{ cursor: 'pointer' }} onClick={() => setBasicModal(!basicModal)} />
              </Row>
              <Row style={{ fontSize: '15px', justifyContent: 'center' }}>
                TRADING
              </Row>
              <Row style={{ fontSize: '15px', justifyContent: 'center' }}>
                HISTORY
              </Row>
            </Col>
          </Row>
          <Row style={{ margin: '10px' }}>
            <Col>
              <Row style={{ justifyContent: 'center', marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faRocketchat} size='2x' style={{ cursor: 'pointer' }} />
              </Row>
              <Row style={{ fontSize: '15px', justifyContent: 'center' }}>
                CHARTS&
              </Row>
              <Row style={{ fontSize: '15px', justifyContent: 'center' }}>
                SUPPORT
              </Row>
            </Col>
          </Row>
        </Col>
        <Col style={{ justifyContent: 'center' }} sm='12' md='12' lg='8' xl='8'>
          <div className="balance">
            <Row>
              <Col sm="5" md='5' lg='5' xl='5'>
                <div style={{textAlign: 'center'}}>
                  <p style={{color: "orange"}}>$  {balance}</p>
                  <div style={{width: '100px', height: '3px', backgroundColor: "green"}} ></div>
                </div>
              </Col>
              <Col sm="7" md='7' lg='7' xl='7'>
                <div className='deposit'>
                  <img width='34px' height='34px' style={{ color: "green" }} src='./assets/img/dollar.png' />
                  &nbsp;&nbsp;&nbsp;<span style={{ fontSize: '20px' }}>Deposit</span>
                </div>
              </Col>
            </Row>
          </div>
          <ApexChart />
          <div className='active-div' >
            <Nav tabs style={{ marginBottom: "0px" }}>
              <NavItem>
                <NavLink
                  active={active === '1'}
                  onClick={() => {
                    toggle('1')
                  }}
                >
                  ACTIVE {activeCountFunc()}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === '2'}
                  onClick={() => {
                    toggle('2')
                  }}
                >
                  PENDING 0
                </NavLink>
              </NavItem>
            </Nav>
            <Table responsive style={{ color: '#ffffff' }}>
              <thead>
                <tr>
                  <th style={{ backgroundColor: 'rgb(36, 45, 67)' }} scope='col' className='text-nowrap'>
                    Name
                    </th>
                  <th style={{ backgroundColor: 'rgb(36, 45, 67)' }} scope='col' className='text-nowrap'>
                    Type
                    </th>
                  <th style={{ backgroundColor: 'rgb(36, 45, 67)' }} scope='col' className='text-nowrap'>
                    Date
                    </th>
                  <th style={{ backgroundColor: 'rgb(36, 45, 67)' }} scope='col' className='text-nowrap'>
                    Quantity
                    </th>
                  <th style={{ backgroundColor: 'rgb(36, 45, 67)' }} scope='col' className='text-nowrap'>
                    Open
                    </th>
                  <th style={{ backgroundColor: 'rgb(36, 45, 67)' }} scope='col' className='text-nowrap'>
                    Current Price
                    </th>
                  <th style={{ backgroundColor: 'rgb(36, 45, 67)' }} scope='col' className='text-nowrap'>
                    P/L
                    </th>
                </tr>
              </thead>
              <tbody>
                {data.map((dat, i) => {
                  if (dat.isExpired === false) {
                    return (
                      <tr key={i}>
                        <td className='text-nowrap'>BTCUSDT</td>
                        <td className='text-nowrap'>{dat.tradeType === true ? "CALL" : "PUT"}</td>
                        <td className='text-nowrap' style={{ color: "rgb(193, 94, 11)" }}><i className="fa fa-clock-o"></i>&nbsp;{restTime(dat)}</td>
                        <td className='text-nowrap'>{dat.options}</td>
                        <td className='text-nowrap'>{dat.entryPrice}</td>
                        <td className='text-nowrap'>{currentPrice}</td>
                        <td className='text-nowrap'>{stateFlag(dat.entryPrice, dat.tradeType) ? <i className='fas fa-play rotate0' size='2x'></i> : <i className='fas fa-play rotate1' size='2x'></i>}</td>
                      </tr>
                    )
                  }
                })}

              </tbody>
            </Table>

          </div>
        </Col>
        <Col lg='3' sm='12' md='12' xl='3' >
          <Row style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px' }}>
            <Col sm='12' md='12' lg='12' xl='12' style={{ border: '1px solid #444444', borderRadius: '5px', justifyContent: 'center' }}>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px' }}>Number Options</div></Row>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px', fontSize: '20px', fontWeight: 700 }}>{options}</div></Row>
              <Row>
                <ButtonGroup style={{ width: '100%' }}>
                  <Button className='dark border-left-none border-bottom-none' outline style={{ fontSize: '20px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '0px 0px 0px 5px' }} onClick={() => setOptions(options + 1)}>
                    +
                  </Button>
                  <Button className='dark border-left-none border-bottom-none' outline style={{ fontSize: '20px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '0px 0px 5px 0px' }} onClick={() => setOptions(options > 1 ? options - 1 : options)}>
                    -
                  </Button>
                </ButtonGroup>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px' }}>
            <Col sm='12' md='12' lg='12' xl='12' style={{ border: '1px solid #444444', borderRadius: '5px' }}>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px' }}>Gearing</div></Row>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px', fontSize: '20px', fontWeight: 700, className: '#2c1e1f' }}>{gearing}x</div></Row>
              <Row>
                <ButtonGroup style={{ width: '100%' }}>
                  <Button className='dark border-left-none border-bottom-none' onClick={() => {
                    setGearing(3)
                    setMargin(5)
                  }} outline style={{ padding: '1px 1px 1px 1px' }} active={gearing === 3}>
                    3x
                  </Button>
                  <Button className='dark border-left-none border-bottom-none' onClick={() => {
                    setGearing(6)
                    setMargin(10)
                  }} outline style={{ padding: '1px 1px 1px 1px' }} active={gearing === 6}>
                    6x
                  </Button>
                  <Button className='dark border-left-none border-bottom-none' onClick={() => {
                    setGearing(9)
                    setMargin(15)
                  }} outline style={{ padding: '1px 1px 1px 1px' }} active={gearing === 9}>
                    9x
                  </Button>
                </ButtonGroup>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px', borderBottom: 'none' }}>
            <Col sm='12' md='12' lg='12' xl='12' style={{ border: '1px solid #444444', borderRadius: '5px' }}>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px' }}>Initial Margin</div></Row>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px', fontSize: '20px', fontWeight: 700, className: '#2c1e1f' }}>{margin}%</div></Row>
              <Row>
                <ButtonGroup style={{ width: '100%' }}>
                  <Button className='dark border-left-none border-bottom-none' onClick={() => {
                    setGearing(3)
                    setMargin(5)
                  }} outline style={{ padding: '1px 1px 1px 1px' }} active={margin === 5}>
                    5%
                  </Button>
                  <Button className='dark border-left-none border-bottom-none' onClick={() => {
                    setGearing(6)
                    setMargin(10)
                  }} outline style={{ padding: '1px 1px 1px 1px' }} active={margin === 10}>
                    10%
                  </Button>
                  <Button className='dark border-left-none border-bottom-none' onClick={() => {
                    setGearing(9)
                    setMargin(15)
                  }} outline style={{ padding: '1px 1px 1px 1px' }} active={margin === 15}>
                    15%
                  </Button>
                </ButtonGroup>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px' }}>
            <Col sm='12' md='12' lg='12' xl='12' style={{ border: '1px solid #444444', borderRadius: '5px' }}>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px' }}>Premium</div></Row>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px', fontSize: '20px', fontWeight: 700 }}>USDT {Math.trunc(margin * options * currentPrice / 100)}</div></Row>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px' }}>
            <Col sm='12' md='12' lg='12' xl='12' style={{ border: '1px solid #444444', borderRadius: '5px' }}>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px' }}>Time Frame</div></Row>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px', fontSize: '20px', fontWeight: 700 }}>{lifeSpan} min</div></Row>
              <Row>
                <ButtonGroup style={{ width: '100%' }}>
                  <Button color='dark border-left-none border-bottom-none' onClick={() => setLifeSpan(45)} outline style={{ padding: '1px 1px 1px 1px', borderRadius: '0px 0px 0px 5px' }} active={lifeSpan === 45}>
                    45
                  </Button>
                  <Button color='dark border-left-none border-bottom-none' onClick={() => setLifeSpan(75)} outline style={{ padding: '1px 1px 1px 1px' }} active={lifeSpan === 75}>
                    75
                  </Button>
                  <Button color='dark border-left-none border-bottom-none' onClick={() => setLifeSpan(90)} outline style={{ padding: '1px 1px 1px 1px' }} active={lifeSpan === 90}>
                    90
                  </Button>
                  <Button color='dark border-left-none border-bottom-none' onClick={() => setLifeSpan(180)} outline style={{ padding: '1px 1px 1px 1px' }} active={lifeSpan === 180}>
                    180
                  </Button>
                  <Button color='dark border-right-none border-bottom-none' onClick={() => setLifeSpan(480)} outline style={{ padding: '1px 1px 1px 1px', borderRadius: '0px 0px 5px 0px' }} active={lifeSpan === 480}>
                    480
                  </Button>
                </ButtonGroup>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px', marginLeft: '5px', marginRight: '5px' }}>
            <Col sm='6' md='6' lg='6' xl='6' style={{ paddingRight: '3px' }}>
              <Button.Ripple className="call-btn" block color='success' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setTradeType(1)}>{tradeType === 1 && <Check size='1rem' />} &nbsp; Call</Button.Ripple>
            </Col>
            <Col sm='6' md='6' lg='6' xl='6' style={{ paddingLeft: '3px' }}>
              <Button.Ripple className="call-btn" block color='danger' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setTradeType(0)}>{tradeType === 0 && <Check size='1rem' />}&nbsp; Put</Button.Ripple>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px' }}>
            <Col sm='12' md='12' lg='12' xl='12' style={{ border: '1px solid #444444', borderRadius: '5px' }}>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px' }}>Strike Price</div></Row>
              <Row><div style={{ width: '100%', textAlign: 'center', marginTop: '5px', marginBottom: '5px', fontSize: '20px', fontWeight: 700 }}>USDT {currentPrice}</div></Row>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px' }}>
            <Button.Ripple block color='success' onClick={() => tradeCom()}>
              Trade Now
            </Button.Ripple>
          </Row>
        </Col>
      </Row >

      <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)} className="historymodal">
        <ModalHeader toggle={() => setBasicModal(!basicModal)} style={{ backgroundColor: "rgb(35,45,67)" }} tag="h4">Trading History</ModalHeader>
        <ModalBody style={{ backgroundColor: "rgb(35, 45, 65)" }}>
          <div className='demo-inline-spacing'>
            <UncontrolledButtonDropdown>
              <Button outline color='secondary'>
                All Positions
              </Button>
              <DropdownToggle outline className='dropdown-toggle-split' color='secondary' caret></DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='#' tag='a'>
                  Option 1
                </DropdownItem>
                <DropdownItem href='#' tag='a'>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <Table style={{ color: "rgb(220,220,220)" }}>
              <tbody>
                {data.map((dat, i) => {
                  if (dat.isExpired === true) {
                    return (
                      <tr key={i}>
                        <td className='text-nowrap'>{dat.createdAt}</td>
                        <td className='text-nowrap'>
                          BTCUSDT
                          <br />
                          {dat.options} {dat.tradeType ? "CALL" : "PUT"}
                        </td>
                        <td className='text-nowrap'>
                          {dat.result}USDT
                          <br />
                          {dat.outcome ? <i className='fas fa-play rotate0' size='2x'></i> : <i className='fas fa-play rotate1' size='2x'></i>}
                        </td>
                      </tr>
                    )
                  }
                })}

              </tbody>
            </Table>
          </div>
        </ModalBody>
      </Modal>
    </div >
  )
}

export default Statistics