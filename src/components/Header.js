import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className= {`navbar-brand ${props.back}`} onClick={() => navigate(-1)}><FontAwesomeIcon icon={faAngleLeft} size="lg" /></a>
      <a className="navbar-brand">Corona Virus</a>
      <div>
      <a className="navbar-brand"><FontAwesomeIcon icon={faMicrophone} size="lg" /></a>
      <a className="navbar-brand"><FontAwesomeIcon icon={faCog} size="lg" /></a>
      </div>
    </div>
    </nav>
    <div className ="container-fluid">
        <div className="row">
        <img className ="imageLanding" src ="landing.jpeg"/>
        </div>
    </div>
    </div>
  );
};

export default Header;