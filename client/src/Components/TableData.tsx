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


const rows = [
  {
    "longURL": "http://www.lighthouselabs.ca",
    "user_id": "38jd48"
  },
  {
    "longURL": "http://www.google.com",
    "user_id": "9sd4u3"
  },
  {
    "longURL": "https://pomofocus.io/app",
    "user_id": "2fw44e"
  },
  {
    "longURL": "https://www.facebook.com/",
    "user_id": "user2RandomID"
  },
  {
    "longURL": "https://web.compass.lighthouselabs.ca/days/today",
    "user_id": "87ybe6"
  },
  {
    "longURL": "http://ryan.com",
    "user_id": "user2RandomID"
  },
  {
    "longURL": "http://bar.com",
    "user_id": "userRandomID"
  }
];



const TableData: React.FunctionComponent<ITableDataProps> = (props) => {
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
              {/* <StyledTableCell component="th" scope="row">
                {row.shortUrl}
              </StyledTableCell> */}
              <StyledTableCell >{row.longURL}
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