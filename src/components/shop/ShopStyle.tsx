import styled from "styled-components";
import Card from "../Card";

export const ShopIntroWrapper = styled(Card)`
  .cover-image {
    background-image: url(/assets/images/banners/shop-cover.png);
    background-size: cover;
    background-position: center;
  }
  
 .ShopHeader_nav{
   background-color:transparent;
    display: grid!important;
    grid-template-columns: auto 58.3333333333%;
    justify-content: center;
    padding-left:0px;
    height:300px
 }
 
.Rightpage{
  list-style:none;
  padding-left:10px;
  margin-top:50px;
  margin-left:-60px;
}
ul li:nth-child(1) {
  font-size:20px;
  margin-bottom:15px;
  font-weight:bold;
  color:blue;
}
ul li:nth-child(2) {
  font-size:35px;
  font-weight:bold;
  line-height:50px;
}
    @media only screen and (max-width: 760px) {
    div.ShopHeader_nav.starts{
      display:none!important;
    }
  }
  

`;
