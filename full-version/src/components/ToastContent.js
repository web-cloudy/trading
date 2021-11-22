import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { Coffee } from 'react-feather'

const ToastContent = ({ success, title, body }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color={success ? 'success' : 'danger'} icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>{title}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>{body}</span>
    </div>
  </Fragment>
)

export default ToastContent