'use client'

import { createContext, ReactNode, useState } from "react";
import { IBook } from "../Type/type";

interface IBookContext{
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}
export const BookContext = createContext<IBookContext>({
      readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
})
const BookProvider = ({children}:{children:ReactNode}) => {
    const [readBooks,setReadBooks] = useState<IBook[]>([]);
    const [wishlist,setWishlist] = useState<IBook[]>([]);


    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist

    }
    return (
       <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
    );
};

export default BookProvider;