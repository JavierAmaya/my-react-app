import React from "react";
import proveedorImg from "../img/proveedor.png";

interface ICardPropsSupplier{
    title:string
    rtn:string
    direccion:string
}

const Card2 : React.FC<ICardPropsSupplier> = ({title,rtn,direccion})=>(

    <div className="col-4 mt-2">
        <div className="card">
            <div className="row">
                <div className="col-5">
                    <img className="img-fluid" src={proveedorImg} alt="Card image cap"/>
                </div>
                <div className="col-7">
                    <h5 className="card-title">{title}</h5>
                    <small><p className="card-text"><strong>RTN: </strong>{rtn}</p></small>
                    <small><p className="card-text"><strong>Dirección:</strong>{direccion}</p></small>
                </div>
            </div>

        </div>
    </div>

);

export default Card2;