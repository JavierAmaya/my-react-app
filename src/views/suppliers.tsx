import React,{useState,useEffect} from "react";
import {} from "react-router-dom";
import Header2,{} from "../components/header2";
import Header,{} from "../components/header";
import Card, {} from "../components/cards";
import {getSuppliers} from "../services/supplier"

const Suppliers:React.FC = () =>{

    const [suppliers, setSupplier]= useState([]);
    const [update, setUpdate]= useState(true);

    
    useEffect (()=>{},[])

    return (
       <div>
           <Header2/>
       </div>
    )
}

export default Suppliers;