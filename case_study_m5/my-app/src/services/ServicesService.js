
import axios from "axios";

export const getAllService = async () =>{
    const res = await axios.get("http://localhost:8080/services");
    console.log(res.data);
    return res.data;
}   
export const getService = async (id) =>{
    const res = await axios.get(`http://localhost:8080/services/${id}`);
    console.log(res.data);
    return res.data;
}  

export const createService = async (service) =>{
    const res = await axios.post("http://localhost:8080/services",service);
    console.log(res);
    return res.status;
} 
export const updateService = async (service) =>{
    const res = await axios.put(`http://localhost:8080/services/${service.id}`,service);
    console.log(res);
    return res.status;
} 

export const deleteService = async (id) =>{
    console.log(id)
    const res = await axios.delete(`http://localhost:8080/services/${id}`);
    console.log(res);
    return res.status;
} 