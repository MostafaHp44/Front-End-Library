import React from "react";
import './User.css'
import { Link } from "react-router-dom";
import { UilFacebook,UilTwitter,UilLinkedin,UilInstagramAlt,UilGithub,UilPen} from '@iconscout/react-unicons'
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';




const User = () => {
    const [editusernamefacebook,seteditusernamefacebook]=useState(false)
    const [editusernametwitter,seteditusernametwitter]=useState(false)
    const [editusernamelinkedin,seteditusernamelinkedin]=useState(false)
    const [editusernameinstagram,seteditusernameinstagram]=useState(false)
    const [editusernamegithhub,seteditusernamegithhub]=useState(false)
    const[openeditadress,setopeneditadress]=useState(false)


    const[UsernameFacebook,setUsernameFacebook]=useState('')
    const[UsernameTwitter,setUsernameTwitter]=useState('')
    const[UsernameLinkedIn,setUsernameLinkedIn]=useState('')
    const[UsernameInstagram,setUsernameInstagram]=useState('')
    const[UsernameGithHub,setUsernameGithHub]=useState('')
    const[editadress,seteditadress]=useState('')



    const handeleditusernamefacebook=()=>{
        seteditusernamefacebook(!editusernamefacebook)
    }
    const handeleditusernametwitter=()=>{
        seteditusernametwitter(!editusernametwitter)
    }
    const handeleditusernamelinkedin=()=>{
        seteditusernamelinkedin(!editusernamelinkedin)
    }
    const handeleditusernameinstagram=()=>{
        seteditusernameinstagram(!editusernameinstagram)
    }
    const handeleditusernamegithhub=()=>{
        seteditusernamegithhub(!editusernamegithhub)
    }
    const handelUsernameFacebook=(e)=>{
        e.preventDefault()
        setUsernameFacebook(e.target.value)    
    }
    const handelUsernameTwitter=(e)=>{
        e.preventDefault()
        setUsernameTwitter(e.target.value)    
    }
    const handelUsernameLinkedIn=(e)=>{
        e.preventDefault()
        setUsernameLinkedIn(e.target.value)    
    }
    const handelUsernameInstagram=(e)=>{
        e.preventDefault()
        setUsernameInstagram(e.target.value)    
    }
    const handelUsernameGithHub=(e)=>{
        e.preventDefault()
        setUsernameGithHub(e.target.value)    
    }
    const handelopenadress=()=>{
        setopeneditadress(!openeditadress)
    }
    const handeleditadress=(e)=>{
        e.preventDefault()
        seteditadress(e.target.value)
    }
    return (
    <React.Fragment>
        <div className="MainUser">
        <section style={{backgroundColor: '#eee'}}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="user">User</Link></li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: '150px'}} />
                  <h5 className="my-3">John Smith</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="iconsocial" ><UilFacebook /> <Button variant="outline-dark" style={{border:"none"}} onClick={handeleditusernamefacebook}><UilPen/></Button></div>
                      { editusernamefacebook? 
                              <>
                              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                        Username
                                                    </Form.Label><InputGroup className="mb-2">
                                                            <InputGroup.Text>@</InputGroup.Text>
                                                            <Form.Control id="inlineFormInputGroup" placeholder="Username" onChange={handelUsernameFacebook} value={UsernameFacebook}/>
                                                        </InputGroup></>
                            :
                      <p className="mb-0">{UsernameFacebook}</p>}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="iconsocial"><UilTwitter/> <Button variant="outline-dark" style={{border:"none"}} onClick={handeleditusernametwitter}><UilPen/></Button></div>
                    { editusernametwitter? 
                              <>
                              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                        Username
                                                    </Form.Label><InputGroup className="mb-2">
                                                            <InputGroup.Text>@</InputGroup.Text>
                                                            <Form.Control id="inlineFormInputGroup" placeholder="Username" onChange={handelUsernameTwitter} value={UsernameTwitter}/>
                                                        </InputGroup></>
                            :
                      <p className="mb-0">{UsernameTwitter}</p>}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="iconsocial"><UilLinkedin/> <Button variant="outline-dark" style={{border:"none"}} onClick={handeleditusernamelinkedin}><UilPen/></Button></div>
                    { editusernamelinkedin? 
                              <>
                              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                        Username
                                                    </Form.Label><InputGroup className="mb-2">
                                                            <InputGroup.Text>@</InputGroup.Text>
                                                            <Form.Control id="inlineFormInputGroup" placeholder="Username" onChange={handelUsernameLinkedIn} value={UsernameLinkedIn}/>
                                                        </InputGroup></>
                            :
                      <p className="mb-0">{UsernameLinkedIn}</p>}                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="iconsocial"> <UilInstagramAlt/> <Button variant="outline-dark" style={{border:"none"}} onClick={handeleditusernameinstagram}><UilPen/></Button></div>
                    { editusernameinstagram? 
                              <>
                              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                        Username
                                                    </Form.Label><InputGroup className="mb-2">
                                                            <InputGroup.Text>@</InputGroup.Text>
                                                            <Form.Control id="inlineFormInputGroup" placeholder="Username" onChange={handelUsernameInstagram} value={UsernameInstagram}/>
                                                        </InputGroup></>
                            :
                      <p className="mb-0">{UsernameInstagram}</p>}</li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                     <div className="iconsocial"><UilGithub /> <Button variant="outline-dark" style={{border:"none"}} onClick={handeleditusernamegithhub}><UilPen/></Button></div> 
                     { editusernamegithhub? 
                              <>
                              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                        Username
                                                    </Form.Label><InputGroup className="mb-2">
                                                            <InputGroup.Text>@</InputGroup.Text>
                                                            <Form.Control id="inlineFormInputGroup" placeholder="Username" onChange={handelUsernameGithHub} value={UsernameGithHub}/>
                                                        </InputGroup></>
                            :
                      <p className="mb-0">{UsernameGithHub}</p>}                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                
                
                  <hr />
                  <div className="row">
                    <div className="col-sm-3" >
                      <p className="mb-0">Address <Button variant="outline-dark" style={{border:"none"}} onClick={handelopenadress}><UilPen/></Button></p>
                    </div>
                    { openeditadress?
                     <><Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                    Address
                                                </Form.Label><InputGroup className="mb-2">
                                                        <InputGroup.Text>ST.</InputGroup.Text>
                                                        <Form.Control id="inlineFormInputGroup" placeholder="Username" onChange={handeleditadress} value={editadress} />
                                                    </InputGroup></>
                    :
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{editadress}</p>
                      
                    </div>
                    }
                  </div>
                </div>
              </div>
              <div className="row">
              
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    </React.Fragment>
    );
}
 
export default User;