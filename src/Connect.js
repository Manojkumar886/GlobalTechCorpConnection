import axios from 'axios'

const mylink="http://localhost:8082/ZealousEmpDetails"

// mylink/create
// mylink/createpayslip
// mylink/delete/{value}

// async,await

export const Loadempdetails=async(obj)=>
{
   try
   {
    const details=obj.username+":"+obj.password;
    const token=btoa(details);

    const temp=await axios.get(`${mylink}/{obj.username}`,{
        headers:{
            "Authorization":`Basic ${token}`
        }
    })
    if(temp.data)
    {
        sessionStorage.setItem("mydetails",token);
        return temp;
    }
   }
   catch(err)
   {
    alert(" invaild"+err);
   }
}


export const join=async(object)=>
{
    const temp=await axios.post(`${mylink}/create`,object)

    alert(JSON.stringify(temp.data)+" has been added successfully ");

    return temp;
}