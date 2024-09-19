import React from 'react';

function Usercard(props) {
    const dob = new Date(props.data.dob.date);
    const formattedDob = `${String(dob.getDate()).padStart(2, '0')}-${String(dob.getMonth() + 1).padStart(2, '0')}-${dob.getFullYear()}`;

    return (
        <div className='main-container'>
            <div className='img-cont'>
                <img className='user-image' src={props.data.picture.large} alt="User profile" />
            </div>
            <h3 className='user-name'>{props.data.name.title} {props.data.name.first} {props.data.name.last}</h3>
            <p><b>Username:</b> {props.data.login.username}</p>
            <p><b>DOB:</b> {formattedDob}</p>
            <p><b>Age:</b> {props.data.dob.age}</p>
            <p><b>Contact Number:</b> {props.data.cell}</p>
            <p><b>Mail id:</b> {props.data.email}</p>
            <p><b>Location:</b> {props.data.location.city}, {props.data.location.state}, {props.data.location.country}</p>

        </div>
    );
}

export default Usercard;
