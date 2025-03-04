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

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  // console.log("status:",status);
  // console.log("items",items);
  return (
    <div>
      <h1>Todos</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "successded" &&
          todos.map((product) => (
            <TodosCard key={product.id} product={product} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>
      <h1>Users</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "successded" &&
          user.map((product) => (
            <UsersCard key={product.id} product={product} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>
      <h1>Posts</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "successded" &&
          posts.map((product) => (
            <PostsCard key={product.id} product={product} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>
      <h1>Albums</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "successded" &&
          albums.map((product) => (
            <AlbumsCard key={product.id} product={product} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>
      <h1>Comments</h1>
      <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "successded" &&
          comments.map((product) => (
            <CommentsCard key={product.id} product={product} />
          ))}
        {status === "failed" && <p>Failed to load product...</p>}
      </div>
    </div>
  )
}

export default Shop