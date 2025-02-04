
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addtoDb';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    console.log(book)

    const { bookId: currentBookId, author, image, review, publisher, bookName,
        category, rating, totalPages } = book;

        const handleMarkAsRead =(id) =>{


            /*
            1. understand what to store or save => bookId
            2. where to store : database
            3. array, list, collection:

            4. check the book is the already in booklist;
            5. if not: then add the book list 
            6. if yes: do not add the bookList
            */

            addToStoredReadList(id)
        }

    return (
        <div>
            <h2>Book Details: {bookId}</h2>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className='max-w-sm rounded-lg shadow-2xl' />
                    <div className='space-y-3'>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p>By: {author}</p>
                        <div className="divider"></div>
                        <p>{category}</p>
                        <div className="divider"></div>
                        <p> <span className='text-2xl font-bold'>review:</span> {review}</p>
                        <p>Number of pages : {totalPages}</p>
                        <div className='space-x-4'>
                            <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline btn-accent">Mark as Read</button>
                            <button className="btn btn-info"> Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;

