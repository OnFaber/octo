import {AiOutlineSearch} from 'react-icons/ai';
import {useGlobalContext} from '../../context';


const Searchform = () => {
    const {data, filteredData, setFilteredData} = useGlobalContext();
    
    const handleChange = (searchTerm) => {
	const dataSearched = data.filter((item) =>{
	    return item.name.common.toLowerCase().includes(searchTerm.toLowerCase());
	});
	setFilteredData(dataSearched)
    }
    
    return (
	<div className='input-container input-group my-2'>
	    <label className="input-group-text" htmlFor="search" id="basic-addon1">
		<AiOutlineSearch />
	    </label>
	    <input className="form-control"
		   id="search"
		   name="search"
		   type="search"
		   placeholder="Search for a country..."
		   onChange = {(e) => handleChange(e.target.value)}/>
	</div>
    )
}

export default Searchform;
