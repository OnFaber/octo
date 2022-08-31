import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {useGlobalContext} from './context.js'
import Homepage from './pages/home/Homepage';
import Detail from './pages/detailpage/Detail';


function  App() {
    const {data, setData, filteredData, setFilteredData} = useGlobalContext();

    // const getCode = (code) => {
    // 	const match = filteredData.filter((country) => country.cca3 === code);
    // 	return match[0]?.name.common;
    // }

    return (
	<BrowserRouter>
	    <Routes>
		<Route exact path='/' element={<Homepage/>}/>
		<Route path='/detail/:code' element={<Detail/>}/>
	    </Routes>
	</BrowserRouter>
    )
}

export default App;
