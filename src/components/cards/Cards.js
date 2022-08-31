import Card from './Card';
import {useGlobalContext} from '../../context';


const Cards = () => {
    const {data, filteredData} = useGlobalContext();
    console.log(data);
    
    const cardList = filteredData.map((item) =>
	<Card key={item.name.common.toString()} {...item}/>
    );    

    return (
	<section className="container">
	    <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
		{cardList}
	    </div>
	</section>
    )
}
export default Cards;
