import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'ska']);

  
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }



  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory onNewCat={ (newval) => onAddCategory(newval) } />
    {/* <AddCategory setCategories={ setCategories } /> */}
      { 
        categories.map( categoria => (
          <GifGrid 
            category={categoria} 
            key={categoria} />
        ))
      }
    </>
  )
}
