import { Fragment } from "react";

export default function Login(){
     return(
          <>
             <div class="form-modal">
    
    <div class="form-toggle">
        <button id="login-toggle" onclick="toggleLogin()">log in</button>
        <button id="signup-toggle" onclick="toggleSignup()">sign up</button>
    </div>

    <div id="login-form">
        <form>
            <input type="text" placeholder="Enter email or username"/>
            <input type="password" placeholder="Enter password"/>
            <button type="button" class="btn login">login</button>
            <p><a href="javascript:void(0)">Forget password?</a></p>
            <h3>OR</h3>
            <button type="button" class="btn -box-sd-effect"> <i class="fa fa-google fa-lg" aria-hidden="true"></i> sign in with google</button>
           
        </form>
    </div>

    <div id="signup-form">
        <form>
            <input type="email" placeholder="Enter your email"/>
            <input type="text" placeholder="Choose username"/>
            <input type="password" placeholder="Create password"/>
            <button type="button" class="btn signup">create account</button>
            <h3>OR</h3>
            <button type="button" class="btn -box-sd-effect"> <i class="fa fa-google fa-lg" aria-hidden="true"></i> sign up with google</button>
        </form>
    </div>

  </div>


          </>
     )
}