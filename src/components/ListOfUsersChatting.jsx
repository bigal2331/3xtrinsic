import React from 'react';


const ListOfUsersChatting = ({ users }) => {
    return(
        <div>
            Active Users: {users.map((user) =>  <div key={user.id}>{user.name}</div>)}
        </div>
    );
}

export default ListOfUsersChatting;