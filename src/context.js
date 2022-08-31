import React, {useContext } from 'react';


const DataContext = React.createContext();
const URL = "https://restcountries.com/v3.1/all"
const DataProvider = ({children}) => {
    const [data, setData] = React.useState([])
    const [filteredData, setFilteredData] = React.useState([])
    
    function SortArray(x, y){
	// order the array in order of countries name
	return x.name.common.localeCompare(y.name.common)
    }

    const getAllData = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	const sortedData = data.sort(SortArray);
	setData(sortedData);
	setFilteredData(sortedData);
    }
    
    React.useEffect(() => {
	getAllData()
    }, []);

    
    return (
	<DataContext.Provider value={{data,
				      setData,
				      filteredData,
				      setFilteredData}}>
	    {children}
	</DataContext.Provider>
    )
}
// custom hook
export const useGlobalContext = () => {
    return useContext(DataContext)
}

export {DataContext, DataProvider};

