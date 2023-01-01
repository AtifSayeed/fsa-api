import React from "react";
import axios from "axios";
import UserItem from "./UserItem";
import Error from "../error/Error";

class User extends React.Component {
  state = {
    users: [],
    hasError: false
  };

  constructor() {
    super();
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        this.setState({hasError :true});
      });
  }
  render() {
      return <div className="container">
        {this.state.hasError ? <Error /> :null }
        <h1 className="m-3">User</h1><div className=" d-flex flex-wrap  " > 
               
        {this.state.users.map(user =>  <UserItem user  = {user}/>)}
    </div> 
    </div>
  }
}
export default User;
