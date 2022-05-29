import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import InvoiceData from "./InvoiceData";



function TableDataRow({ selected, setSelected, invoices, rowsPerPage, page }) {

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const handleClick = (event, sl_no) => {
        const selectedIndex = selected.indexOf(sl_no);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, sl_no);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };
    return (
        <TableBody>
            {(rowsPerPage > 0
                ? invoices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : invoices
            ).map((invoice) => {
                const isItemSelected = isSelected(invoice.sl_no);
                return <TableRow sx={{
                    '&:last-child td, &:last-child th': { border: 0 }
                }}
                    onClick={(event) => handleClick(event, invoice.sl_no)}
                >
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            checked={isItemSelected}
                        />
                    </TableCell>
                    <TableCell className="table-cell">
                        {invoice.sl_no} 
                    </TableCell>
                    <InvoiceData invoice={invoice}/>
                </TableRow>
            })}
        </TableBody>
    );
}

export default TableDataRow;