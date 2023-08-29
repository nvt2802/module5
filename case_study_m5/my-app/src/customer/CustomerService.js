import axios from "axios";

export const getAllCustomer = async () =>{
    const res = await axios.get("http://localhost:8080/custommers");
    console.log(res.data);
    return res.data;
}   
export const getAllCustomerType = async () =>{
    const res = await axios.get("http://localhost:8080/customer-types");
    return res.data;
} 
export const getCustomerType = async (id) =>{
    const res = await axios.get(`http://localhost:8080/customer-types/${id}`);
    return res.data;
} 
export const getCustomer = async (id) =>{
    const res = await axios.get(`http://localhost:8080/custommers/${id}`);
    console.log(res.data);
    return res.data;
}  

export const createCustomer = async (customer) =>{
    customer.type = await getCustomerType(customer.type);
    const res = await axios.post("http://localhost:8080/custommers",customer);
    console.log(res);
    return res.status;
} 
export const updateCustomer = async (customer) =>{
    customer.type = await getCustomerType(customer.type);
    const res = await axios.put(`http://localhost:8080/custommers/${customer.id}`,customer);
    console.log(res);
    return res.status;
} 

export const deleteCustomer = async (id) =>{
    console.log(id)
    const res = await axios.delete(`http://localhost:8080/custommers/${id}`);
    console.log(res);
    return res.status;
} 