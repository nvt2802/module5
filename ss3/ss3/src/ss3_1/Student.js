import { Component } from "react";
import './style.css'



class StudentInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            listStudent: [{
                id: "1",
                name: "nguyen van a",
                age: "18",
                address: "1 ádasdas"
            },
            {
                id: "2",
                name: "nguyen thi b",
                age: "19",
                address: "112 áds"
            },
            {
                id: "3",
                name: "nguyen van c",
                age: "17",
                address: "1"
            },
            {
                id: "4",
                name: "nguyen van d",
                age: "16",
                address: "122 ád ád"
            },
            {
                id: "5",
                name: "nguyen thi e",
                age: "22",
                address: "1232 ádasd á"
            },

            ]

        }
    }

    render() {
        return (
            <>
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>address</th>
                    </tr>
                    {this.state.listStudent.map((element,index) => {

                        return <tr key={index}>
                            <td >{element.id}</td>
                            <td >{element.name}</td>
                            <td >{element.age}</td>
                            <td >{element.address}</td>
                        </tr>

                    })}


                </table>

            </>
        )
    }
}

export default StudentInfoComponent;