import React from "react";

class UserClass extends React.Component{


    constructor(props){
        super(props);
        console.log(props);

        this.state ={
            userInfo :{
                name : "Dummy",
                location : "Default",
                company : "xyz",
                avtar_url: "",
            }
        }

        // console.log(this.props.name + "Child Constructor");

    }

    async componentDidMount(){
        // console.log(this.props.name + "Child ComponentDidMount");
        // Api calls

        const data = await fetch(" https://api.github.com/users/rakeyysh");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo : json,

        });

    }

    componentDidUpdate(){
        console.log("componentDidUpdate is called");
    }


    componentWillUnmount(){
        console.log("component Will Unmount");
    }

    render (){
        
        
     
       const{name,location,company,avatar_url} = this.state.userInfo;
       
        
        return (
            <div className="user-card">

             <img src={avatar_url} />                                               
            <h2>Name : {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Company : {company}</h3>


            <h4>Contact: rakeyysh@20</h4>
           
            
           
        </div>

        )
    }
}

export default UserClass;


/**
 *  ---- MOUNTING ----
 * Constructor (dummy data)
 * Render (dummy)
 *   <HTML Dummy >
 * 
 * Component Did Mount
 *   <API Call>
 *   <this.setState> --> State variable is updated
 * 
 * 
 *  -- UPDATE --
 *   
 *   render(Api data)
 *   <HTML (new API data)>
 *   componentDid Update
 * 
 * 
 */