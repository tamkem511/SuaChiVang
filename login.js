
var accountApi = "http://localhost:3000/accounts";
// chuyển sang đăng ký
function nextSignUp(){
    document.getElementById("web").style.backgroundColor = "#f43648";
    document.getElementById("form_login_register").style.backgroundColor="rgb(107, 190, 196)";
    
    document.getElementById("form_login").style.left = "430px";
    document.getElementById("form_login").style.transition = "2s";

    document.getElementById("login").innerHTML = `
            <div id="Sign_In">
                <h1>Sign Up</h1>
            </div>
            <div id="SignUp_name">
                <input type="text" id="add_userName" placeholder="Username">
                <span id="error_add_username"></span>
            </div>
            <div id="SignUp_email">
                <input type="text" id="add_email" placeholder="Email address">
                <span id="error_add_email"></span>
            </div>
            <div id="SignUp_password">
                <input type="text" id="add_password" placeholder="Password">
                <span id="error_add_password"></span>
            </div>
            <div id="SignUp__confirmpassword">
                <input type="text" id="add_confirm_password" placeholder="Confirm Password">
                <span id="error_add_confirm_password"></span>
            </div>
            <button id="register" onclick="Register()">
                <h2>Register</h2>
            </button>
            <ul id="nodeAccount">
               <li>
                <span>Username : 3 từ và phải viết HOA chữ cái đầu mỗi từ</span>
               </li>

               <li>
                    <span>Email : Không được viết hoa,và phải đúng form Email</span>
               </li>

               <li>
                <span>Password : Chứa kí tự in Hoa,chữ cái số và kí tự đặc biệt</span>
               </li>

            </ul>
    `
}

// chuyển sang đăng nhập
function nextSignIn(){
    document.getElementById("web").style.backgroundColor = "rgb(4, 227, 243)";
    document.getElementById("form_login_register").style.backgroundColor="rgba(219, 62, 62, 0.829)";
    document.getElementById("form_login").style.left = "0";
    document.getElementById("form_login").style.transition = "2s";

    document.getElementById("login").innerHTML = `
    <div id="Sign_In">
        <h1>Sign In</h1>
    </div>
    <div id="SignIn_name">
        <input type="text" id="userName" placeholder="Username : Phạm Tiến Tâm">
        <span id="error_username"></span>
    </div>
    <div id="SignIn_password">
        <input type="password" id="password" placeholder="Password : Tamkem511@">
        <span id="error_password"></span>
        <button id="showPass" onclick="showPass()">
            <i class="fa fa-eye" id="iconEye"></i>
        </button>
    </div>
    <button id="submit" onclick="Submits()">
        <h2>Submit</h2>
    </button>
    `
}

// đăng ký

function Register(){
     var addUsername = document.getElementById("add_userName").value;
     var addEmail = document.getElementById("add_email").value;
     var addPassword = document.getElementById("add_password").value;
     var addConfirmPassword = document.getElementById("add_confirm_password").value;

     examEmpty();
     examUsername();
     examEmail();
     examPassword();
     examConfirmPassword();

     if(examUsername() == true && examUsername() == true
        && examEmail() == true && examPassword() == true && examConfirmPassword() == true) {
            var dataPost = {
                username:addUsername,
                password:addPassword
            }
                var option = {
                    
                    method: 'POST', // thêm mới thì dùng post
                    headers: {
                            'Content-Type': 'application/json',
                            },
                    body: JSON.stringify(dataPost),
                }
                fetch(accountApi,option)
                .then(function(response) {
                    return response.json();
                })
     }
    else{
        
    }
}

function examEmpty(){
    var addUsername = document.getElementById("add_userName").value;
    var addEmail = document.getElementById("add_email").value;
    var addPassword = document.getElementById("add_password").value;
    var addConfirmPassword = document.getElementById("add_confirm_password").value;

    var promise = new Promise(function(resolve, reject) {
          resolve();
    })

    promise
    .then(function() {
        if(addUsername == ""){
            document.getElementById("error_add_username").innerHTML = "Please enter the userName";
        }
        else{
            // document.getElementById("error_add_username").innerHTML="";
            examUsername();
        }
    })
    .then(function() {
        if(addEmail == ""){
            document.getElementById("error_add_email").innerHTML = "Please enter the email";
        }
        else{
            // document.getElementById("error_add_email").innerHTML = "";
            examEmail();
        }
    })
    .then(function() {
        if(addPassword == ""){
            document.getElementById("error_add_password").innerHTML = "Please enter the password";
         }
         else{
            // document.getElementById("error_add_password").innerHTML = "";
            examPassword();
         }
    })
    .then(function() {
        if(addConfirmPassword == ""){
            document.getElementById("error_add_confirm_password").innerHTML = "Please enter the confirm password";
         }
         else{
            // document.getElementById("error_add_confirm_password").innerHTML = "";
            examConfirmPassword();
         }
    })
}

function examUsername(){
    var addUsername = document.getElementById("add_userName").value;
    var examHoTen = /^[A-Z ][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]/;
    if(examHoTen.test(addUsername)){
        document.getElementById("error_add_username").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("error_add_username").innerHTML = "Capitalize the first letter and separate it with a space"
    }
}

function examEmail(){
    var addEmail = document.getElementById("add_email").value;
    var examEmail = /^[a-z0-9]+@[a-z]+.[a-z]{2,}/;
    if(examEmail.test(addEmail)){
        document.getElementById("error_add_email").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("error_add_email").innerHTML = "Your email is not valid";
    }
}

function examPassword(){
    var addPassword = document.getElementById("add_password").value;
    var examMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(examMatKhau.test(addPassword)){
        document.getElementById("error_add_password").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("error_add_password").innerHTML = "The password is not in the correct format";
    }
}

function examConfirmPassword(){
    var addConfirmPassword = document.getElementById("add_confirm_password").value;
    var addPassword = document.getElementById("add_password").value;
    if(addConfirmPassword == addPassword){
        document.getElementById("error_add_confirm_password").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("error_add_confirm_password").innerHTML = "Password confirmation failed";
    }
}

// đăng nhập


function Submits(){
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var errorUserName = document.getElementById("error_username");
    var errorPassword = document.getElementById("error_password");
    fetch(accountApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(accounts) {
        var getUserName = accounts.find(function(account){
            return account.username == userName;
        })
        if(getUserName== undefined) {
            errorUserName.innerHTML = "Username does not exist"
        }
        else{
            errorUserName.innerHTML = "";
            console.log(getUserName);
            if(password == getUserName.password){
                errorPassword.innerHTML = "";
                window.location = "trangChu.html";
            }
            else{
                errorPassword.innerHTML = "Incorrect password";
            }
        }
    })
}


// hiển thị mật khẩu

isBool = true;
function showPass() { 
    var password = document.getElementById("password");
    if(isBool){
        password.setAttribute("type","text");
        document.getElementById("iconEye").setAttribute("class","fa fa-eye-slash")
        isBool = false;
    }else{
    password.setAttribute("type","password");
    document.getElementById("iconEye").setAttribute("class","fa fa-eye")
    isBool=true;
}
       
}
