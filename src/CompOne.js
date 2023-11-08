import './App.css';
import { useState  } from 'react';
import { data } from './data';

function CompOne() {

    const [ books, setBooks ] = useState(data)

  //для работы с filter() мы создаем результат действия. Сам массив остается без изменений
  //логика filter() при удалении такая:
  //если у нас id книги не равен id книги, на которую мы кликаем, помещай это в результат filter()
  //то есть в результат newBooks попадает только то, на что мы НЕ кликнули

    const removeBook = (id) => {
    let newBooks = books.filter( book => book.id !== id); //то есть в результат newBooks попадает только то, на что мы НЕ кликнули
    setBooks(newBooks)    //отображаем новое состояние
    }

    return (
    <div className='container'> 

    <div>
        <h2>List of my {books.length} books </h2> 
    </div>

    <div className='container' >

    { books.map( book => {
        const {id,bookName,bookAuthor,pic} = book;
        return(
            <div key={id}> 
                <p> {id}. "{bookName}"</p> 
                <p> {bookAuthor} </p>
                <img src={ pic } width="300px" alt="pic" />
                <div className='container'>
                    <button onClick={ ()=> removeBook(id) } >remove</button> 
                </div>
            </div> 
        )
        } ) }

    </div>

    <div>
    <button onClick={ ()=> setBooks( [] ) }> CLEAR ALL </button>
    </div>
    
    </div>
    );
}

export default CompOne;