import React from 'react'



const SearchFilter = ({search, setSearch, filter, SetFilter, countries, setCountries}) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleSelectChange = (event) => {
      event.preventDefault();
      SetFilter(event.target.value);
  }


  //For Asc & Desc
  const sortCountries = (value) => {
      const sortCountry = [...countries].sort((a,b)=>{
          return value === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
      })
     setCountries(sortCountry); 
  }

  return (
    <section className='section-searchFilter'>
        <input type='text' placeholder='search' value={search} onChange={handleInputChange}/>
         
         <div className='asc'>
            <button onClick={() => sortCountries("asc")}>Asc</button>  
         </div>
         <div className='des'>
            <button onClick={() => sortCountries("des")}>Desc</button>  
         </div>
        <div>
          <select value={filter} onChange={handleSelectChange} className='select-section'>
           <option value="all">All</option>
           <option value="Africa">Africa</option>
           <option value="Americas">Americas</option>
           <option value="Asia">Asia</option>
           <option value="Europe">Europe</option>
           <option value="Oceania">Oceania</option>
          </select>
        </div>
    </section>
  )
}

export default SearchFilter