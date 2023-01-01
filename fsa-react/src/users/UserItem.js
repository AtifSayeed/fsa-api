import React from 'react'

const UserItem = ({user}) => {
  return (
    <div>
    <img className="img img-thumbnail m-3" src= {user.avatar_url} width='150' height='100' alt="user"/>
     <h4 className="m-3">{user.login}</h4>
     <hr className='m-3'/>
     </div>
  )
}

export default UserItem
