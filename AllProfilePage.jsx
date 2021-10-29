import React,{useState} from 'react'
import { ProfileData } from "./ProfileData"
export const AllProfilePage = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const [caddress, setCaddress] = useState()
    const [occupation, setOccupation] = useState()
    const [paddress, setPaddress] = useState()
    const showData = (e) => {
        e.preventDefault();
        var key = document.getElementById('btn').value;
        return(
              <>
                {
                    ProfileData.map((curEle) => {
                        return(
                             curEle.id == key ? <div>
                                 {
                                    document.write(' '+curEle.id),
                                    document.write(' '+curEle.name),
                                    document.write(' '+curEle.email),
                                    document.write(' '+curEle.address)
                                 }
                             </div> : document.write()
                        )
                    })
                    
                }
              </>
        )
    }
    return (
        <>
                <div class="container mt-5 mb-5 bg-light" style={{width:'100vw',height:'100vh'}}>
                    <div class="row mt-2">
                    {/* left side profile data  */}
                        <div class="col-sm-4 col-md-4 col-lg-4 border">
                            <div class="d-flex container-fluid py-2">
                                <p class="w-75 display-5 fs-5">Referance id</p>
                                <i class="fa fa-heart float-right w-25 text-center" style={{fontSize:'25px', color:'red', cursor:'pointer'}}></i>
                            </div>
                            <div >
                                <img src="" class="img-fluid" style={{width:'300px', height:'200px'}} />
                            </div>
                            <div class="" style={{fontFamily:'roboto'}}>
                                <h2 className="display-5 fs-4 fw-bold p-2 text-center" style={{fontFamily:'roboto',}}>Personal details</h2> <hr />
                                <label value={name} class="w-100 "><span class="fw-bold">Name : </span></label><hr />
                                <label value={email} class="w-100 "><span class="fw-bold">Email : </span></label><hr />
                                <label value={contact} class="w-100 "><span class="fw-bold">contact : </span></label><hr />
                                <label value={caddress} class="w-100 "><span class="fw-bold">Current address : </span></label><hr />
                                <label value={occupation} class="w-100 "><span class="fw-bold">occupation : </span></label><hr />
                                <label value={paddress} class="w-100 "><span class="fw-bold">parmanent address : </span></label><hr />
                            </div>
                        </div>
                        {/* right side  profile  */}
                        <div class="col-sm-8 col-md-8 col-lg-8" style={{height:'100vh'}}>
                            <div className="row g-3">
                            <h5 className="display-5 fs-4 p-2" style={{fontFamily:'roboto'}}>All profile </h5>
                                   {
                                       ProfileData.map((curEle) =>{
                                            return(
                                                <div className="card shadow m-3" style={{width:'300px'}}>
                                                    <h5 className="px-3 display-5 fs-5 py-2">Name :<span className="text-uppercase fw-bold">&nbsp; {curEle.name} </span></h5>
                                                    <div className="card-footer">
                                                         <button id="btn" type="button" class="btn" onClick={showData} value={curEle.key}>see all details {curEle.key}</button>
                                                    </div>
                                                </div>
                                            )
                                       })   
                                   }
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
