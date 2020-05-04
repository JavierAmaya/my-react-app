import React,{useState,useEffect} from "react";
import {} from "react-router-dom";
import Header2,{} from "../components/header2";
import {getSuppliers} from "../services/supplier"
import Card2 from "../components/card2";

const Suppliers:React.FC = () =>{

    const [suppliers, setSupplier]= useState([]);
    const [update, setUpdate]= useState(true);

    interface IDataSupplier{
        SupplierID:number
        SupplierName: string
        ContactName:string
        Address:string
        City:string
        PostalCode:string
        Country:string
        Phone:string
    }

    useEffect(()=>{
        if(update){
            getSuppliers().then( r=>{                
                setUpdate(false);
                setSupplier(r.data);
            });
        }      
    },[update]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);

    return (
       <div>
           <Header2/>
           <div>
              {suppliers.map((sup: IDataSupplier, index)=>(
                <Card2
                    title = {sup.SupplierName}
                    rtn = {sup.Phone}
                    direccion = {sup.Address}
                />
              ))} 
           </div>
       </div>
    )
}

export default Suppliers;