import "./App.css";
import { useState } from "react";
import { data } from "./data.js";

function CompSlides(){

    const [ myBook, setMybook] = useState(0);//мы хотим показать сначала только первую книгу
    //поэтому пишем useState(0), а не useState(data)
    const { bookName, bookAuthor, pic } = data[myBook]; // console.log(data[myBook])

    //клик по кнопке PREVIOUS
    const previousBook = () =>{
        setMybook((book =>{
            book --;
            if(book<0){ //если порядковый номер элемента  станет меньше нуляЮ то
                book= data.length-1 //тогда перейди на фото, где длина массива -1
            }
            return book
        }))
    }

    //клик по кнопке NEXT
    const nextBook =()=>{
        setMybook((book=>{
            book++;
            if(book>data.length-1){ //если элемент массива станет равным числу длина массива-1, то
                book=0 //начни с нулевого элемента снова
            }
            return book
        }))
    }

    return(
        <div className="slides" >
            <div >
                <button onClick={previousBook} >previous</button>
            </div>

            <div className="slidesPics" >
            <div>
                <h2> "{ bookName }" </h2>
            </div>

            <div>
                <h3> { bookAuthor } </h3>
            </div>

            <div>
                <img src={pic} width="300px" alt="old" />
            </div>
            </div>

            <div>
                <button onClick={nextBook} >next</button>
            </div>

        </div>
    )
}

export default CompSlides;