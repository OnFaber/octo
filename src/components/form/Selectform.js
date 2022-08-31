import {useGlobalContext} from '../../context';

const Selectform = () => {
    const {data, setData, filteredData, setFilteredData} = useGlobalContext();
    const uniqueRegionArray = [...new Set(data.map((item) => item.region))];
    
    function filterBy(region){
	if (region === 'All'){
	    setFilteredData(data);
	    return
	}
	const newData = data.filter((item) => item.region === region);
	setFilteredData(newData)
    }

    const region = uniqueRegionArray.map((item) => 
	<option	key={item.toString()}
		value={item}>{item}</option>
    )

    return (
	<div className='my-2 mt-3 d-flex align-items-center'>
	    <select className='form-select form-select-sm'
		    onChange={(e) => filterBy(e.target.value)}>
		<option value='All'>All</option>
		{region}
	    </select>
	</div>
    )
};

export default Selectform;

