// Write your JS code here
import './index.css'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="button-container">
      <button type="button" className="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
