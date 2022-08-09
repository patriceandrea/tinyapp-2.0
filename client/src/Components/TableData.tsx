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
import { useNavigate } from 'react-router-dom';
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


type Url = {
  long_url: string;
  short_url: string;
  user_id: string;
  id: number;
}

interface TableUrlsProps {

}

const TableUrls: React.FunctionComponent<TableUrlsProps> = (props: TableUrlsProps) => {
  let navigate = useNavigate()

  const [urls, setUrls] = React.useState<Url[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  React.useEffect(() => {
    axios.get('http://localhost:8001/urls/urls', { withCredentials: true }).then(res => {
      setUrls(res.data);
    })
  }, []);

  const handleDelete = (id: number) => {

    axios.delete(`http://localhost:8001/urls/delete/${id}`, { withCredentials: true })
      .then((res) => {
        if (res.status === 204) {
          const updatedUrls = urls.filter((url: Url) => { return id !== url.id })
          setUrls(updatedUrls);
        } else {
          setErrorMessage(res.data.message);
        }
      })
      .catch((err) => console.log(err))
  }


  const handleUpdate = (id: number) => {
    navigate(`/edit/${id}`)

  }

  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Long URL</StyledTableCell>
            <StyledTableCell>Short URL</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url: Url) => (
            <StyledTableRow key={url.id}>
              <StyledTableCell component="th" scope="row">
                {`ID - ${url.id}`}: {url.long_url}
              </StyledTableCell>
              <StyledTableCell >
                {url.short_url}
              </StyledTableCell>
              <StyledTableCell>
                <Stack spacing={2} direction="row">
                  <Box mt={0.9}>
                    <Button variant="contained" key={url.id} onClick={(value: React.MouseEvent<HTMLButtonElement>) => (handleUpdate(url.id))} >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      style={{ background: 'red' }}
                      onClick={(value: React.MouseEvent<HTMLButtonElement>) => (handleDelete(url.id))}
                    >
                      Delete
                    </Button>
                    <>
                      {errorMessage === '' ? (null) : (errorMessage)}
                    </>
                  </Box>
                </Stack>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
};

export default TableUrls; 