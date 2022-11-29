import React from 'react'
import Link from 'next/link'
function Master({posts}) {
    // console.log(posts)
  return (
   
    <div className='container mt-16'>
        <Link href='/' className='py-2 px-4 bg-pink-800 text-white rounded-md mb-8'>Home</Link>
        <h1 className='text-3xl font-bold mb-8 pt-8 text-purple-800'>List of posts</h1> 
       <ul>
        {posts.map((post)=>(

      
        <li key={post.id}><Link href={`/posts/${post.id}`}>
        <div className="card bg-gray-100 p-4 mb-4">
        <div className="heading flex gap-2 items-center">
        <small className='text-lg'>{post.id}.</small> <h1 className='text-2xl font-bold' >{post.title}</h1>
        </div>
        {/* <p>llam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit</p> */}
        </div>
        </Link></li>
          ))}
        </ul>
        
    </div>
  )
}

export default Master


export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

return{
    props:{
posts: data
    }
}
}