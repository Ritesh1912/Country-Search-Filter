import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi'
import Loader from '../UI/Loader';
import CountryCard from '../components/Layout/CountryCard';
import SearchFilter from '../UI/SearchFilter';
import { FiTerminal } from 'react-icons/fi';



const Country = () => {

   const [isPending, startTransition] = useTransition();
   const [countries, setCountries] = useState([]);

  //Search & Filter
  const [search, setSearch] = useState();
  const [filter, SetFilter] = useState("all");  

   useEffect(()=>{
     startTransition(async()=>{
       const res = await getCountryData();
       console.log(res);
       setCountries(res.data);
     });
   },[]);
   
   if(isPending) return <Loader/>

   console.log(search, filter);


   //Main Search Logic Here
   const searchCountry = (country) => {
      if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      }

    return country;
   }

   //Main filter Logic Here
   const filterRegion= (country) =>{
      if(filter === "all") return country; 
      return country.region === filter; 
   }

   const filterCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country));


  return (
    <section className='country-section'>

       <SearchFilter search={search} setSearch={setSearch} filter={filter} SetFilter={SetFilter} countries={countries} setCountries={setCountries}/>

        <ul className='grid grid-four-cols'>
           {
             filterCountries.map((curCountry, index)=>{
                return <CountryCard country={curCountry} key={index}/>
             })
           }
        </ul>
    </section>
  )
}

export default Country;