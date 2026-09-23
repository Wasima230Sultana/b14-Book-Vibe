import { IBook } from "@/app/Type/type";
import BookCard from "../Components/BookCard";


const getBook = async (): Promise<IBook[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
        const data = await res.json()
        return data
    } catch {
        return []
    }

}
const BookList = async () => {
    const booksData = await getBook();
    // console.log(booksData)

    return (
        <div>
            <h2 className="text-center my-3 font-bold text-3xl">Books</h2>
            <div className="grid grid-cols-3 gap-2 my-4">
                {
                    booksData.map((book: IBook, index: number) => <BookCard key={index} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BookList;