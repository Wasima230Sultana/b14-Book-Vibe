import React from 'react';
import { IBook } from '../Type/type';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({book}:{book:IBook}) => {
    const {bookId,bookName,author,category,image,publisher}= book;
    return (
       <div className="card card-side bg-base-100 shadow-sm">
  <figure>
   <Image src={image} alt='book' width={400} height={400}>

   </Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>{author}</p>
    <div className="card-actions justify-end">
        <Link href={`/books/${bookId}`}>
              <button className="btn btn-primary">Show Details</button>

</Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;