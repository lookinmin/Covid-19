import React, {useState, useEffect} from 'react'
import store from '../store';

const Header = () => {
  const selectList = ["국내","미국"];
  const [selected, setSelected] = useState("");

  useEffect(()=>{store.dispatch({type : 'KOREA'})}, []);

  const handleSelect = (e) => {
    setSelected(e.target.value);
    if(e.target.value === "국내"){
      ChangeKorea();
    }
    else{
      ChangeUs();
    }
  }

  const ChangeKorea = () =>{
    return(
      store.dispatch({type : 'KOREA'})
    )
  }

  const ChangeUs = () => {
    return(
      store.dispatch({type : 'US'})
    )
  }

  return (
    <header className='header'>
      <h1>COVID-19</h1>
      <select onChange={handleSelect}  value={selected}>
        {selectList.map((item)=>(
          <option value = {item} key={item}>{item}</option>
        ))}
      </select>
    </header>                            
  )
}

export default Header
