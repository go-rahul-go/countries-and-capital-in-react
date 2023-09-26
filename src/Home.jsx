import React, { useEffect, useState } from 'react'

const Home = () => {
    const [countriesList,setContriesList]=useState([])
    const countries = async()=>{
        let resp= await fetch("https://restcountries.com/v3.1/all");
        let result= await resp.json();
        setContriesList(result)
    }
    useEffect(()=>{
        countries();
        
    },[])
  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Continent</th>
            <th>flag</th>
          </tr>
        </thead>
        <tbody>
        {
            countriesList.map((country)=>{
                console.log(country)
                return(
                        
                      <tr>
                        <td className='country'>{country.name.common}</td>
                        <td className="capital">{country.capital}</td>
                        <td>{country.continents}</td>
                        <td className="flag-td"><img src={country.flags.png} className="flags"/></td>
                      </tr> 
                    
                )
            })
        }
        </tbody>
        </table>
        
    </div>
  )
}

export default Home