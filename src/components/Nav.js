import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate() 
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate('/ticket')}>+</div>
        <div className="icon" onClick={() => navigate('/')}>&#8249;	&#8249;</div>
      </div>
    </nav>
  )
}

export default Nav