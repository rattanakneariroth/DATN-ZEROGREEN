import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/zerogreen-logo.png";
// import {FaUserAlt} from "react-icons/fa";
// import { AiOutlineShoppingCart} from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";



const options ={
            burgerColor : "#5E7863" ,
            burgerColorHover:"#5E7863" ,
            logo,
            logoWidth:"20vmax",
            navColor1:"#F2E5D7",
            logoHoverSize:"10px",
            logoHoverColor:"#5E7863",
            link1Text:"Home",
            link2Text:"Products",
            link3Text:"About",
            link4Text:"Contact",


            link1Url:"/",
            link2Url:"/products",
            link3Url:"/about",
            link4Url:"/contact",
            
            link1Size:"1.3vmax"  ,         
            link1Color:"rgba(35, 35, 35,0.8)",
            nav1justifyContent:"flex-end",
            nav2justifyContent:"flex-end",
            nav3justifyContent:"flex-start",
            nav4justifyContent:"flex-start",
            link1Margin:"2vmax",
            link1ColorHover:"#5E7863",
            profileIconUrl:"/login",
            // link2ColorHover:"#5E7863",
            // link3ColorHover:"#5E7863",
            // link4ColorHover:"#5E7863",
            
            // link2Margin:"2vmax",
            // link3Margin:"0",
            // link4Margin:"2vmax",

            //How to show icon on header
            // profileIcon:true ,      
            // ProfileIconElement:{FaUserAlt},
            // cartIcon:true,
            // CartIconElement:{AiOutlineShoppingCart},
            // searchIcon:true,
            // SearchIconElement:{BsSearch},

            

            profileIconColor:"rgba(35, 35, 35,0.8)",
            searchIconColor:"rgba(35, 35, 35,0.8)",
            cartIconColor:"rgba(35, 35, 35,0.8)",

            profileIconColorHover:"#5E7863",
            searchIconColorHover:"#5E7863",
            cartIconColorHover:"#5E7863",


            cartIconMargin:"2vmax",
            // searchIconSize:"2vmax",
            // cartIconSize:"2vmax",
            // profileIconSize:"2vmax",

};

const Header = () => {
    return  <ReactNavbar {...options}/>;
    
    
       
};

export default Header;