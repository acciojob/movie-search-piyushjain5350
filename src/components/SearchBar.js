// import React, { useState,useEffect} from "react";
// import axios from 'axios';

// const SearchBar = ({setData}) => {
//   const [searchVal, setSearchVal] = useState("");

// //   useEffect(()=>{
// //     fetchMovies();
// //     setSearchVal('');
// //   },[])

//   function fetchMovies(event) {
//     event.preventDefault();
//     const API_KEY="4f13d546";

//     axios.get('http://www.omdbapi.com',{
//         params:{
//             apikey:API_KEY,
//             s:searchVal,
//         }
//     })
//     .then(res=>{    
//         // console.log(res.data.Search);
//         setData(res.data.Search);
//     })
//     .catch(err=>console.log(err));

//   }
//   return (
//     <div className="searchClass">
//       <h1>Search Movies</h1>

//       <form onSubmit={fetchMovies}>
//         <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
// import { data } from 'cypress/types/jquery';
import React, { useState } from 'react'

 const SearchBar = () => {

   const[input , setInput] = useState("")
   const[movieArray , setMovieArray] = useState([])
   const[boolean , setBoolean] = useState("")
    let ApiKey = "e27ab7d6";
    
    function fetchData(e){
        e.preventDefault()
         fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${input}` , {
           method:'GET',
           }).then(response => response.json())
             .then(data =>{
                 
                 setBoolean(data.Response)
                 setMovieArray(data.Search)
                 console.log(movieArray)
             })
             .catch(err=>console.log(err));
    }
    
  return (
    <div>
      <h1> Search Movie</h1>
      <form onSubmit={fetchData}>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
      <ul>
      {
       
       (boolean === "True")  &&  movieArray.map(Element=>(
            <li>{Element.Title}
             <img  src= {Element.Poster}  />
            </li>
            
        ))
      }
      </ul>
      
        {
        (boolean === "False") && <h2 className='error'>Invalid movie name. Please try again.</h2>
        }
    </div>
  )
}

export default SearchBar