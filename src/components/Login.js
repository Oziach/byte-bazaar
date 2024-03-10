import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectLogin, setIncorrectLogin] = useState();

    return(
        <div>

        <div className="mx-auto  mt-5 col-5">
            <div className="mx-auto text-center">
                    <h2 className="mt-2 mb-2 textBlue">Login</h2>
            </div>

            <div className="borderBottomBlue my-2 mb-3"/>

            <div className="p-3 pt-0">

                {(incorrectLogin &&
                        <div className={"text-danger "}>Incorrect username or password</div>
                )}

                <label className="w-100">
                    <div className="text-start">Email:</div>
                    <input
                        type="text"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        className="w-100 form-control text-light bg-dark mb-2 rounded-1 border-secondary"
                    />
                </label>

                <label className="w-100">
                    <div className="text-start">Password:</div>
                    <input 
                        type="password"
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        className="w-100 form-control mb-2 text-light rounded-1 bg-dark border-secondary"
                    />
                </label>


            </div>
                
            <div className="text-center">       
                <button className="text-center btn bgBlue textWhite ms-auto w-25 fw-bold">Login</button>
            </div>
                
            <hr className="mx-5 mt-4"/>
            <div className="text-center">
                Don't have an account? <br/>
                <Link exact to="/signup">
                    Sign up
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Login;

