import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/ProductSlice'
import TodosCard from '../Component/TodosCard' 
import UsersCard from '../Component/UsersCard'
import PostsCard from '../Component/PostsCard'
import AlbumsCard from '../Component/AlbumsCard'
import CommentsCard from '../Component/CommentsCard'

const Shop = () => {

  const dispatch = useDispatch()

  const { status, todos, user, posts, albums, comments } = useSelector((state) => state.product);
  // console.log(todos)
  // console.log(user)
  // console.log(posts)
  // console.log(albums)
  // console.log(comments)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])
  

  return (
    <div>

      <h1 className='p-3 bg-gray-400 text-lg'>Todos</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "succeeded" &&
          todos.map((todos) => (
            <TodosCard key={todos.id} todos={todos} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>

      <h1 className='p-3 bg-gray-400 text-lg'>Users</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "succeeded" &&
          user.map((user) => (
            <UsersCard key={user.id} user={user} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>

      <h1 className='p-3 bg-gray-400 text-lg'>Posts</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "succeeded" &&
          posts.map((posts) => (
            <PostsCard key={posts.id} posts={posts} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>

      <h1 className='p-3 bg-gray-400 text-lg'>Albums</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "succeeded" &&
          albums.map((albums) => (
            <AlbumsCard key={albums.id} albums={albums} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>

      <h1 className='p-3 bg-gray-400 text-lg'>Comments</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "succeeded" &&
          comments.map((comments) => (
            <CommentsCard key={comments.id} comments={comments} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>
    </div>
  )
}

export default Shop