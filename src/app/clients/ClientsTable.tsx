import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function createData(
  name: string,
  location: string,
  firstInquiry: string,
  totalInquiries: number,
  totalPayed: number,
  email: string,
  isActive: boolean,
) {
  return { name, location, firstInquiry, totalInquiries, totalPayed, email, isActive };
}

const rows = [
  createData('Nike', 'Baltimore\, US', '2019/01/23', 2, 3000, 'nike@email.com', true),
  createData('Jeep', 'New York\, US', '2020/08/02', 4, 13500, 'jeep@email.com', true),
  createData('Lebron James', 'Los Angeles\, US', '2022/03/31', 1, 3500, 'lj@email.com', true),
  createData('Coca Cola', 'Paris\, FR', '2016/12/20', 1, 7000, 'cocacola@email.com', true),
  createData('Some Startup somewhere', 'Torino\, IT', '2023/07/25', 7, 9000, 'somestartup@email.com', true),
];

export default function ClientsTable() {
  return (
    <>
      <TextField id="filled-basic" label="Search by name" variant="filled" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">First inquiry date</TableCell>
              <TableCell align="right">Total inquiries</TableCell>
              <TableCell align="right">Total payed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.firstInquiry}</TableCell>
                <TableCell align="right">{row.totalInquiries}</TableCell>
                <TableCell align="right">{row.totalPayed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
