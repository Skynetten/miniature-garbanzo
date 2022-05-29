import { useState } from "react";
import styled from 'styled-components';
import Button from "./Button";
import Tables from "./Tables";


const Div = styled.div`
    background-color: #0a2c45;
    padding: 20px;
`

function Grid({ setDel, setSelected, selected, reload, setEdit,setReload, invoices, tableNames,setAdd, add }) {

  

    return (

        <Div className="container-fluid">
            <Button setAdd={setAdd}  setEdit={setEdit} setReload={setReload} setDel={setDel} invoices={invoices}/>
            <Tables tableNames={tableNames} setSelected={setSelected} selected={selected} invoices={invoices}/>
            
        </Div>
    );
}

export default Grid;
