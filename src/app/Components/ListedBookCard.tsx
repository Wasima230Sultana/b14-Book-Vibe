
import { IBook } from '../Type/type';
import Image from 'next/image';


const ListedBookCard = ({book}:{book:IBook}) => {
    const {bookId,bookName,author,totalPages,image,yearOfPublishing,rating}= book;
    return (
 <div className="card card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-base-200">
  
  {/* Book Image */}
  <figure className="w-40 sm:w-48 shrink-0">
    <Image
      src={image}
      alt={bookName}
      width={300}
      height={400}
      className="h-full w-full object-cover"
    />
  </figure>

  {/* Card Content */}
  <div className="card-body p-5">
    
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
        Book
      </p>

      <h2 className="card-title text-xl font-bold">
        {bookName}
      </h2>

      <p className="text-sm text-base-content/60 mt-1">
        By <span className="font-medium text-base-content">{author}</span>
      </p>
      <p className="text-sm text-base-content/60 mt-1">
        Publish Year :  <span className="font-medium text-base-content">{yearOfPublishing}</span>
      </p>
      <p className="text-sm text-base-content/60 mt-1">
        Pages : <span className="font-medium text-base-content">{totalPages}</span>
      </p>
    </div>

    {/* Rating */}
    <div className="flex items-center gap-2 mt-2">
      <div className="rating rating-sm">
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
          aria-label="1 star"
        />
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
          aria-label="2 stars"
        />
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
          aria-label="3 stars"
        />
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
          aria-label="4 stars"
          defaultChecked
        />
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
          aria-label="5 stars"
        />
      </div>

      <span className="text-sm text-base-content/60">
        {rating}
      </span>
    </div>

  </div>
</div>
    );
};

export default ListedBookCard;