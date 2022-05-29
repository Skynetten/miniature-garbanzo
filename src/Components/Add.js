import { useState } from "react";
import { insertData } from "../Services/Data"
import '../Assets/Style/overlay.css'

function Add({ setAdd, invoices }) {

    //Contains the user-form data
    const [newData, setNewData] = useState({sl_no:0})
    //Form submit Button 
    const changeAdd = () => {
        return setAdd();
    }
    // Controlled Components state for form inputs
    const changeFormData = (e) => {

        const name = e.target.name;
        const val = e.target.value;

        return setNewData({
            ...newData,
            [name]: val
        })

    }
    // Send POST request
    const sendData = async (e) => {
        e.preventDefault();

        // add sl_no
        const lastIndex = invoices.at(-1).sl_no + 1;
        const sentData = {
            ...newData,
            sl_no: lastIndex
        }

        const value = JSON.stringify(sentData);
        console.log(value);
        insertData(value)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
        return changeAdd();
    }

    return (
        <div className="overlay">
            <p className="overlay-heading">Add</p>
            <form onSubmit={sendData}>
                <div id="form-input" class="row g-4">
                    <div className="col-3">
                        <input name="Buisness_code" type="text" className="form-control" placeholder="Business Code" value={newData.Buisness_code} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="cust_number" type="number" className="form-control" placeholder="Customer Number" value={newData.cust_number} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="clear_date" type="date" className="form-control " placeholder="Clear Date" value={newData.clear_date} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="buisness_year" type="number" className="form-control" placeholder="Business Year" value={newData.buisness_year} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="doc_id" type="number" className="form-control" placeholder="Document Id" value={newData.doc_id} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="posting_date" type="date" className="form-control" placeholder="Posting Date" value={newData.posting_date} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="document_create_date" type="date" className="form-control" placeholder="Document Create Date" value={newData.document_create_date} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="due_in_date" type="date" className="form-control" placeholder="Due Date" value={newData.due_in_date} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="invoice_currency" type="text" className="form-control" placeholder="Invoice Currency" required value={newData.invoice_currency} onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="document_type" type="text" className="form-control" placeholder="Document Type" value={newData.document_type} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="area_business" type="text" className="form-control" placeholder="Area Business" value={newData.area_business} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="total_open_amount" type="number" className="form-control" placeholder="Total Open Amount" value={newData.total_open_amount} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="baseline_create_date" type="date" className="form-control" placeholder="Baseline Create Date" value={newData.baseline_create_date} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="cust_payment_terms" type="text" className="form-control" placeholder="Customer Payment Terms" value={newData.cust_payment_terms} required onChange={changeFormData} />
                    </div>
                    <div className="col-3">
                        <input name="invoice_id" type="number" className="form-control" placeholder="Invoice Id" value={newData.invoice_id} required onChange={changeFormData} />
                    </div>


                </div>
                <div className="row">
                    <button type="submit" className=" col-6 btn btn-outline-secondary btn-block" >Add</button>
                    <button type="button" onClick={changeAdd} className=" col-6 btn btn-outline-secondary">Cancel</button>
                </div>
            </form>


        </div>
    );
}

export default Add;