'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUserPage = () => {
  const router = useRouter();
    return (
    <div>
        <h1>
        NewUserPage
        </h1>
        <button className='btn btn-secondary'
        onClick={()=> router.push('/users') }>Create User</button>
    </div>
  )
}

export default NewUserPage
  