import React, { Component } from 'react'
import axios from 'axios' 

class Contact extends Component {
    state={
        users:[]
    }
    componentDidMount(){
        axios.get("https://projectbackend-clj4.onrender.com/retrieve")
            .then((res)=>{
                console.log(res.data)
                this.setState({
                    users:res.data
                })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.users.map((pr)=>(
                       <div key={pr._id}>
                            <p>{pr.name}</p>
                            <p>{pr.passcode}</p>
                       </div>
                    ))
                }
            </div>
        )
    }
}

export default Contact