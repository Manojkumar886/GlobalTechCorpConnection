import axios from 'axios'

const mylink="http://localhost:8082/ZealousEmpDetails"

// mylink/create
// mylink/createpayslip
// mylink/delete/{value}

// async,await

export const Loadempdetails=async(obj)=>
{
    const details=obj.username+":"+obj.password;
    const token=btoa(details);

    // const temp=await axios.get(`${mylink}/{obj.username}`,)

}