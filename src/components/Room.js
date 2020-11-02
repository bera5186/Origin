import './room.css'

export default Room(){
    return (
        <>
        <div class="grateful-message">
        <h1 class="hey">Hey!!</h1> <p class="short-tutorial">We are grateful that you are here,</br> you are one step away to use our services.</br> Create a room or simply join a room through link</p>
        </div>

    <div class="form-modal">
    
        <div class="form-toggle">
            <button id="login-toggle" onclick="toggleLogin()">Create room</button>
            <button id="signup-toggle" onclick="toggleSignup()">Join room</button>
        </div>
    
        <div id="login-form">
            <form>
                <input type="link" placeholder="Your link will apear here"/>
                <button type="button" class="btn login">Generate Link</button>
            </form>
        </div>
    
        <div id="signup-form">
            <form>
                <input type="link" placeholder="Enter your room link"/>
                <button type="button" class="btn signup">Join</button>
                </form>
        </div>
    
      </div>
   </div>
        </>
    )
}