import React, { useState } from 'react'

function User() {

    const [user,setUser] = useState({
        name : '',
        mobile : '',
        email : '',
        address : ''
    });

    const handleChange = (e)=>{
        const{name,value} = e.target;
        setUser({...user,[name]: value});
    }

    const  handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user)
        if(user.name === ''){
            alert("Please Fill The Form")
        }else{
            const{name,mobile,email,address} = user;
            const res = fetch("https://user-data-9b105-default-rtdb.firebaseio.com/userdata.json",
        {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                name,
                mobile,
                email,
                address
                
            }),           
            
        })
        alert("Form submited successfully...!")
        setUser({
            name : '',
            email : '',
            mobile : '',
            address : ''
        })       
        }    
    }
  return (
    <div className='col-md-6 offset-md-3'>
        <div className='card m-5 w-75'>
            <div className='card-body'>
                <h4>User Data</h4>
                <form action="" className='form-group ' >
                    <label htmlFor="">Name </label>
                    <input type="text" name='name' className='form-control' onChange={(e)=>handleChange(e)} value={user.name} />
                    <label htmlFor="">Mobile </label>
                    <input type="number" name='mobile' className='form-control' onChange={(e)=>handleChange(e)} value={user.mobile}/>
                    <label htmlFor="">E-Mail </label>
                    <input type="email" name='email' className='form-control' onChange={(e)=>handleChange(e)} value={user.email}/>
                    <label htmlFor="">Address </label>
                    <input type="text" name='address' className='form-control' onChange={(e)=>handleChange(e)} value={user.address}/>
                </form>
            </div>
            <div className='card-footer'>
                <input type="submit"onClick={(e)=>{handleSubmit(e)}} className='btn btn-outline-success' value='Submit' />
            </div>
        </div>       
    </div>
  )
}

export default User