'use client'

import { BookContext } from "@/app/context/BookContext";
import { IBook } from "@/app/Type/type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadListButton = ({book}:{book:IBook}) => {
    const { readBooks, setReadBooks } = useContext(BookContext);
const handleReadList =()=>{
setReadBooks([...readBooks, book])
   toast.success(`You have read "${book.bookName}"`);
}
    return (
        <div>
         <button onClick={()=>handleReadList()} className="btn btn-outline btn-primary">
        📚 ReadList
      </button>
        </div>
    );
};

export default ReadListButton;