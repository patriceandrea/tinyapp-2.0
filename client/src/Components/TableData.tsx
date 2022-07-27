import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';

export interface ITableDataProps { }



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





interface IRow {
  long_url: string;
  short_url: string;
  user_id: string;
}

const defaultRows: IRow[] = [];


const TableData: React.FunctionComponent<ITableDataProps> = (props) => {

  const [rows, setRows]: [IRow[], (rows: IRow[]) => void] = React.useState(defaultRows);

  useEffect(() => {
    axios.get('http://localhost:8001/urls/urls', { withCredentials: true }).then(res => {
      setRows(res.data)
    })
  }, []);


  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Long URL</StyledTableCell>
            <StyledTableCell>Short URL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.user_id}>
              <StyledTableCell component="th" scope="row">
                {row.long_url}
                Long
              </StyledTableCell>
              <StyledTableCell >{row.short_url}
              </StyledTableCell>
              <Stack spacing={2} direction="row">
                <Box mt={0.9}>
                  <Button variant="contained" href="edit" >
                    Edit
                  </Button>
                  <Button variant="contained" style={{ background: 'red' }}>Delete</Button>
                </Box>
              </Stack>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
};

export default TableData; 