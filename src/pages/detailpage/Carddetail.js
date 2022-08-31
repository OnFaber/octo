import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {useGlobalContext} from '../../context';
import './carddetail.css';


const Carddetail = (props) => {
    const {data} = useGlobalContext();

    let common_name = props.name.common;
    let flag = props.flags.svg
    let language = props.languages? Object.values(props.languages) : 'Mammt';
    let currencie = props.currencies ? Object.values(props.currencies)[0].name : 'Mammt';

    function getDataDetailsBy (countryCode){
	data.filter((country) => country.ccn3 === countryCode);
    };
    
    return (
	<article className="container-fluid">
	    <div className="details-container">
		<div className="flag-container">
		    <img alt={`flag of ${common_name}`} src={flag}/>
		</div>
		<div className="info-container">
		    <h3>{common_name}</h3>
		    <p><span className="fw-bold me-2">region:</span>{props.region}</p>
		    <p><span className="fw-bold me-2">capital:</span>{props.capital}</p>
		    <p><span className="fw-bold me-2">population:</span>{props.population}</p>
		    <p><span className="fw-bold me-2">subregion:</span>{props.subregion}</p>
		    <p><span className="fw-bold me-2">top level domain:</span>{props.tld}</p>
		    <p><span className="fw-bold me-2">languages:</span>{language}</p>
		    <p><span className="fw-bold me-2">currencies:</span>{currencie}</p>
		    <div>
			<p><span className="d-block">borders:</span> 
			{props.borders?.map((border) => {
			    return (
				<Link to={`/detail/${border}`}
				      key={border.toString()}
				      onClick={(e) => {getDataDetailsBy(border)}}>
				    <button className='btn'>
					{border}
				    </button>
				</Link>
			    )
			})}
			</p>
		    </div>
		</div>
	    </div>
	</article>
    )		  
};

export default Carddetail;
