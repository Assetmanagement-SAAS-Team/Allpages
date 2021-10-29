import { useState } from "react"
import { ProfileData } from "./ProfileData"

export const Profile = () => {
    
    const  ValueChnage = (e) => {
        const [name, setName] = useState(name);
        return(
            setName(e.target.value)
        )
    }
    return (
        <>
         {
            ProfileData.map((cur) =>{
                const name = cur.name;
                return(
                    <div class="container">
                        <div class="row mt-5 border" style={{height:"250px"}}>
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="bg-white border mx-5" style={{width:"150px", height:"150px"}}>
                                    <img src={cur.image} alt="image" className="img-fluid" style={{width:"150px", height:"150px"}}/>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="">
                                    <button class="btn btn-danger m-2">edit</button>
                                </div>
                                <div class="">
                                    <button class="btn btn-success m-2">update</button>
                                </div>
                            </div>
                        </div>
                        <div class="row border p-1" style={{height:"300px"}}>
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="w-100 d-flex border m-2">
                                    <input type="text" placeholder="Name" value={cur.name} name="" class="form-control w-75 m-2" />
                                    <button class="w-25 m-2 btn btn-warning" onChange={ValueChnage}>edit</button>
                                </div>
                                <div class="w-100 d-flex border m-2">
                                    <input type="email" placeholder="Email" value={cur.email} name="" class="form-control w-75 m-2" />
                                    <button class="w-25 m-2 btn btn-warning">edit</button>
                                </div>
                                <div class="w-100 d-flex border m-2">
                                    <input type="text" placeholder="Contact " value={cur.contact} name="" class="form-control w-75 m-2" />
                                    <button class="w-25 m-2 btn btn-warning">edit</button>
                                </div>
                                <div class="w-100 d-flex border m-2">
                                    <textarea class="form-control w-75 m-2" value={cur.address} placeholder="address"></textarea>
                                    <button class="w-25 m-2 btn btn-warning">edit</button>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="w-100 d-flex border m-2">
                                    <input type="text" placeholder="alternate number " value={cur.alternateNo} name="" class="form-control w-75 m-2" />
                                    <button class="w-25 m-2 btn btn-warning">edit</button>
                                </div>
                                <div class="w-100 d-flex border m-2">
                                    <input type="text" placeholder="fathername " name="" value={cur.fatherName} class="form-control w-75 m-2" />
                                    <button class="w-25 m-2 btn btn-warning">edit</button>
                                </div>
                                <div class="w-100 d-flex border m-2">
                                    <input type="text" placeholder="job " name="" value={cur.occupation} class="form-control w-75 m-2" />
                                    <button class="w-25 m-2 btn btn-warning">edit</button>
                                </div>
                                <div class="w-100 d-flex border m-2">
                                    <textarea class="form-control w-75 m-2" value={cur.parmanentAddress} placeholder="address"></textarea>
                                    <button class="w-25 m-2 btn btn-warning">edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 )
             })
         }
        </>
    )
}
