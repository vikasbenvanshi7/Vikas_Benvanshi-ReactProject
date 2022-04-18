import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super();
    this.state={
      data : [],
      nameValue:"",
      emailValue:"",
      genderValue:"",
      statusValue:"",
    }
  }
  addHandler=(e)=>{
    let a = this.state.data;
    let b = [];
    let name = this.state.nameValue;
    let email = this.state.emailValue;
    let gender = this.state.genderValue;
    let status = this.state.statusValue;
    b['name']=name;
    b['email']=email;
    b['gender']=gender;
    b['status']=status;
    a.push(b);
    this.setState({
      data:a,
    })
  }
  nameChangeHandler=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  deleteHandler=(e,id)=>{
    let c = this.state.data;
    c.splice(id, 1); 
    this.setState({
      data:c,
    })
  }
  componentDidMount() {
    fetch("https://gorest.co.in/public/v2/users")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
              data: json,
            });
        })
  }
  render(){
  return (
    <div className="App">
      <div style={{margin:10}}>
        <input type="text" placeholder="Please enter name" name='nameValue' value={this.state.nameValue} onChange={this.nameChangeHandler} />
        <input type="text" placeholder="Please enter email" name='emailValue' value={this.state.emailValue} onChange={this.nameChangeHandler} />
        <input type="text" placeholder="Please enter gender" name='genderValue' value={this.state.genderValue} onChange={this.nameChangeHandler} />
        <input type="text" placeholder="Please enter status" name='statusValue' value={this.state.statusValue} onChange={this.nameChangeHandler} />
        <input type="button" onClick={this.addHandler} value ="ADD DATA" style={{marginLeft:10}}/>
      </div>  
      <table border='border'>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>gender</th>
          <th>status</th>
          <th>Action</th>
        </tr>
        {this.state.data.map((v,r)=>(
          <tr key={r}>
            <th>{v.name}</th>
            <th>{v.email}</th>
            <th>{v.gender}</th>
            <th>{v.status}</th>
            <th>
              <button onClick={(e)=>this.deleteHandler(e,r)}>Delete</button>
            </th>
          </tr>
        ))}
      </table>
    </div>
  )}
}

export default App;
