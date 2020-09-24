import React, { Component} from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './components/login.css';


const componentClicked=(data)=>{
    console.warn(data);
}
const responseGoogle=(response)=>{
    console.log(response);
}


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            isAuth:false,
            Data:''
        };
    }


    componentDidMount(){
        const payload={
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
        }
        fetch('https://reqres.in/api/login',{
            method:'POST',
            headers:{
                'Accept':'application',
                'Content-type':'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then((data)=>{
            this.setState({
                Data:data.token,
                isAuth:true
        });
            console.log(data);
        },
        (error)=>{
            console.log(error);
            this.setState({
                isAuth:false,
                Data:'No data found'
            })
        });
    }



    responseFacebook(response){
        console.log(response);
      }

      render(){
        return (
        <div className="container-fluid center" >
          <div className="row">
            <div className="col">
                {/*Navbar */}
                <div>
                    <nav className="navbar navbar-inverse navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="navbar-header" style={{justifyContent:"center"}}>
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/126903895/original/d250b07a843ed8490b24833d9d70565ac10c3098/design-creative-logo-of-any-type.png" alt="pic" width="120px" height="50px" style={{justifyContent:"center"}}></img>
                        </div>
                    </div>
                    </nav>
                </div>


            <React.Fragment>
                <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                    <div class="wrapper wrapper--w780">
                        <div class="card card-3">
                            <div class="card-heading"></div>
                                <div class="card-body">
                                    <center>
                                    <h5>SIGN UP</h5>
                                    <h3>Create Your Account</h3>

                                    {/* Facebook and Google Signup*/}
                                        <h3><FacebookLogin
                                            appId="1791254154357488"
                                            autoLoad={true}
                                            size="medium"
                                            textButton="Signup with Facebook"
                                            fields="name,email,picture"
                                            onClick={componentClicked}
                                            callback={this.responseFacebook}
                                            icon="fa-facebook"/>

                                            <GoogleLogin
                                                clientId="435151190185-hbuqo9al3u38njkj8dnjdeegruc6gjt0.apps.googleusercontent.com"
                                                buttonText="Sign up with Google"
                                                size="small"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}/>
                                        </h3>
                                        <hr></hr>

                                        {/* Form Begins */}

                                        <form onSubmit={this.state.isAuth} style={{justifyContent:"center"}}>

                                            <div class="input-group">
                                                <input type="text" ref="firstName" class="input--style-3" placeholder="First Name" required />
                                            </div>
                                            <div class="input-group">
                                                <input type="text" ref="lastName" class="input--style-3" placeholder="Last Name" required />
                                            </div>
                                            <div class="input-group">
                                                <input type="text" ref="emailAddress" class="input--style-3" placeholder="Email Address" required />
                                            </div>
                                            <div class="input-group">
                                                <input type="password" ref="password" class="input--style-3" placeholder="Password" required />
                                            </div>
                                            <div>
                                            <p>By clicking Sign Up,you agree to our Terms of Use and our Privacy Policy</p>
                                            </div>
                                            <div class="p-t-10">
                                            <button type="signup" className="btn btn-primary">SIGN UP</button>
                                            </div>
                                        </form>
                                        </center>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>   
            </div>
          </div>  
        </div>
        )
      }
}
export default App;