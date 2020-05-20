import axios from 'axios'

export function addUserDetails(data){
    console.log("object      "+data);
    
    return axios({
        method:'post',
        url:'http://localhost:8080/gmailLogin/register',
        data:data
    })
}