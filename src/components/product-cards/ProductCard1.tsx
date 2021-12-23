import ProductIntro from "@component/products/ProductIntro";
import { useAppContext } from "@context/app/AppContext";
import { CartItem } from "@reducer/cartReducer";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useCallback, useState } from "react";
import { CSSProperties } from "styled-components";
import Box from "../Box";
import Button from "../buttons/Button";
import Card, { CardProps } from "../Card";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Modal from "../modal/Modal";
import { H3, SemiSpan } from "../Typography";
import { StyledProductCard1 } from "./ProductCardStyle";

export interface ProductCard1Props extends CardProps {
  className?: string;
  style?: CSSProperties;
  imgUrl?: string;
  title?: string;
  price?: number;
  off?: number;
  rating?: number;
  id?: string | number;
  responsive:string ;
  height:number;
  width:number;
  refer:string;
  Products:string;
  colors:string;
  // className?: string;
  // style?: CSSProperties;
  // imgUrl: string;
  // title: string;
  // price: number;
  // off: number;
  // rating?: number;
  // subcategories?: Array<{
  //   title: string;
  //   url: string;
  // }>;
}

const ProductCard1: React.FC<ProductCard1Props> = ({
  id,
  imgUrl,
  title,
  price,
  off,
  rating,
  responsive,
  height,
  width,
  refer,
  Products,
  colors,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const { state, dispatch } = useAppContext();
  const cartItem: CartItem = state.cart.cartList.find((item) => item.id === id);

  const toggleDialog = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          name: title,
          qty: amount,
          price,
          imgUrl,
          id,
        },
      });
    },
    []
  );

  return (
    <StyledProductCard1 {...props} style={{borderTop:`4px solid ${colors} `,}}>
      <div className="image-holder">

        <Link href={`/shop/${id}`}>
          <a>
            <Image
              src={imgUrl}
              layout={responsive}
              alt={title}
              width={100}
              height={height}
              width={width}
            />
          </a>
        </Link>
      </div>
      <div className="details">
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
            <Link href={`/shop/${id}`}>
              <a>
                <H3
                  className="title"
                  fontSize="14px"
                  textAlign="left"
                  fontWeight="600"
                  color="text.secondary"
                  mb="10px"
                  title={title}
                >
                  {title}
                </H3>
              </a>
            </Link>


            <FlexBox alignItems="center" mt="10px">
            <Link href={`/shop/${id}`}>
              <a>
                <H3
                  className="title"
                  fontSize="14px"
                  textAlign="left"
                  fontWeight="500"
                  color="grayText"
                  mb="10px"
                  refer={refer}
                >
                  {refer}
                </H3>
              </a>
            </Link>
            </FlexBox>
            <FlexBox alignItems="center" mt="10px">
            <Link href={`/shop/${id}`}>
              <a>
                <H3
                  className="title"
                  fontSize="14px"
                  textAlign="left"
                  fontWeight="600"
                  color={colors}
                  mb="10px"
                  Products={Products}
                >
                  {Products}
                </H3>
              </a>
            </Link>
            </FlexBox>
          </Box>

          <FlexBox
            flexDirection="column-reverse"
            alignItems="center"
            justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"}
            width="30px"
          >
            {/* <div className="add-cart"> */}
            <Button
              variant="outlined"
              color={colors}
              size="25px"
              borderColor={colors}
              padding='3px'
              marginBottom='10px'
              borderRadius="30px"
            >
              <Icon variant="small" color="white">arrow-right</Icon>
            </Button>

           
          </FlexBox>
        </FlexBox>
      </div>

      <Modal open={open} onClose={toggleDialog}>
        <Card p="1rem" position="relative">
          <ProductIntro imgUrl={[imgUrl]} title={title} price={price} id={id} />
          <Box
            position="absolute"
            top="0.75rem"
            right="0.75rem"
            cursor="pointer"
          >
            <Icon
              className="close"
              color="primary"
              variant="small"
              onClick={toggleDialog}
            >
              close
            </Icon>
          </Box>
        </Card>
      </Modal>
    </StyledProductCard1>
  );
};

ProductCard1.defaultProps = {
  id: "324321",
  title: "KSUS ROG Strix G15",
  imgUrl: "/assets/images/products/macbook.png",
  off: 50,
  price: 450,
  rating: 0,
};

export default ProductCard1;
