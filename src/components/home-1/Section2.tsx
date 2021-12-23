import Box from "@component/Box";
import Products from "pages/vendor/products";
import React, { useEffect, useState } from "react";
import Reference from "yup/lib/Reference";
import useWindowSize from "../../hooks/useWindowSize";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard1 from "../product-cards/ProductCard1";
import SearchBox from "../../components/search-box/SearchBox";


const Section2: React.FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
 <div style={{marginTop:"5%"}}>
   <div style={{marginBottom:"5%"}}>
      <SearchBox/>
   </div>
  <CategorySectionCreator
      iconName="light"
      title="Category"
      seeMoreLink="#"
    >
      <Box mt="-0.25rem" mb="1.25rem">
        <Carousel totalSlides={10} visibleSlides={visibleSlides}>
          {productList.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard1
                id={ind}
                imgUrl={item.imgUrl}
                title={item.title}
                refer={item.refer}
                Products={item.Products}
                key={ind}
                responsive="fixed"
                height={150}
                width={150}
                color={item.color}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
     </div>
  );
};

const productList = [
  
  {
    imgUrl: "/assets/images/products/new/Animation.svg",
    title:"Animation",
    refer:"Tutorial, rigs, and assets",
    Products:"Explore Products",
    color:"#7073BE"
  },
  {
    imgUrl: "/assets/images/products/new/Books.svg",
    title:"App & Software",
    refer:"+ plugins and presets",
    Products:"Explore Products",
    color:"red"
  },
  {
    imgUrl: "/assets/images/products/new/Comedy.svg",
    title:"Books & Writing",
    refer:"stories, books, and guides",
    Products:"Explore Products",
    color:"secondary"
  },
  {
    imgUrl: "/assets/images/products/new/Phone.svg",
    title:"Comedy",
    refer:"stand-up laughs",
    Products:"Explore Products",
    color:"orange"
  },
  {
    imgUrl: "/assets/images/products/new/Animation.svg",
    title:"Animation",
    refer:"Tutorial, rigs, and assets",
    Products:"Explore Products",
    color:"#4F4CB6"
  },
  {
    imgUrl: "/assets/images/products/new/Books.svg",
    title:"App & Software",
    refer:"+ plugins and presets",
    Products:"Explore Products",
    color:"#4F4CB6"
  },
  {
    imgUrl: "/assets/images/products/new/Comedy.svg",
    title:"Books & Writing",
    refer:"stories, books, and guides",
    Products:"Explore Products",
    color:"primary"
  },
  {
    imgUrl: "/assets/images/products/new/Phone.svg",
    title:"Comedy",
    refer:"stand-up laughs",
    Products:"Explore Products",
    color:"primary"
  },
];

export default Section2;
