import React from 'react'
import Mic from '../images/google-mic.svg.png'
import Cam from '../images/google-cam.svg'
import SearchIcon from '../images/search-icon.png'
import '../styles/main.css'
import {useState} from 'react'

export default function SearchBar() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  function updateInput(e){
    setInput(e.target.value);
  }
  const enterKeyPressed = ({key}) => {
    if (key === "Enter") {
      setList(list => [...list, input])
      setInput ('');
    }
  }
  const Search = ({query}) => <li>{query}</li>
  
  return (
    <div className='input-field'>
      <input id="input-text" onChange={updateInput} type="text" onKeyDown={enterKeyPressed}  style={{width: "550px", height:"45px"}}/>
      <img  className="searchicon" src={SearchIcon} alt="searchicon" style={{width: "15px"}}/>
      <img className="mic" src={Mic} alt="mic" style={{width: "15px"}}/>
      <img className="cam" src={Cam} alt="cam" style={{width: "22px"}}/>
      <div>
        <ul className="oldlist">
          {list.map((query, i)=> (
            <Search query={query}
            key={query + i}/>
          ))}

        </ul>
      </div>
    </div>
  )
}
