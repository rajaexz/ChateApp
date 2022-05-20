import React from "react";
import ReactDOM from "react-dom";
import SearchIcon from "./search.svg";
import { useState, useEffect } from "react";
import "./App.css";
import MoiveComp from "./MovieComp";


//make component
// movie api :http://www.omdbapi.com/?i=tt3896198&apikey=549112d4

const API_URL = 'https://www.omdbapi.com/?apikey=549112d4';

const App = () => {
    // const [count , setcount] = useState(1);
    //next useState we are using \
    //  var raja = count;
    
    const [movies,setMovie] = useState([]);
    //fatch movie api data
    const [searchTeam,setsearchTeam] = useState('');
    const search = async (title) => {
        const respons = await fetch(`${API_URL}&s=${title}`);
        const data = await respons.json()
     setMovie(data.Search);
    }
  
    useEffect(() => {
        search('new');
    }, [])
 
    return (
        <div className="app">
          <h1>MovieLand</h1>
    
          <div className="search">
            <input
            value={searchTeam}
            
             onChange={(e)=>{setsearchTeam(e.target.value) 
            
            }}
              placeholder="Search for movies"
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={()=>search(searchTeam)}
            />
          </div>
       
          {movies.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MoiveComp movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      );
    };

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)