import React, { useState } from 'react'
import Pagination from './Pagination'
import BlogCard from './BlogCard'
import { useEffect } from 'react'


const Blog = () => {

    const [page, setPage] = useState(1)

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Failed to Fetch Data');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setData(data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setLoading(false);
    //             console.log('Error to fetching Data')
    //         });
    // }, []);




    async function fetchPage(page) {
        // setLoading(true)
        const baseUrl = `https://fakestoreapi.com/products=${page}`;
        const response = await fetch(baseUrl);
        const data = await response.json();
        setData(data);
        // console.log('not fetch',data)
        // setLoading(false)
      }
    
      useEffect(() => {
        fetchPage(page);
      }, [page]);




    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <BlogCard data={data}/>
            <Pagination page={page} setPage={setPage} />
        </div>
    )
}

export default Blog