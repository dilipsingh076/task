import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "./AddEdit.css"

const initialstate = {
  companyid: "L",
  name: "",
  email: "",
  message: "",
  time: "",

}



export default function AddEdit() {
  const [state, setState] = useState(initialstate)
  const { companyid, name, email, time, message } = state;
  const navigate = useNavigate()

  const { id } = useParams();






  useEffect(() => {
    if (id) {
      getSingleUser(id)
    }
  }, [id])


  const getSingleUser = async (id) => {
    const res = await axios.get(`http://localhost:5050/users/${id}`);
    if (res.status === 200) {
      setState({ ...res.data[0] })
    }
  }



  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value })
  }

  const updateData = async (data, id) => {
    const res = await axios.put(`http://localhost:5050/user/${id}`, data);
    if (res.status === 200) {

      toast.success(res.data)
    }
  }
  const addUser = async (data) => {
    const res = await axios.post("http://localhost:5050/user", data);
    if (res.status === 200) {
      toast.success(res.data)
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    if (!name || !email || !message || !time) {
      alert("please provide value into each input field")
    }

    else {
      if (!id ) {        
        addUser(state);
      }
      else if (id && companyid) {
        updateData(state, id);
      }
      else {
        alert("user already exists")
      }
      setTimeout(() => {
        navigate("/")
      }, 500);

    }



  }
  return (
    <div>
      <h2>Edit page</h2>
      <div className='formdiv' style={{}} >
        <form onSubmit={handleSubmit} >

          <label className='inputlabel' > Server ID</label>
          <input type='text' id="id" name="id" placeholder='id' onChange={handleInputChange} value={id} />
          <label className='inputlabel' > company ID</label>
          {/* <span style={{marginLeft:"-3em",marginRight:"10em"}}>L<input onChange={handleInputChange} value={companyid} type="text" name="companyid" /></span> */}
          <input type='text' maxLength={6} minLength={6} id="companyid" name="companyid" placeholder='company id' onChange={handleInputChange} value={companyid} />
          <label className='inputlabel' >Name</label>
          <input required type='text' id="name" name="name" placeholder='Enter Name' onChange={handleInputChange} value={name} />
          <label className='inputlabel' >Email address</label>
          <input required type='email' id="email" name="email" placeholder='Enter email' onChange={handleInputChange} value={email} />
          <label className='inputlabel'>Time (in hours) </label>

          <input required type='text' id="time" name="time" placeholder='Enter time' onChange={handleInputChange} value={time} />
          <label className='inputlabel' >Message</label>
          <input required type='text' id="message" name="message" placeholder='Enter message' onChange={handleInputChange} value={message} /> <br />
          <input className='button' type='submit' value={id ? "update" : "add"} /> <br />

        </form>
      </div>




    </div>
  )
}
