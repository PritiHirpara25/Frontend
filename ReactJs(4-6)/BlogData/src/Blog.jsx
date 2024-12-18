import React, { useState } from 'react'
import Pagination from './Pagination'
import BlogCard from './BlogCard'
import { useEffect } from 'react'


const Blog = () => {

    const [page, setPage] = useState(1)

    const [data, setData] = useState([])

    // useEffect(() => {
    //   fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(res => setData(res))
    //     // console.log(data)
    // },[])

    // // console.log(data);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch blogs");
            }
            return response.json();
          })
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.error("Error fetching blog data:", error);
          });
      }, []);

    return (
        <div>
            <BlogCard data={data}/>
            <Pagination page={page} setPage={setPage} />
        </div>
    )
}

export default Blog