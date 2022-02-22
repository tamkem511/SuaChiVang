  var ProductSales = [
        {
            id:1,
            nameProduct:"Combo 5 chai trà sữa",
            price:"360.000đ",
            img:'<img src="img/combo 5 chai trà sữa.jpg" alt="">',
            title:"Sản phẩm sữa chua hoa quả với 5 vị khác nhau, hương vị trái câu thơm ngon mát lành"
        },
        {
            id:2,
            nameProduct:"Combo 3 chai sữa thanh trùng",
            price:"160.000đ",
            img:'<img src="img/combo 3 sản phẩm sữa thanh trùng.jpg" alt="">',
            title:"Sữa tươi bò,dê thanh trùng không đường đảm bảo chất lượng thơm ngon không chất bảo quản"
        },
        {
            id:3,
            nameProduct:"Bánh Sữa dê non vị nhạt",
            price:"25.000đ",
            img:'<img src="img/bánh sữa non.jpg" alt="">',
            title:"Bánh sữa dê có đường vị ngọt thanh ăn đậm vị ,không gây béo phì"
        },
        {
            id:4,
            nameProduct:"Combo sữa chua mic đủ vị",
            price:"60.000đ",
            img:'<img src="img/Combo sữa chua 4 mùa đủ vị.jpg">',
            title:"Sữa chua 4 mùa có 4 vị : nếp cẩm ,trà xanh,phô mai,dê giúp các bạn thưởng thức đủ vị không nhàm chán"
        },
        {
            id:5,
            nameProduct:"Sữa Tươi bò có đường",
            price:"30.000đ",
            img:'<img src="img/sữa tươi bò.jpg">',
            title:"Sữa tươi bò tuyệt trùng,uy tín chất lượng không chất kích thích, không chất bảo quản"
        }
  ];


  var fastProducts = [
    {
        id:19,
        nameProduct:"Bánh Sữa",
        price:"130.000đ",
        img:' <img src="img/bánh sữa kẹo lạc.jpg" alt="">',
        title:"Bánh sữa kẹo lạc sản phẩm mới nhưng chất lượng cực kì hợp vị với mọi khách hàng"
    },
    {
        id:12,
        nameProduct:"Sữa Chua",
        price:"60.000đ",
        img:'<img src="img/sữa chua nếp cẩm size nhỏ.jpg" alt="">',
        title:"Sữa chua nếp cẩm size nhỏ là sản phẩm được bán chạy nhất vào những dịp tết nguyên đán"
    },
    {
        id:13,
        nameProduct:"Sữa Chua",
        price:"60.000đ",
        img:'<img src="img/sữa chua phô mai size nhỏ.jpg" alt="">',
        title:"Sữa chua phô mai là sản phẩm ưa thích của trẻ em ,có hương vị thơm ngon thích thú"
    },
    {
        id:3,
        nameProduct:"Bánh Sữa",
        price:"25.000đ",
        img:'<img src="img/bánh young cake.jpg" alt="">',
        title:"Bánh sữa young cake là sản phẩm mới có hương vị sữa độc đáo lạ miệng rất phù hợp làm kẹo tết"
    },
    {
        id:16,
        nameProduct:"Sữa Tươi",
        price:"30.000đ",
        img:'<img src="img/sữa tươi bò.jpg">',
        title:"Sữa tươi bò tuyệt trùng,uy tín chất lượng không chất kích thích, không chất bảo quản"
    },
    {
        id :1,
        nameProduct:"Bánh Sữa" ,
        price:"30.000đ",
        img:' <img src="img/bánh sữa nhân phô mai.jpg" alt="">',
        title:"Bánh kẹo sữa nhân phô mai bên ngoài dòn tan bên trong vị bơ béo ngậy ăn cả ngày không chán"
      },
      {
        id:24,
        nameProduct:"Sữa Tươi",
        price:"80.000đ",
        img:'<img src="img/combo sữa tươi dê thanh trùng và tuyệt trùng.jpg">',
        title:"Sữa tươi không đường không gây béo phì và giúp trẻ nhỏ tăng chiều cao cho trẻ "
    },
    {
        id:27,
        nameProduct:"Bánh Sữa",
        price:"220.000đ",
        img:'<img src="img/combo bánh sữa dê.jpg">',
        title:"Bánh sữa dê chế biến và sản xuất 100% sữa dê đặc không pha chế,ăn đậm vị thơm ngon và vừa miệng"
    },
    {
        id:30,
        nameProduct:"Kem",
        price:"8.000đ",
        img:'<img src="img/kem mic trứng nếp cẩm.jpg">',
        title:"Sữa chua mic vị giúp quý khách thưởng thức không bị nhàm chán với 4 loại hương vị khác nhau"
    },
    {
        id:31,
        nameProduct:"Kem Socola",
        price:"12.000đ",
        img:'<img src="img/Kem nhân sữa bọc socola.jpg">',
        title:"Bánh sữa socola không chỉ ngon mà còn có thể tặng người yêu dịp valentine sắp tới cho các cặp đôi"
    },
    {
        id:34,
        nameProduct:"Sữa Chua",
        price:"60.000đ",
        img:'<img src="img/Combo sữa chua 4 mùa đủ vị.jpg">',
        title:"Sữa chua mic vị giúp quý khách thưởng thức không bị nhàm chán với 4 loại hương vị khác nhau"
    },
    {
        id:2,
        nameProduct:"Bánh Sữa",
        price:"25.000đ",
        img:'<img src="img/bánh sữa non.jpg" alt="">',
        title:"Bánh sữa Socola không chỉ ngon mà còn sử dụng để ăn sau bữa cơm giúp tiêu hóa tốt"
    },
];


function coutDown(){
   var d = new Date();
   var RenderDay = document.getElementById("renderDay");
   var RenderHour = document.getElementById("renderHours");
   var RenderMinute = document.getElementById("renderMinute")
   var RenderSeconds = document.getElementById("renderSeconds");

   RenderDay.innerHTML = d.getDate();
   RenderHour.innerHTML = d.getHours();
   RenderMinute.innerHTML = d.getMinutes();
   RenderSeconds.innerHTML = d.getSeconds();
}
setInterval(function(){
    coutDown();
},1000)


var ProductSalesPerPage= 1;
var currentPage = 1;
var start = 0;
var end= ProductSalesPerPage;
var totalPage =  Math.ceil(ProductSales.length / ProductSalesPerPage);

function renderProduct() {
    var html='';
    var render = document.getElementById("listProductSale");
    var exam = ProductSales.map(function (product,index) {
        if(index  >= start &&  index < end){
           
            return `
            <div id="imgProductSale">
              ${product.img}
        </div>
        <div id="infoProductSale">
            <div id="Brand">
                <h2>Sữa Chị Vàng</h2>
            </div>
            <div id="nameBrandSale">
                <h3> ${product.nameProduct}</h3>
            </div>
            <div id="infoBrandName">
                <h4>${product.title}</h4>
            </div>
        </div>
        
           `
        }
})
    render.innerHTML = exam.join("");
}
// renderProduct();

function next() {
    currentPage++;
    if(currentPage > totalPage){
        currentPage = 1;
    }
 
        start = (currentPage - 1)*ProductSalesPerPage;
        end  =  (currentPage)*ProductSalesPerPage;
        
        renderProduct();
}


setInterval(function(){
    next();
},5000)




var ProductFastPerPage= 5;
var currentFastPage = 0;
var start = 0;
var end= ProductFastPerPage;
var totalPage =  Math.ceil(fastProducts.length / ProductFastPerPage);

function renderFastProduct() {
    var render = document.getElementById("listProductFastSell");
    var exam = fastProducts.map(function (product,index) {
        if(index  >= start &&  index < end){
            return `
            <div id="productSales">
                    <div id="imgProductSales">
                        ${product.img}
                    </div>
                    <div id="content_productSales">
                        <div id="price_ProductSales">
                            <span>${product.price}</span>
                        </div>
                        <div id="name_ProductSales">
                            <span>${product.nameProduct}</span>
                        </div>
                        <div id="info_ProductSales">
                            <span>${product.title}</span>
                        </div>
                        <div id="star_ProductSales">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div id="book_ProductSales">
                            <button onclick="ConfirmSell(${product.id})">BOOK NOW</button>
                        </div>
                    </div>
                </div>
        
           `
        }
})
    render.innerHTML = exam.join("");
}

setTimeout(function(){
    renderFastProduct();
},1000)



function NextSlide() {
    currentFastPage++;
    if(start > 5 && end > 9){
        currentFastPage = 0 ;
    }
 
        start = (currentFastPage*5)/ProductFastPerPage;
        end = ((currentFastPage+5)*5)/ProductFastPerPage;
        
        renderFastProduct();
}

function BackSlide() {
    currentFastPage--;
    if(currentFastPage < 0){
        currentFastPage = 4 ;
    }
 
        start = (currentFastPage*5)/ProductFastPerPage;
        end = ((currentFastPage+5)*5)/ProductFastPerPage;
        
        renderFastProduct();
}


function Slide1(){
    currentFastPage++;
    if(currentFastPage > totalPage){
        currentFastPage = 1;
    }
 
        start = 0;
        end  =  5;
        
        renderFastProduct();
}

function Slide2(){
    currentFastPage++;
    if(currentFastPage > totalPage){
        currentFastPage = 1;
    }
 
        start = 1;
        end  =  6;
        
        renderFastProduct();
}

function Slide3(){
    currentFastPage++;
    if(currentFastPage > totalPage){
        currentFastPage = 1;
    }
 
        start = 2;
        end  =  7;
        
        renderFastProduct();
}

function Slide4(){
    currentFastPage++;
    if(currentFastPage > totalPage){
        currentFastPage = 1;
    }
 
        start = 3;
        end  =  8;
        
        renderFastProduct();
}

function Slide5(){
    currentFastPage++;
    if(currentFastPage > totalPage){
        currentFastPage = 1;
    }
 
        start = 4;
        end  =  9;
        
        renderFastProduct();
}

function Slide6(){
    currentFastPage++;
    if(currentFastPage > totalPage){
        currentFastPage = 1;
    }
 
        start = 5;
        end  =  10;
        
        renderFastProduct();
}