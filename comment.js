var commentsAPI = "http://localhost:3000/comments";


var positionX = 0;
var index = 0;
function nextSlider(){
    var renderSlider = document.getElementById("renderSlider");
    var slideMain = document.getElementById("slideMain");
    var listSlide = document.querySelectorAll(".listSlide");
    var listSlideWidth = listSlide[0].offsetWidth
    
    positionX = positionX - listSlideWidth;
console.log(positionX);
slideMain.style = `transform :translateX(${positionX}px)`;
}

function prevSlider(){
    var renderSlider = document.getElementById("renderSlider");
    var slideMain = document.getElementById("slideMain");
    var listSlide = document.querySelectorAll(".listSlide");
    var listSlideWidth = listSlide[0].offsetWidth
    
    positionX = positionX + listSlideWidth;
console.log(positionX);
slideMain.style = `transform :translateX(${positionX}px)`;
}


function renderComment(){

    fetch(commentsAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(comments){
        var listCMT = document.getElementById("slideMain");
        var renderCMT = comments.map(function(comment,index){
            if(index >=0 && index < 3){
                listCMT.innerHTML += `
                 <div class="listSlide">
                    <div class="slider-items">
                        ${comment.img}
    
                        <div id="likeComment">
                            <div>
                            <i class="fa fa-heart"></i>
                            </div>
                            <div id="client${comment.id}">
                            ${comment.like}
                            </div>
                        </div>
    
                        <div id="contentComment">
                            <div id="name_And_time">
                                <h3>${comment.nameClient}</h3>
                                <div>${comment.time}</div>
                            </div>
                            <div id="bodyComment">${comment.cmt}</div> 
                            <div id="follow_and_addfriend">
                                <button onclick="clickLike(${comment.id})" class="likeCMT" value="${comment.id}">Thích</button>
                                <button>Kết Bạn</button>
                            </div>
                        </div>
                    </div>
                 </div>
    
                 `
            }
    
            if(index >=3 && index < 6){
                listCMT.innerHTML += `
                <div class="listSlide">
                    <div class="slider-items">
                        ${comment.img}
    
                        <div id="likeComment">
                            <div>
                            <i class="fa fa-heart"></i>
                            </div>
                            <div id="client${comment.id}">
                            ${comment.like}
                            </div>
                        </div>
    
                        <div id="contentComment">
                            <div id="name_And_time">
                                <h3>${comment.nameClient}</h3>
                                <div>${comment.time}</div>
                            </div>
                            <div id="bodyComment">${comment.cmt}</div> 
                            <div id="follow_and_addfriend">
                                <button onclick="clickLike(${comment.id})" class="likeCMT" value="${comment.id}">Thích</button>
                                <button>Kết Bạn</button>
                            </div>
                        </div>
                    </div>
                 </div>
    
    
                 `
            }
    
            if(index >=6 && index < 9){
                listCMT.innerHTML += `
                <div class="listSlide">
                    <div class="slider-items">
                        ${comment.img}
    
                        <div id="likeComment">
                            <div>
                            <i class="fa fa-heart"></i>
                            </div>
                            <div id="client${comment.id}">
                            ${comment.like}
                            </div>
                        </div>
    
                        <div id="contentComment">
                            <div id="name_And_time">
                                <h3>${comment.nameClient}</h3>
                                <div>${comment.time}</div>
                            </div>
                            <div id="bodyComment">${comment.cmt}</div> 
                            <div id="follow_and_addfriend">
                                <button onclick="clickLike(${comment.id})" class="likeCMT" value="${comment.id}">Thích</button>
                                <button>Kết Bạn</button>
                            </div>
                        </div>
                    </div>
                 </div>
    
    
                 `
            }
    
            if(index >=9 && index < 12){
                listCMT.innerHTML += `
                <div class="listSlide">
                    <div class="slider-items">
                        ${comment.img}
    
                        <div id="likeComment">
                            <div>
                            <i class="fa fa-heart"></i>
                            </div>
                            <div id="client${comment.id}">
                            ${comment.like}
                            </div>
                        </div>
    
                        <div id="contentComment">
                            <div id="name_And_time">
                                <h3>${comment.nameClient}</h3>
                                <div>${comment.time}</div>
                            </div>
                            <div id="bodyComment">${comment.cmt}</div> 
                            <div id="follow_and_addfriend">
                                <button onclick="clickLike(${comment.id})" class="likeCMT" value="${comment.id}">Thích</button>
                                <button>Kết Bạn</button>
                            </div>
                        </div>
                    </div>
                 </div>
    
    
                 `
            }
    
            if(index >=12 && index < 20){
                listCMT.innerHTML += `
                <div class="listSlide">
                <div class="slider-items">
                    ${comment.img}

                    <div id="likeComment">
                        <div>
                        <i class="fa fa-heart"></i>
                        </div>
                        <div id="client${comment.id}">
                        ${comment.like}
                        </div>
                    </div>

                    <div id="contentComment">
                        <div id="name_And_time">
                            <h3>${comment.nameClient}</h3>
                            <div>${comment.time}</div>
                        </div>
                        <div id="bodyComment">${comment.cmt}</div> 
                        <div id="follow_and_addfriend">
                            <button onclick="clickLike(${comment.id})" class="likeCMT" value="${comment.id}">Thích</button>
                            <button>Kết Bạn</button>
                        </div>
                    </div>
                </div>
             </div>

                 `
            }
        })
    })

}

setTimeout(function() {
    renderComment();
})




function sendComment(){
    var linkIMG = document.getElementById("link").value;
    var yourName = document.getElementById("enterYourName").value;
    var enterComment = document.getElementById("enterComment").value;
    var Time = new Date();
    console.log(Time)

    var dataPost = {
        nameClient:yourName,
        cmt:enterComment,
        time:Time,
        img:`<img src="${linkIMG}">`,
        like:0
    }
    var option = {
            
            method: 'POST', // thêm mới thì dùng post
            headers: {
                    'Content-Type': 'application/json',
                    },
            body: JSON.stringify(dataPost),
        }
        fetch(commentsAPI,option)
        .then(function(response) {
            return response.json();
        })
        renderComment()
}

function order(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("emailOrder").value;
    var phone = document.getElementById("phone").value;
    var productOrder = document.getElementById("productOrder").value;
    var amountOrder = document.getElementById("amountOrder").value;

    if(firstName == "" || lastName == "" || email == ""
       || phone == "" || productOrder == "" || amountOrder == ""){
           alert("Không được bỏ trống trường thông tin nào !")
       }
       else{
           confirm("Cảm ơn quý khách đã đặt hàng, shop sẽ liên hệ lại với bạn qua số điện thoại ở dưới" + "\n"
            + "Frist Name : " + firstName + "\n" + "Last Name : " + lastName + "\n"
            + "Email : " + email + "\n" +  "Phone : " + phone + "\n"
            + "Product Order : " + productOrder + "\n" + "Amount Order : " + amountOrder)
       }
}

// like bài viết




function clickLike(id){
    var amountLike = document.getElementById("client")
    var dataPost = {
        like:parseInt(document.getElementById(`client${id}`).innerHTML) + 1
    }
    var option = {
            
        method: 'PATCH', // thêm mới thì dùng post
        headers: {
                'Content-Type': 'application/json',
                },
        body: JSON.stringify(dataPost),
    }
    fetch(commentsAPI + "/" + id,option)
    .then(function(response) {
        return response.json();
    })
    renderComment()
}