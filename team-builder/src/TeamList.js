import React from 'react';

export default function TeamList(props){
    console.log(props.list, 'props.list')
    return (
        <div>
            {props.list.map(member=>{
                return(
                    <div>
                        <button>Edit</button>
                        <p>Name: {member.name}</p>
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                        
                    </div>
                );
            })}
        </div>
    )
}