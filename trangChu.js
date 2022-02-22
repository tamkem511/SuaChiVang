var accountApi = "http://localhost:3000/accounts";

// mở menuSearch
var iconsSearch = true;
function menuIcons(){
    var fixedPart = document.getElementById("fixedPart");
    var movablePart = document.getElementById("movablePart");
    if(iconsSearch){
        fixedPart.style.display = "none";
        movablePart.style.display = "none";
        document.getElementById("webb").style.display = "none"
        document.querySelector("#menuIcons i").setAttribute("class","fa fa-angle-left")
        document.getElementById("menuCategorySearch").style = "transform:translateX(0)";
        iconsSearch = false;
    }
    else{
        document.getElementById("menuCategorySearch").style = "transform:translateX(-1300px)";
        document.querySelector("#menuIcons i").setAttribute("class","fa fa-bars")
        fixedPart.style.display = "block";
        movablePart.style.display = "block";
        iconsSearch = true;
    }
}

var CategorySearchMenu = document.getElementsByClassName('categorySearchMenu');
for(var vl of CategorySearchMenu){
    vl.addEventListener("click",function(){
        alert("")
    })
}

// mở form accunt
function Account(){
    var formAccount = document.getElementById("formAccount");
    formAccount.style.display = "block";
    formAccount.style.transition = "2s";
}

// đóng form account
function backFromAccount(){
    var formAccount = document.getElementById("formAccount");
    formAccount.style.display = "none";
}

// thay đổi tên hiển thị
function ChangeName(){
   var ChangeNameRender = document.getElementById("changeNameRender");
   ChangeNameRender.style.display = "block";

   document.getElementById("changePassword").style.display ="none";
   document.getElementById("chooseLogo").style.display = "none";
//    var formAccount = document.getElementById("changeNameRender");
//            formAccount.style.display = "none";
}


// xác nhận đổi tên
function ConfirmChangeName(){
    var ExamPassword = document.getElementById("examPassword").value;
    var newName = document.getElementById("newName").value;
    fetch(accountApi)
    .then(function(response) {
        return response.json();

    })
    .then(function(accounts){
        var exam = accounts.find(function(account){
               return account.password == ExamPassword;
        })

        if(exam == undefined){
            document.getElementById("errorExamPassword").innerHTML="Incorrect password";
        }
        else{
            var examHoTen = /^[A-Z ][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]/;
            if(examHoTen.test(newName)){
                var dataPost = {
                    id:exam.id,
                    username:newName
                }
                var option = {
                    method: 'PATCH', // sửa thì dùng phương thức PATCH
                    headers: {
                            'Content-Type': 'application/json',
                            },
                    body: JSON.stringify(dataPost)
                        }
                fetch(accountApi + '/' + exam.id,option)
                .then(function(response) {
                    return response.json();
                })
                var formAccount = document.getElementById("formChangeName");
                formAccount.style.display = "none";
            }
            else{
                document.getElementById("errorNewName").innerHTML = "Invalid username"
            }
           
        }
    })
}

// hủy bỏ thay đổi tên
function CancelChangeName(){
    var ChangeNameRender = document.getElementById("changeNameRender");
   ChangeNameRender.style.display = "none";
}

// mỏ form thay đổi avatar
function ChangeLogo(){
    document.getElementById("chooseLogo").style.display = "block";
    var formAccount = document.getElementById("changeNameRender");
            formAccount.style.display = "none";
    var formAccount = document.getElementById("changePassword");
            formAccount.style.display = "none";            
}

function chooseFile(fileInput){
    if(fileInput.files && fileInput.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            document.querySelector('#avata').setAttribute('src',e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function CancelChangeLogo(){
    document.getElementById("chooseLogo").style.display = "none";
}

// thay đổi mật khẩu

function renderFormChangePassword(){
    document.getElementById("changePassword").style.display ="block";
    document.getElementById("chooseLogo").style.display = "none";
    var formAccount = document.getElementById("changeNameRender");
            formAccount.style.display = "none";
}

function CancelChangePassword(){
    document.getElementById("changePassword").style.display ="none";
}

function ConfirmChangePassword(){
    var OldPass = document.getElementById("oldPass").value;
    var NewPass = document.getElementById("newPass").value;
    fetch(accountApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(accounts){
        var exam = accounts.find(function(account){
            return account.password == OldPass
        })

        if(exam == undefined){
            document.getElementById("errorExamChangePassword").innerHTML = "Invalid Password";
        }
        else{
            document.getElementById("errorExamChangePassword").innerHTML = "";
            var examMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if(examMatKhau.test(NewPass)){
                var dataPost = {
                    id:exam.id,
                    password:NewPass
                }
                var option = {
                    method: 'PATCH', // sửa thì dùng phương thức PATCH
                    headers: {
                            'Content-Type': 'application/json',
                            },
                    body: JSON.stringify(dataPost)
                        }
                fetch(accountApi + '/' + exam.id,option)
                .then(function(response) {
                    return response.json();
                })

                document.getElementById("changePassword").style.display ="none";
            }
            else{
                document.getElementById("errorNewPassword").innerHTML = "The password is not in the correct format";
            }
        }
    })
}

// đăng xuất
function LogOut(){
    window.location = "login.html";
}

function offMusic(){
    var videos = document.querySelector("video");
    videos.autoplay = "false";
}

// thay đổi ánh sáng
var isLight = true;
function changeLight(){
    var Body = document.querySelector("body");
    if(isLight){
        Body.style.backgroundColor = "Black";
        document.getElementById("iconsMoon").setAttribute("class","fa fa-sun");
        document.getElementById("network").style.color = "white";
        document.getElementById("networks").style.color = "white";
        document.getElementById("networkss").style.color = "white";
        document.getElementById("lightSCV").style.color = "white";
        document.getElementById("lightSCV2").style.color = "white";

       
        isLight = false;
      
        
    }
    else{
        Body.style.backgroundColor = "White";
        document.getElementById("network").style.color = "black";
        document.getElementById("networks").style.color = "black";
        document.getElementById("networkss").style.color = "black";
        document.getElementById("lightSCV").style.color = "black";
        document.getElementById("lightSCV2").style.color = "black";
        
        document.getElementById("iconsMoon").setAttribute("class","fa fa-moon")
        isLight = true;
    }
}

