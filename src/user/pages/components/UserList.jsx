import React from 'react';
import UserItem from './UserItem';
import Card from '../../../shared/components/UIElements/Card';
function UserList(props) {
    if (props.items.length === 0) {
        return (
            <div className='container mt-5'>
                <Card>
                    <h2>No users found</h2>
                </Card>
            </div>
        )
    }
    return (
        <div className="list-group">
            {props.items.map(user => (
                <UserItem key={user.id} image={user.image} id={user.id} name={user.name} placeCount={user.placeCount} />
            ))}
        </div>
    );
}

export default UserList;