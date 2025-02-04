import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addtoDb';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const ListedBooks = () => {

    const [sort, setSort] =useState('');

    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    // Ideally we will directly get the  read book list from the database;
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))

        // worst way

        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList);
    }, []);

    const handleSort =sortType => {
        setSort(sortType);

        if(sortType ==='Number of Pages'){
            const sortedReadList =[...readList].sort((a, b) => b.totalPages - a.totalPages) 
            setReadList(sortedReadList);
        }
        if(sortType ==='Ratings'){
            const sortedReadList =[...readList].sort((a, b) => b.rating - a.rating)
            setReadList(sortedReadList);
        }
    }
    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books : {readList.length}</h3>

            <details className="dropdown">
                <summary className="btn m-1"> {sort? ` Sort By : ${sort}` : 'Sort By'}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort('Ratings')}>Ratings</a></li>
                    <li><a onClick={() => handleSort('Number of Pages')}>Number of Pages</a></li>
                </ul>
            </details>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    readList.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel className={'text-3xl'}>
                    <h2>Books I read</h2>
                </TabPanel>
                <TabPanel className={'text-3xl'}>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;