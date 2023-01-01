import { useState } from 'react';
import AddCategory from './components/Category/AddCategory'
import Error from './components/Message/Error';
import ListCategory from './components/Category/ListCategory'
import './App.css'
import { GifEffectApp } from './helpers/GifEffectApp';

function App() {
 const [ categories, setCategories] = useState(['One Punch'])
 let error  = false
 let message = "";
const addCategory = (elementNew) => {
  if(categories.includes(elementNew)){
    error = true
    message = `el valor ${elementNew} ya esta registrado en la lista del formulario`;
    
  }else{
    
    setCategories([ elementNew, ...categories,])
    error = false;
    message = "";
  }
 
  GifEffectApp("goku");
}
  return (
      <>
          <h1>Gif Expert</h1>
          {(error) && console.log("hola") }
          <AddCategory addCategory={addCategory}/>
          <ListCategory categories={categories}/>
         
         
      </>
  );
}

export default App
