import styled from "styled-components";
 const Main_propertie=styled.div`
//  * {
//  margin: 0;
//  padding: 0;
//  font-family: 'Lato', sans-serif;
// }

html,body {
 height:fit-content;
 width: 100%;
 margin: 0;
 background-color: rgb(255, 255, 255)!important;
 overflow:hidden;
}
 h1{
    font-size:40px;
}
.Main_propertie{
   background-color:red;
   
}
.Main_contents {
   height: fit-content;
   margin-bottom: -10px;
   padding-left:0px;
}
button:focus,
input:focus,
select:focus,
textarea:focus {
   outline: none;
}
.Row {
   height: 100%;
}

.boxes img {
   height: 20px;
   padding-left: 0px;
   
}

.boxes {
   padding-left: 50px!important;
   display:flex;
   flex-direction:column;
}

.boxes h6 {
   font-size: 1.4rem;
   font-weight: bold;
   padding-top:20px;
   color:#19233C;
   margin-bottom:3px;
   
}

.boxes label {
   font-size: 12px;
   padding: 10px 0px 10px 22px;
   background-color: transparent;
   padding-left:0px;
   padding-top:0px;
   color:rgba(139, 147, 167, 1);
   font-weight:600;
}

.box_1 {
   height: 27vh;
   width: 175px;
   background-color: rgba(245, 236, 254, 1);
   position: absolute;
   top: 24%;
   padding-top: 20px;
   padding-left:20px;
   left:280px;
}

.box_2 {
   height: 27vh;
   width: 175px;
   background-color: rgba(228, 226, 255, 1);
   position: absolute;
   top: 55%;
   left:280px;
   padding-top: 20px;
   padding-left:20px;
}

.box_3 {
   height: 27vh;
   width: 175px;
   background-color: rgba(215, 227, 252, 1);
   position: absolute;
   left: 33%;
   top: 33%;
   padding-top: 20px;
   padding-left:20px;
}

.box_4 {
   height: 27vh;
   width: 175px;
   background-color: rgb(223, 228, 236, 1);
   position: absolute;
   top: 64%;
   left: 33%;
   padding-top: 20px;
   padding-left:20px;
}

.small_box_1 {
   height: 35px;
   width: 35px;
   border: 2px solid rgba(245, 236, 254, 1);
   position: absolute;
   top: 154px;
   left: 262px;
   background-color: transparent;
}

.small_box_2 {
   height: 35px;
   width: 35px;
   border: 2px solid rgba(228, 226, 255, 1);
   position: absolute;
   top: 186px;
   left: -18px;
   background-color: transparent;
}

.small_box_3 {
   height: 35px;
   width: 35px;
   border: 2px solid rgba(215, 227, 252, 1);
   position: absolute;
   top: -16px;
   left: 163px;
   background-color: transparent;
}

.small_box_4 {
   height: 35px;
   width: 35px;
   border: 2px solid rgb(222, 226, 235);
   position: absolute;
   top: 180px;
   left: 163px;
   background-color: transparent;
}

.Main_btn {
   border-radius: 20px;
   color: white;
   background-color: rgba(112, 115, 190, 1);
   border: 0px;
   position: absolute;
   margin-top: 30px;
   padding: 10px 10px;
}

.Get-started {
   padding-top: 90px!important;
}
.Anycolor{
   color:#7073be;
}
.welcome{
    color:rgba(112, 115, 190, 1);
    letter-spacing:3px;
    font-size:17px;
   }
   .Crypto{
      color:rgba(139, 147, 167, 1);
   }
p.product_style {
   flex-wrap: nowrap!important;
   font-size: 50px;
   font-weight: bold;
   line
}

.rect {
   height: 210px;
   width: 225px;
   border: 16px solid rgba(250, 251, 253, 1);
   position: absolute;
   top: 270px;
   left: 239px;
   background-color: transparent;
}

.rect_2 {
   height: 210px;
   width: 215px;
   border: 16px solid rgba(250, 251, 253, 1);
   position: absolute;
   top: 340px;
   left: 516px;
   background-color: transparent;
}
@media only screen and (min-width:320px) and (max-width:763px) {
   .row {
       display: flex;
       flex:1;
       flex-direction: column;
      position: absolute;
      top:100px;
   }
   p.product_style {
       font-size: 32px;
   }
   .boxes{
      position: absolute;
      top:150px;

   }
}
@media only screen and (max-width:1024px) {
   .container.Main_content.side_content {
       height: fit-content;
   }
   .Main_contents{
      height:43vh;
   }

   .box_1 {
       height: 160px;
       width: 140px;
       top: 190px;
       left:140px;
   }
   .box_2 {
      height: 160px;
      width: 140px;
       top: 378px;
       left:140px;
   }
   .box_3 {
       height: 160px;
       width: 140px;
       top: 280px;
       left:310px;
   }
   .box_4 {
       height: 160px;
       width: 140px;
       top: 460px;
       left:310px;
   }
   .boxes h6 {
       font-size: 1.1rem;
       font-weight: 600;
   }
   .rect {
       top: 130px;
       left: 11px;
   }
   .small_box_1 {
      top: 174px;
      left: 122px;
      background-color: transparent;
   }
   
   .small_box_2 {
      top: 146px;
      left: -18px;
      background-color: transparent;
   }
   
   .small_box_3 {
      top: -16px;
      left: 123px;
      background-color: transparent;
   }
   
   .small_box_4 {
      top: 140px;
      left: 123px;
      background-color: transparent;
   }
   .rect {
      width:200px;
      top: 270px;
      left: 78px;
      background-color: transparent;
   }
   
   .rect_2 {
      width:200px;
      top: 340px;
      left: 308px;
      background-color:transparent;
   }
   p.product_style{
      font-size:38px;
   }
}
@media only screen and (max-width: 769px) {
   .Main_contents{
      height:50vh;
   }
   .boxes h6 {
       font-size: 1.3rem;
       font-weight: 600;
   }
   .welcome {
       font-size: 18px!important;
   }
   .box_1 {
       height: 160px;
       width: 140px;
       top: 170px;
       left: 11%;
   }
   .box_2 {
       height: 160px;
       width: 140px;
       top: 348px;
       left: 11%;
   }
   .box_3 {
       height: 160px;
       width: 140px;
       top: 230px;
       left: 32%;
   }
   .box_4 {
       height: 160px;
       width: 140px;
       top: 410px;
       left: 32%;
   }
   p.product_style {
       flex-wrap: nowrap!important;
       font-size: 25px;
       font-weight: 600;
   }
   .Get-started {
       padding-top: 60px!important;
       padding-left: 70px!important;
       line-height: 26px!important;
   }
   .Main_btn {
       padding: 5px 0px;
   }
   .welcome {
       letter-spacing: 3px;
   }
   .small_box_1 {
       position: absolute;
       top: 146px;
       left: 68px;
   }
   .small_box_2 {
       position: absolute;
       top: 149px;
       left: -18px;
   }
   .small_box_3 {
       position: absolute;
       top: -17px;
       left: 123px;
       background-color: transparent;
   }
   .small_box_4 {
       position: absolute;
       top: 139px;
       left: 120px;
       background-color: transparent;
   }
   .rect {
      height: 196px;
       width: 185px;
       position: absolute;
       top: 230px;
       left: 40px;
       background-color: transparent;
   }
   .rect_2 {
       height: 196px;
       width: 185px;
      //  border: 16px solid rgb(240, 240, 240);
       position: absolute;
       top: 300px;
       left: 242px;
       background-color: transparent;
   }
   .product_style {
       font-size: 24px!important;
   }
   p.Crypto {
       font-size: 13px;
   }
   
}
@media only screen and (max-width: 500px) {
   .Main_contents{
      height:90vh;
   }
   .row {
       height: 240px;
       padding-left:10px;
   }
   .background_circle_1 {
       left: 110px;
   }
   .boxes h6 {
       font-size: 1.1rem;
       font-weight: 600;
   }
   .boxes.pt-5 {
       padding-left: 20px!important;
   }
   .box_1 {
       height: 130px;
       width: 120px;
       position: absolute;
       top: 50px;
   }
   .box_2 {
       height: 130px;
       width: 120px;
       position: absolute;
       top: 190px;
   }
   .box_3 {
       height: 130px;
       width: 120px;
       position: absolute;
       left: 50%;
       top: 100px;
   }
   .box_4 {
       height: 130px;
       width: 120px;
       position: absolute;
       top: 240px;
       left: 50%;
   }
   .Main_btn {
       position: absolute;
       top: 640px;
       left: 120px;
       margin: auto!important;
   }
   .Get-started {
       padding-top: 40px!important;
       padding-left: 40px!important;
       line-height: 30px!important;
   }
   .row-1,
   .row-2 {
       display: flex;
       flex-direction: column!important;
   }
   .small_box_1 {
       position: absolute;
       top: 34px;
       left: 22px;
   }
   .small_box_2 {
       top: 109px;
   }
   .small_box_3 {
       position: absolute;
       left: 100px!important;
       background-color: transparent;
   }
   .small_box_4 {
       top: 110px!important;
       left: 100px!important;
   }
   .rect {
       position: absolute;
       top: 130px;
       left: 7px!important;
       background-color: transparent;
       height: 150px;
       width: 150px;
   }
   .rect_2 {
       position: absolute;
       top: 160px;
       left: 197px!important;
       border: 16px solid rgba(250, 251, 253, 1);
       background-color: transparent;
       height: 150px;
       width: 150px;
   }
}
@media (max-width: 320px) {
   .Main_contents{
      height:120vh;
   }
   .rect_2 {
      position: absolute;
      top: 160px;
      left: 172px!important;
      border: 16px solid rgba(250, 251, 253, 1);
      background-color: transparent;
      height: 150px;
      width: 141px;
  }
  .Get-started {
   padding-top: 0px!important;
   padding-left: 20px!important;
   line-height: 27px!important;
}
p.product_style {
   font-size: 23px!important;
   line-height: 33px!important;
   font-weight: 1000;
}
.boxes{
   top:100px;
}
.Crypto{font-size:10px!important;}

}
.welcome{
   font-size:13px!important;
   letter-spacing:2px;
}
 .box_3,.box_4{
    margin-left:5px;
 }
 
 
 `;
 export default Main_propertie