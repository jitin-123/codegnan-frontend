import React from 'react'

class Demo extends React.Component{
    state={
        name:"ReactJS",
        age:0,
        dummy:false
    }
    display=()=>{
        if(this.state.dummy==false){
            this.setState({
                name:"Angular",
                age:100,
                dummy:true
            })
        }
        else {
            this.setState({
                name:"react",
                age:0,
                dummy:false
            })
        }
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>{this.state.name} {this.state.age}</h1>
                <p>Name: {this.props.name}</p>
                <p>company:{this.props.company}</p>
                <button onClick={this.display}>Click</button>
            </div>
        )
    }
}
export default Demo
