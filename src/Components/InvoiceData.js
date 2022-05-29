import { Checkbox, TableCell, TableRow } from "@mui/material";

function InvoiceData({ invoice }) {
    return (
        
        <>
            
            <TableCell className="table-cell">{invoice.Buisness_code}</TableCell>
            <TableCell className="table-cell">{invoice.cust_number}</TableCell>
            <TableCell className="table-cell">{invoice.buisness_year}</TableCell>
            <TableCell className="table-cell">{invoice.doc_id}</TableCell>
            <TableCell className="table-cell">{invoice.clear_date}</TableCell>
            <TableCell className="table-cell">{invoice.posting_date}</TableCell>
            <TableCell className="table-cell">{invoice.document_create_date}</TableCell>
            <TableCell className="table-cell">{invoice.due_in_date}</TableCell>
            <TableCell className="table-cell">{invoice.invoice_currency}</TableCell>
            <TableCell className="table-cell">{invoice.document_type}</TableCell>
            <TableCell className="table-cell">{invoice.total_open_amount}</TableCell>
            <TableCell className="table-cell">{invoice.baseline_create_date}</TableCell>
            <TableCell className="table-cell">{invoice.cust_payment_terms}</TableCell>
            <TableCell className="table-cell">{invoice.invoice_id}</TableCell>
        </>
    );
}

export default InvoiceData;