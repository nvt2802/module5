import { Component } from "react";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            list: ["a", "b"],
            item: "",
        }
    }
    handleChange(name) {
        console.log("Value from event:", name);
        // let eventNew = event.target.value;
        this.setState({
            item: name
        })
    }

    handleAddItem = () => {
        if(this.state.item.trim()!==""){
        this.setState((prev) => ({
            list: [...prev.list, prev.item],
            item: "",
        }))
    }

    }
    render() {
        return (

            <>
                <h1>TODO LIST</h1>
                <input type='text' value={this.state.item} onChange={(event) => this.handleChange(event.target.value)}></input>
                <button onClick={() => this.handleAddItem()}>Add</button>
                <h1>Todo</h1>
                <ul>
                    {
                        this.state.list.map((item) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Todo;