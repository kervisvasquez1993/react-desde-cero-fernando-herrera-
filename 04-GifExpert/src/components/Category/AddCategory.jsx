import React, {useState, useEffect} from 'react'
import { GifEffectApp } from '../../helpers/GifEffectApp';
const AddCategory = ({addCategory}) => {
  const [inputValue, setInputValue] = useState([])
  const onInputChange = (e) =>  setInputValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault()
    addCategory(inputValue)
    setInputValue('')
  }
  
  return (
      <form action="" onSubmit={(e) => onSubmit(e)}>
          <input
              type="text"
              placeholder="buscar gif"
              value={inputValue}
              onChange={onInputChange}
          />
          <input type="submit" value={"Add Category"} />
      </form>
  );
}

export default AddCategory