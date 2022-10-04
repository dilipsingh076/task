import React, { useEffect, useState } from 'react';
import axios from "axios"
import {
  Table,
  Thead,
  Tbody,
 
  Tr,
  Th,
   TableContainer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {toast} from "react-toastify"
export default function Home() {
  const [data, setdata] = useState([])

  useEffect(() => {
    getUsers()
  },[])

 const getUsers = async () => {
    const res = await axios.get(`http://localhost:5050/users`);
    setdata(res.data)
  }
  

  const deleteUser =  async(id) =>{
    if(window.confirm("Are you sure you want to delete data.")){
      const res = await axios.delete(`http://localhost:5050/user/${id}`);
      if(res.status === 200){
        toast.success(res.data)
        getUsers()
      }
      
    }
  }

  return (
    <div>
      <h2>Home</h2>
      <div style={{marginTop:"150px", display:"flex", justifyContent:"center",}} >
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
         
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>ID</Th>
              <Th>company id</Th>
              <Th>Name</Th>
              <Th>email</Th>
              <Th isNumeric>Time</Th>
              <Th >message</Th>
            </Tr>
          </Thead>
          <Tbody>
           {data && data.map((item,index)=>{return (
            <tr key={index} >
              <th scope='row' > {index+1} </th>
              <th scope='row' > {item.id} </th>
              <th scope='row' > {item.companyid} </th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.time}</td>
              <td>{item.message}</td>
              <td> <Link to={`/update/${item.id}`} > EDIT Data </Link> </td>
              <td> <Link to={`/view/${item.id}`} > View </Link> </td>
              <td><button onClick={()=>deleteUser(item.id)} > Delete</button> </td>

            </tr>
           )})}
          </Tbody>
        </Table>
      </TableContainer>
      </div>
    </div>
  )
}

