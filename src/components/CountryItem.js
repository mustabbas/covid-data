import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const CountryItem = (props) => {
  const image = { width: '100%', height: '150px' };
  return (
    <Link to={'/Detail'} state= {{ country: props.country }} >
       <div className="card bg-dark text-white mb-3">
        <img src={props.flag} className="card-img flag" alt="..." />
        <div className="card-img-overlay">
            <h5 className="card-title">{props.country}</h5>
        </div>
        </div>
    </Link>
  );
};

export default CountryItem;