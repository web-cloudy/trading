import '@styles/base/pages/page-auth.scss'
import { Table, Row, Col } from 'reactstrap'
//eslint-disable-next-line

const Products = () => {
  return (
    <div className='auth-wrapper auth-v2' style={{ flexDirection: 'column' }}>
      <Row style={{ width: '100%', marginLeft: '0', marginRight: '0', display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(36, 43, 63)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ width: '1000px' }}>
          <img src='/banners/2.png' style={{ width: '100%' }} />
        </div>
      </Row>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto' }}>
        <Col className='d-none d-flex align-items-center p-5' lg='12' md='12' sm='12'>
          <div className='w-100 align-items-center justify-content-center px-5'>
            <h1 className="font-weight-bold pt-2 pb-2">Fynance Return Multiplier Options</h1>
            <h3 className="font-weight-bold pt-1 pb-1">What are they and how do they work?</h3>
            <h5 className='pl-2'>Fynance Return-Multiplier Options combine the upside of leverage trading with the limited risk of options. This means that when the market moves in your favour, you'll multiply your potential profits. If the market moves against your prediction, your losses are limited only to the price you have paid for your option(s).</h5>
            <h5 className='pl-2'>Fynance Options are European-style options that auto-exercise at the expiry date.
              Fynance Options are cash-settled, and therefore, the physical delivery of the underlying asset is not required.</h5>
            <h5 className='pl-2'>In contrast to traditional options, Fynance Options offers a shorter time frame ranging from 45 mins to 8 hours expirations. Fynance Options comes with only one strike price, which is equivalent to the contract price on Fynance Futures. In other words, Fynance Options are always "at-the-money".</h5>
            <h5 className='pl-2'>You can only be a buyer of Fynance Options as Fynance is the sole issuer (option seller). Therefore, there is no order book for Fynance Options. As an option buyer, the maximum loss for an options contract is the premium you paid. In this case, your breakeven point is the Strike Price +/- the Premium (depending on whether it is a call or a put contract).</h5>
            <Row>
              <Col sm='0' md='1' lg='2' xl='3' />
              <Col sm='12' md='10' lg='8' xl='6'>
                <Table bordered responsive className='table-border table-hover-animation' responsive>
                  <thead>
                    <tr>
                      <th>Option Contract</th>
                      <th>BTCUSDT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Underlying Asset</td>
                      <td>Bitcoin</td>
                    </tr>
                    <tr>
                      <td>Contract Size</td>
                      <td>1 Bitcoin</td>
                    </tr>
                    <tr>
                      <td>Minimum Trade</td>
                      <td>1 option</td>
                    </tr>
                    <tr>
                      <td>Maximum Trade</td>
                      <td>28 options</td>
                    </tr>
                    <tr>
                      <td>Strike Price</td>
                      <td>The Price of Entry When Trade is Placed </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <h3 className="font-weight-bold pt-1 pb-1">Premium / Profit</h3>
            <h5 className='pl-2'>The premium is first deducted from your Fynance Vault balance. After that, only profits will be calculated. In rare cases, deducting the premium may cause your options positions to enter liquidation. Therefore, please ensure that you have adequate free margin in your Vault balance before placing an options order.</h5>
            <h5 className='pl-2'>Note that to make a net profit in options trading, the profit must be larger than the premium. Profit will be between 0 to infinity, and the premium is a fixed value you paid before the trade. Thus, options have fixed downside costs that are paid upfront and unlimited upside profits. The net profit for your options trade is (profit - premium).</h5>
            <h3 className="font-weight-bold pt-1 pb-1">Price</h3>
            <h5 className='pl-2'>All trades are executed at market price. There is no guarantee that the price you see on the screen will be the exact price you execute, although it is generally very close. The price of small orders, or orders executed during a 'normal' market (less volatile market), will always be nearly the same, but for large orders, or orders executed during a volatile market, the price may deviate based on the actual order execution.</h5>
            <h3 className="font-weight-bold pt-1 pb-1">Risk Warning</h3>
            <h5 className='pl-2'>There is no guarantee that your options purchase will execute at a profit after deducting the premium. Please enter the market at your own discretion.
              Fynance does not assume any responsibility for any form of capital loss, that occurs on our platform(s).</h5>
            <h3 className="font-weight-bold pt-1 pb-1">Why Return-Multiplier Options Are The Perfect Hedge.</h3>
            <h5 className='pl-2'>Fynance’s proprietary architecture for the option contracts, primarily simplifies options trading to enhance users' trading experience and most importantly it lowers the entry barrier for retail traders.
              There are some advantages to trading Fynance options. Here are the key benefits of trading with Fynance options: Flexibility, short-duration strategies, easy to use, unlimited liquidity, competitive premium pricing, and high leverage with no liquidation risk.</h5>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Products