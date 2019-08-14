import React, { useState } from "react";

export default function FormData(props){
    const [memberInfo, setMemberInfo] = useState({
        name: '',
        email: '',
        role: ''
    });

    function memberForm(event){
        setMemberInfo({...memberInfo,[event.target.name]: event.target.value})
    }
    const submitMember = event => {
        event.preventDefault();
        const newMember ={...memberInfo}
        props.addMember(newMember);
    }
    return (
        <form onSubmit={submitMember}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' onChange={memberForm} value={memberInfo.name}/>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' onChange={memberForm} value={memberInfo.email}/>
            <label htmlFor='role'>Role</label>
            <select name='role' onChange={memberForm} value={memberInfo.role}>
                <option value='backend engineer'>backend engineer</option>
                <option value='frontend engineer'>frontend engineer</option>
                <option value='designer'>designer</option>
                <option value='CEO'>CEO</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
    )
}