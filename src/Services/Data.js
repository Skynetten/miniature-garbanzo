import axios from "axios"


const getData = () =>{
    return axios
        .get("http://localhost:8080/HRC/Basic")
        .then((response)=>{return response.data})
        .catch((err)=>{
            console.log(err);
        })
}

const insertData = (value) =>{
    return axios
        .post("http://localhost:8080/HRC/Basic", value, {
            'Content-Type': 'application/json'
        })
}

const deleteData = (value) =>{
    return axios
        .post("http://localhost:8080/HRC/Del",value,{
            'Content-Type': 'application/json'
        })
}

const sendEditData = (value) =>{
    return axios
        .post("http://localhost:8080/HRC/Change",value,{
            'Content-Type' : 'application/json'
        })
}

export {getData, deleteData, insertData, sendEditData}