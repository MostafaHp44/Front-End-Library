import React from "react";
import './Admin.css'
import Button from 'react-bootstrap/Button';
import { UilBookMedical,UilTrashAlt,UilFileQuestionAlt,UilUserPlus,UilUserTimes,UilUserExclamation} from '@iconscout/react-unicons'
import { useState } from "react";
import AddBook from "./Tools/AddBook";
import DeleteBook from "./Tools/DeleteBooks";
import UpDateBook from "./Tools/UpdateBook";
import AddUser from "./Tools/AddUser";
import DeleteUser from "./Tools/DeleteUser";
import UpdateUser from "./Tools/UpdateUser";


const Admin = () => {
    const [OpenAddBooks,setOpenAddBooks]=useState(false)
    const [OpenDeleteBooks,setOpenDeleteBooks]=useState(false)
    const [OpeUpdateBooks,setOpenUpdataBooks]=useState(false)
    const [OpenAddUser,setOpenAddUser]=useState(false)
    const [OpenDeleteUser,setOpenDeleteUser]=useState(false)
    const [OpenUpdateUser,setOpenUpdateUser]=useState(false)




    const handelOpenAddBooks=()=>{
        setOpenAddBooks(!OpenAddBooks)
    }
    const handelOpenDeleteBooks=()=>{
        setOpenDeleteBooks(!OpenDeleteBooks)
    }
    const handelOpenUpDateBooks=()=>{
        setOpenUpdataBooks(!OpeUpdateBooks)
    }
    const handelOpenAddUser=()=>{
        setOpenAddUser(!OpenAddUser)
    }
    const handelOpenDeleteUser=()=>{
        setOpenDeleteUser(!OpenDeleteUser)
    }
    const handelOpenUpDateUser=()=>{
        setOpenUpdateUser(!OpenUpdateUser)
    }

    return (
    <React.Fragment>
<div className="MainAdmin">
    <nav className="navv">
        <span>Dashboard</span>
        <ul className="Listdashboard">
            <li>Logout</li>
        </ul>
    </nav>
    <div className="ColAdmin">

    <div className="MainColAdmin-1">
        <div className="r-1">
        <Button variant="outline-primary" onClick={handelOpenAddBooks}><span> Add Books <UilBookMedical/> </span></Button>{' '}

        </div>
        <div className="r-2">
        <Button variant="outline-danger" onClick={handelOpenDeleteBooks}><span>Delete Book <UilTrashAlt/> </span></Button>{' '}
        </div>
        <div className="r-3">
        <Button variant="outline-info" onClick={handelOpenUpDateBooks}> <span>Update Book <UilFileQuestionAlt/> </span></Button>{' '}
        </div>
        <div className="r-4">
        <Button variant="outline-primary" onClick={handelOpenAddUser}><span>Add User <UilUserPlus/></span></Button>
        </div>
        <div className="r-5">
        <Button variant="outline-danger" onClick={handelOpenDeleteUser}><span>Delete User <UilUserTimes/> </span></Button>{' '}
        </div>
        <div className="r-6">
        <Button variant="outline-info"onClick={handelOpenUpDateUser}><span>Update User <UilUserExclamation/> </span></Button>{' '}
        </div>
       

    </div>
    <div className="MainColAdmin-2" >
        <div className="r-7">
            {OpenAddBooks?<AddBook/>:<></>}
        </div>

        <div className="r-8">
            {OpenDeleteBooks?<DeleteBook/>:<></>}
        </div>

        <div className="r-9">
            {OpeUpdateBooks?<UpDateBook/>:<></>}
        </div>
        <div className="r-10">
            {OpenAddUser?<AddUser/>:<></>}
        </div>
        <div className="r-11">
            {OpenDeleteUser?<DeleteUser/>:<></>}
        </div>
        <div className="r-12">
            {OpenUpdateUser?<UpdateUser/>:<></>}
        </div>


    </div>
    <div className="MainColAdmin-3"></div>

    </div>
    

</div>
    </React.Fragment>
    );
}
 
export default Admin;