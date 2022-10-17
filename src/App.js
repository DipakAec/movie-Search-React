import Result from "./components/Result";
import axios, { Axios } from "axios";
import {useState ,useEffect } from 'react';
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



function App() {

  const [movies,setMovies] =  useState([1,2,3]);
  const [search,setSearch] = useState("");
  const changeTheSearch = (event) =>{
    //console.log(event.target.value)
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(APIURL)
          .then(
            (response) => {
              setMovies(response.data.results);
             //console.log(response.data.results)
            }
          )
          .catch(
            (error) => {
              //console.log(error)
            }
          )

  }
  const getSearchMovies = () => {
      axios.get(SEARCHAPI + search)
            .then(
              (response)=>{
                setMovies(response.data.results);
              }
            )
            .catch(
              (error)=>{

              }
            )
  }
  useEffect(() => {
    setMovies([]);
    if (search==="") {
        getAllMovies();      
    } else {
        getSearchMovies();
    }
  }, [search]);

  return (
    <>
      <div className="h-[100px] w-full text-center text-4xl p-4 item-center-flex bg-slate-900"><p className="text-white">Movie Search</p></div>
      <div className='max-w-full shadow-xl min-h-[800px] mx-auto p-8 bg-slate-600' >
          
          <input type="search"  value={search} onChange={changeTheSearch} className='w-full border border-white rounded-md text-white  bg-slate-600 p-5 text-2xl' />
          {
            movies.length===0
            ?
            <div className="text-center text-3xl text-white">Loading....</div>
            :
            <Result movies={movies}/>
          }
          

        </div>
    </>
        
     
  );
}

export default App;
