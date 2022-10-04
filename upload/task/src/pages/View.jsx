import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function View() {
  const [user, setuser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getsingleuser(id)
    }
  }, [id])

  const getsingleuser = async (id) =>{
    const res = await axios.get(`http://localhost:5050/user/${id}`)
    if(res.status === 200){
      setuser({...res.data[0]})
    }
  }

  return (
    <div style={{marginTop:"150px"}} >
      <div className='card' >
        <div className='card-header'>
          <p> user contacts detail</p>
        </div>
        <div className='container' >
          <strong>ID:</strong>
          <span>{id}</span>
          <br/>
          <br/>
          <strong>name</strong>
          <span>{user && user.name}</span>
          <br/>
          <br/>
          <strong>email</strong>
          <span>{user && user.email}</span>
          <br/>
          <br/>
          <strong>time</strong>
          <span>{user && user.time}</span>
          <br/>
          <br/>
          <strong>message</strong>
          <span>{user && user.message}</span>
          <br/>
          <br/>
          <Link to="/" >
            <button>Go back to Home</button>
          </Link>
        </div>

      </div>


    </div>
  )
}

export default View