import ReadListButton from '@/app/Components/ButtonDetails/ReadListButton';
import WishlistButton from '@/app/Components/ButtonDetails/WishlistButton';
import { IBook } from '@/app/Type/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export interface IBookDetails {
  params: Promise<{
    bookId: string
  }>
}
const getBook = async (): Promise<IBook[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
    const data = await res.json()
    return data
  } catch {
    return []
  }

}
const BookDetailsPage = async ({ params }: IBookDetails) => {
  const { bookId } = await params;
  const booksData = await getBook();
  const book = booksData.find((b: IBook) => String(b.bookId) === String(bookId)) as IBook;

  return (
    <div className=" grid grid-cols-2 gap-2 card lg:card-side bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">

      {/* Book Image */}
      <div>
        <figure className=" bg-base-200 p-5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={600}
            height={400}
            className="w-full h-80 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </figure>
      </div>
      <div>
        <div className="card-body">

          {/* Title & Category */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="card-title text-2xl font-bold">
              {book.bookName}
            </h2>

            <span className="badge badge-primary badge-outline">
              {book.category}
            </span>
          </div>

          {/* Author */}
          <p className="text-base-content/70">
            ✍️ By <span className="font-semibold">{book.author}</span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
              />
            </div>

            <span className="font-semibold">
              {book.rating}
            </span>

            <span className="text-sm text-base-content/60">
              / 5
            </span>
          </div>

          {/* Review */}
          <p className="text-base-content/80 line-clamp-2">
            {book.review}
          </p>

          {/* Book Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-3">

            <div className="bg-base-200 rounded-lg p-3">
              <p className="text-xs text-base-content/60">Pages</p>
              <p className="font-bold">
                {book.totalPages}
              </p>
            </div>

            <div className="bg-base-200 rounded-lg p-3">
              <p className="text-xs text-base-content/60">Published</p>
              <p className="font-bold">
                {book.yearOfPublishing}
              </p>
            </div>

            <div className="bg-base-200 rounded-lg p-3">
              <p className="text-xs text-base-content/60">Publisher</p>
              <p className="font-bold truncate">
                {book.publisher}
              </p>
            </div>

          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-ghost"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="card-actions justify-end mt-4">

            <ReadListButton book={book}></ReadListButton>

            <WishlistButton book={book}></WishlistButton>

          </div>

        </div>
      </div>

      {/* Book Information */}

    </div>


  );
};

export default BookDetailsPage;