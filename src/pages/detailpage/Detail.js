import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {useGlobalContext} from '../../context';
import Carddetail from './Carddetail'


const Detail = () => {
    const {data} = useGlobalContext();
    let {code} = useParams();

    const item = data
	  .filter((country) => country.cca3 === code)
	  .map((country) => {
	      return <Carddetail key={country.name.common.toString()} {...country}/>
	  })
    
    console.log(item)
    return (
	<article>
	    {item}
	</article>
    )
}

export default Detail;
