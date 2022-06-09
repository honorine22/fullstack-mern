import React from 'react';
import Card from '../../../shared/components/UIElements/Card';
import { Link } from 'react-router-dom';
import Avatar from '../../../shared/components/UIElements/Avatar';
function UserItem(props) {
    return (
        <li className='user-item pt-2 d-flex'>
            <Card className="card rounded-lg border-primary">
                <Link to={`/${props.id}/places`} className="text-black">
                    <div className='row p-2'>
                        <div className="col-4">
                            <Avatar width="100px" height="100px" className="card-img-top rounded-circle"
                                src={props.image}
                                alt="Billybobjoe" />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <p className="card-title">{props.name}</p>
                                <p className="card-text">
                                    {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </Card>
        </li>
    );
}

export default UserItem;