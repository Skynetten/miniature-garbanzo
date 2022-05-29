import { deleteData } from "../Services/Data"

function Delete({ setDel, selected, setInvoices, invoices }) {


    const changeDel = () => {
        return setDel();
    }

    const deleteRow = async (e) => {
        e.preventDefault();
        const temp = {
            sl_no: selected
        }
        deleteData(temp)
            .then((response) => {


                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })


        return changeDel();
    }

    return (

        <div className="overlay">
            <p className="overlay-heading">Delete</p>

            <form onSubmit={deleteRow}>
                <p>Delete these records ?</p>

                <div className="row">
                    <button type="submit" className=" col-6 btn btn-outline-secondary btn-block" >Delete</button>
                    <button type="button" onClick={changeDel} className=" col-6 btn btn-outline-secondary">Cancel</button>
                </div>

            </form>



        </div>
    );
}

export default Delete;