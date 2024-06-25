import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User{
    id:number;
    name:string;
}

interface Props{
  sortOrder:string;
}

const UserTable = async({sortOrder} : Props) => {
    const res =await  fetch('https://jsonplaceholder.typicode.com/users');
    const users:User[] = await res.json();
    const sorted= sort(users).asc(
      sortOrder==='name'
      ?(user)=>user.name
      :(user)=>user.id
    );
  return (
    <div><h1>
        UserTable
        </h1>
        <Link href='/users?sortOrder=name'>
          Name
        </Link>
        <ul>
            {sorted.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
  )
}

export default UserTable