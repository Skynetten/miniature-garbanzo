import { useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
function Button({setDel, setAdd, setEdit, setReload ,invoices }) {

    const [basicSearch, setBasicSearch] = useState();
    
    const changeBasicSearch = (e) =>{
        setBasicSearch(e.target.value);
    }

    const changeEdit = ()=>{
        return setEdit();
    }


    const changeTheAdd = () => {
        return setAdd();
    }

    const changeReload = () => {
        const temp = Math.random() * 1000;
        console.log(temp);
        return setReload(temp);
    }

    const changeDel = ()=>{
        return setDel();
    }
    return (

        <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group px-1 mb-2" role="group" >
                <button type="button" className="btn btn-primary px-5">Predict</button>
                <button type="button" className="btn btn-outline-primary px-5">Analytics View</button>
                <button type="button" className="btn btn-outline-primary px-5">Advance Search</button>
            </div>
            <div className="btn-group mb-2" role="group" >
                <button type="button" onClick={changeReload} className="btn btn-outline-primary" ><AiOutlineReload /></button>
            </div>
            <div class="input-group px-1 mb-2">
                <input type="text" class="form-control" value={basicSearch} onChange={changeBasicSearch} placeholder="Search Customer Id" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
            </div>
            <div className="btn-group px-3 mb-2" role="group" >
                <button type="button" className="btn btn-primary px-5" onClick={changeTheAdd}>Add</button>
                <button type="button" className="btn btn-outline-primary px-5" onClick={changeEdit}>Edit</button>
                <button type="button" className="btn btn-outline-primary px-5" onClick={changeDel}>Delete</button>

            </div>
        </div>

    );
}

export default Button;