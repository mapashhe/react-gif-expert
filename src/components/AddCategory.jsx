import { useState } from "react";

export const AddCategory = ( {onNewCat, setCategories} ) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //con este se previene que al darle submit al form reinicie la pagina
        if( inputValue.trim().length <=2 ) return;
        onNewCat(inputValue);   //esta es la otra forma de hacerloi
        // setCategories( (categories) => [inputValue, ...categories]); //aqui el callback apunta a la variable categorias, linkada a setCategories por el state
        setInputValue('');
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }> 
        <input  
            type="text"
            placeholder="Buscar GIF"
            value={ inputValue }
            onChange={ onInputChange }
            />
    </form>
  )
}
