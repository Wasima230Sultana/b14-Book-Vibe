'use client'

import { BookContext } from "@/app/context/BookContext";
import { IBook } from "@/app/Type/type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({book}:{book:IBook}) => {
    const { wishlist,setWishlist } = useContext(BookContext);
const handleWishList =()=>{
setWishlist([...wishlist, book])
toast.success(`You have read "${book.bookName}"`);
}
    return (
        <div>
         <button onClick={()=>handleWishList()} className="btn btn-outline btn-primary">
        📚 Wish List
      </button>
        </div>
    );
};

export default WishlistButton;