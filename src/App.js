
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import { useEffect } from "react";
import { getData } from "./Services/Data";
import { useState } from "react";
import { tableNames }from "./Services/tableNames" 
import Add from "./Components/Add";
import './Assets/Style/darkOverlay.css'
import Footer from "./Components/Footer";
import NoData from "./Assets/Transition/NoData.js";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";


function App() {

  
  const [invoices, setInvoices] = useState();
  const [add, setAdd] = useState(false);
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [reload, setReload] = useState(0);
  const [selected,setSelected] = useState([]);

  

  useEffect(() => {
    getData()
      .then(tableData => {
        return setInvoices(tableData);
      })
      .catch((err)=>{
        return console.log("No Server response ");
      })

  }, [reload])

  const changeInvoices = (invo) =>{
    return setInvoices(invo)
  }
  const changeAdd = () => {
    return setAdd(!add);
  }
  
  const changeReload = (value) =>{
    return setReload(value);
  }

  const changeDel = () =>{
    const temp = !del && selected.length > 0;
    return setDel(temp);
  }

  const changeEdit = () =>{
    const temp = !edit && selected.length === 1;
    return setEdit(temp);
  }
  
  
  const changeSelected = (newSelected) =>{
    console.log(selected.length);
    return setSelected(newSelected)
}

  return (
    <>
      <div className={add||del||edit?" dark-overlay App":"App"}>
        <Header />
        {invoices != null ? <Grid  setReload={changeReload} invoices={invoices} setAdd={changeAdd} selected={selected} setDel={changeDel} setSelected={changeSelected} setEdit={changeEdit} tableNames={tableNames}/> : <NoData/>}
        {add ? <Add setAdd={changeAdd} invoices={invoices}/> : ''}
        {edit ? <Edit setEdit={changeEdit} selected={selected} invoices={invoices}/> : ''}
        {del ? <Delete setDel={changeDel} setInvoices={changeInvoices} selected={selected} invoices={invoices}/> : ''}
        <Footer />
      </div>
    </>
  );
}

export default App;
