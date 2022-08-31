import { Link } from 'react-router-dom';
import {useGlobalContext} from '../../context';
import './card.css';


const Card = (props) => {
    const {data, filteredData} = useGlobalContext();
    let flag = props.flags.svg
    let common_name = props.name.common
    let population = props.population
    let region = props.region
    let capital = props.capital
    let code = props.cca3
    
    function getDataDetailsBy (countryCode){
	const dataDetail = data.filter(
	    (country) => country.cca3 === countryCode
	);
    };
    
    return (
	<article className="col">
	    <div className="card mx-auto my-2">
		<div className="image_container" style={{backgroundImage: `url(${flag})`}}>
		</div>
		<div className="card-body d-flex flex-column justify-content-center pt-1">
		    <Link to={`/detail/${code}`} onClick={() => getDataDetailsBy(code)}>{common_name}</Link>
		    <p className="card-text mt-3 mb-3"><span className="text-capitalize fw-bold me-2">region:</span>{region}</p>
		    <p className="card-text mb-3"><span className="text-capitalize fw-bold me-2">capital:</span>{capital}</p>
		    <p className="card-text"><span className="text-capitalize fw-bold me-2">population:</span>{population}</p>
		</div>
	    </div>
	</article>
    )
};

export default Card;
