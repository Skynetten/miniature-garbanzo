import { useState } from "react";
import { sendEditData } from "../Services/Data"

function Edit({ setEdit, selected }) {
    
    const [editData, setEditData] = useState({ sl_no: selected[0] })
    
    const changeFormData = (e) => {
        const name = e.target.name;
        const val = e.target.value;

        return setEditData({
            ...editData,
            [name]: val
        })
    }
    const changeEdit = () => {
        return setEdit();
    }

    const changeDatabaseValue = async (e) => {
        e.preventDefault();
        const value = JSON.stringify(editData);
        sendEditData(value)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
            return changeEdit()
    }



    //value={newData.invoice_currency} onChange={changeFormData}
    // value={newData.cust_payment_terms} required onChange={changeFormData}
    return (
        <div className="overlay">
            <p className="overlay-heading">Edit</p>
            <form onSubmit={changeDatabaseValue}>
                <div id="form-input" class="row g-4">

                    <div className="col-6">
                        <input name="invoice_currency" type="text" value={editData.invoice_currency} onChange={changeFormData} className="form-control" placeholder="Invoice Currency" required />
                    </div>

                    <div className="col-6">
                        <input name="cust_payment_terms" type="text" value={editData.cust_payment_terms} onChange={changeFormData} className="form-control" placeholder="Customer Payment Terms" />
                    </div>

                </div>
                <div className="row">
                    <button type="submit" className=" col-6 btn btn-outline-secondary btn-block" >Add</button>
                    <button type="button" onClick={changeEdit} className=" col-6 btn btn-outline-secondary">Cancel</button>
                </div>
            </form>


        </div>
    );
}

export default Edit;