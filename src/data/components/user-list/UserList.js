import React,{Component} from 'react';
import { ApiUsers } from '../../api-users/ApiUsers';
import User from '../user-item/User';

class UserList extends Component{

    api=new ApiUsers();
    state={users:[]};
    
    async componentDidMount(){
        this.setState({users: await this.api.getUsers()})
    }

    render(){
        return(
            <div>
                {
                    this.state.users.map((user)=>{
                        return(
                            <User user={user} key={user.id}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default UserList;