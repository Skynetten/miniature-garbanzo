import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Checkbox, Table, TableCell, TablePagination, TableContainer, TableHead, TableRow } from "@mui/material";
import TableDataRow from "./TableDataRow";
import TableTopRowCells from "./TableTopRowCells";
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#274153',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function Tables({ tableNames, setSelected, selected, invoices }) {
    // Pagination

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rowCount, setRowCount] = useState(0);

    console.log(selected," : Selected");
    // Selects all the checkboxes
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            console.log("select all clicked");
          const newSelected = invoices.map((invoice) => invoice.sl_no);
          setSelected(newSelected);
          return;
        }
        else{
            setSelected([]);
        }
      };
    
      

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const lastIndex = invoices.at(-1).sl_no + 1;
    console.log(lastIndex, " : Last Index");

    return (
        <>
            <TableContainer sx={{ maxHeight: 538 }} className="table-data">
                <Table stickyHeader size="small">
                    <TableHead  >
                        <TableRow >
                            <StyledTableCell padding="checkbox">
                                {/* Primary checkbox this selects all */}
                                <Checkbox
                                    color="primary"
                                    indeterminate={selected.length > 0 && selected.length< rowCount}
                                    checked={rowCount > 0 && selected.length === rowCount}
                                    onChange={handleSelectAllClick }
                                    
                                />
                            </StyledTableCell>
                            {tableNames.map((tableName, index) => {
                                return <TableTopRowCells key={index} tableName={tableName} />
                            })}
                        </TableRow>
                    </TableHead>
                    <TableDataRow selected={selected} setSelected={setSelected}rowsPerPage={rowsPerPage} page={page} invoices={invoices} />
                </Table>


            </TableContainer>

            <TablePagination
                colSpan={3}
                rowsPerPageOptions={[10]}
                count={invoices.length}
                rowsPerPage={rowsPerPage}
                page={page}
                component="div"
                sx={{ borderBottom: 0 }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}

            />
        </>
    );
}

export default Tables;