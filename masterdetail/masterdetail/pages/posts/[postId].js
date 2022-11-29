import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
function Details({post}) {
  const router =useRouter()
        const postId = router.query.postId
        // console.log(post)
        if (router.isFallback){
          return <h1>Loading....</h1>
        }
  return (

 
    <div className='container mt-16'>
      
       <h1 className='text-3xl mb-8'>Details about {postId}</h1> 

     
      <div key={post.id} className="detailcard bg-gray-300 p-6 ">
        <h1 className='text-3xl font-bold'>{post.title}</h1>
        <p>{post.body}</p>
      </div>
   <nav className='flex gap-x-4 mt-16'>
    <Link href='/' className='py-2 px-4 bg-pink-800 text-white rounded-md'>Home</Link>
    <Link href='/posts' className='py-2 px-4 bg-pink-800 text-white rounded-md'>Posts list</Link>
    </nav>
    </div>
  )
}

export default Details


export async function getStaticPaths(){
  return{
    paths:[
      {
        params:{
          postId:'1'
        },
        params:{
          postId:'2'
        },
      }
    ],
    fallback:true,
  }
}



export async function getStaticProps(context){
  const {params} = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await response.json()

return{
  props:{
    post: data
  }
}
}