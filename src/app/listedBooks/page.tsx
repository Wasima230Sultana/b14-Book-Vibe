'use client'
import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import { IBook } from '../Type/type';
import ListedBookCard from '../Components/ListedBookCard';

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BookContext);
    const [sortBy,setSortBy] = useState<"rating"|"year"|"pages">("rating")    
    const sortBooks=(books:IBook[])=>{
        const sortedBooks = [...books]
        if(sortBy === "rating"){
            sortedBooks.sort((a,b)=>b.rating - a.rating)
        }
        else if(sortBy === "year"){
            sortedBooks.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing)
        }
        else if(sortBy === "pages"){
            sortedBooks.sort((a,b)=>b.totalPages - a.totalPages)
        }
        return sortedBooks
    }
    const sortedReadBooks = sortBooks(readBooks)
    const sortedWishlist = sortBooks(wishlist)

    return (
        <div>
            <h2 className='font-bold text-4xl text-center py-10 bg-amber-200'>Listed Books</h2>
            <div className='text-center'>
                <select
                value={sortBy}
                onChange={(e)=>setSortBy(e.target.value as "rating"|"year"|"pages")}
                //  defaultValue="Pick a Runtime" 
                 className="select select-success my-4">
                    <option disabled={true}>Sort by</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"year"}>Published Year</option>
                    <option value={"pages"}>Number of pages</option>
                </select>
            </div>

            <div>
                <div className="tabs tabs-lift">
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab"
                        aria-label={`Wishlist books (${readBooks.length})`} />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                  
                        {
                            sortedReadBooks.length == 0 ?
                                (<p className="text-center text-lg font-semibold">
                                    No read books found
                                </p>)
                                :
                                (sortedReadBooks.map((book: IBook, idx: number) =>
                                    <ListedBookCard
                                        key={idx}
                                        book={book}
                                    ></ListedBookCard>))
                        }

                    </div>

                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab"
                        aria-label={`Wishlist books (${wishlist.length})`}
                        defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            sortedWishlist.length == 0 ?
                                (<p className="text-center text-lg font-semibold">
                                    No wishlist books found
                                </p>)
                                :
                                (sortedWishlist.map((book: IBook, idx: number) =>
                                    <ListedBookCard
                                        key={idx}
                                        book={book}
                                    ></ListedBookCard>))
                        }
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ListedBooks;