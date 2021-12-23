import IconButton from "@component/buttons/IconButton";
import Image from "@component/Image";
import { useAppContext } from "@context/app/AppContext";
import Link from "next/link";
import React, { useState } from "react";
import Box from "../Box";
import Categories from "../categories/Categories";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import MiniCart from "../mini-cart/MiniCart";
import SearchBox from "../search-box/SearchBox";
import Login from "../sessions/Login";
import Sidenav from "../sidenav/Sidenav";
import Typography, { Tiny } from "../Typography";
import StyledHeader from "./HeaderStyle";
import UserLoginDialog from "./UserLoginDialog";

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ isFixed, className }) => {
  const [open, setOpen] = useState(false);
  const toggleSidenav = () => setOpen(!open);
  const { state } = useAppContext();
  const { cartList } = state.cart;

  const cartHandle = (
    <FlexBox ml="20px" alignItems="flex-start">
      <IconButton bg="gray.200" p="12px">
        <Icon size="20px">bag</Icon>
      </IconButton>

      {!!cartList.length && (
        <FlexBox
          borderRadius="300px"
          bg="error.main"
          px="5px"
          py="2px"
          alignItems="center"
          justifyContent="center"
          ml="-1rem"
          mt="-9px"
        >
          <Tiny color="white" fontWeight="600">
            {cartList.length}
          </Tiny>
        </FlexBox>
      )}
    </FlexBox>
  );

  const route = [
    {
      pathName :"Home",
      to:"/"
    },
    {
      pathName :"Discover",
      to:"/discover"
    },
    {
      pathName :"Dashboard",
      to:"/vendor/dashboard"
    },
    {
      pathName:"Sell",
      to:"/"
    },
    {
      pathName:"Pricing",
      to:"/"
    }
  ]

  return (
    <StyledHeader className={className}>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <FlexBox className="logo" alignItems="center" mr="1rem">
          <Link href="/">
            <a>
              <Image src="/assets/images/logo.svg" alt="logo" />
            </a>
          </Link>
        </FlexBox>
 
       
           {/* <div style={{display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <Link href="/">
                <Typography>Home</Typography>
             </Link>
             <Link href="/">
                <Typography>Discover</Typography>
             </Link>
           </div> */}
           <FlexBox   width="100%" height="30px">
            <div style={{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",}}>
              {route.map((routes)=>{
                 return (
                  <Link href={routes.to}  >
                      <Typography style={{marginLeft:"30px",fontSize:"18px",fontWeight:"700",cursor:"pointer"}}>{routes.pathName}</Typography>
                  </Link>
                 )
              })}
           </div>
           </FlexBox>
          

        <FlexBox className="header-right" alignItems="center">
          
          <Sidenav
            handle={cartHandle}
            position="right"
            open={open}
            width={380}
            toggleSidenav={toggleSidenav}
          >
            <MiniCart toggleSidenav={toggleSidenav} />
          </Sidenav>
        </FlexBox>
      </Container>
    </StyledHeader>
  );
};

export default Header;
