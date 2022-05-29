import { TableCell } from "@mui/material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import '../Assets/Style/table.css'

const StyledTableCell = styled(TableCell)(({ }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor:  '#274153'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
    },
}));

function TableTopRowCells({tableName}) {
    return (
        <StyledTableCell className="table-cell">{tableName}&nbsp;</StyledTableCell>
    );
}

export default TableTopRowCells;