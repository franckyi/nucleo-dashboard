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
  companyName: string,
  service: string,
  amount: number,
  deadLine: string,
  companyEmail: string,
  status: string,
) {
  return { companyName, service, amount, deadLine, companyEmail, status };
}

const rows = [
  createData('Some Startup somewhere', 'Web development', 1200, '2023/07/25', 'somestartup@email.com', 'In progress'),
  createData('Nike', 'Web development', 3000, '2019/01/23', 'nike@email.com', 'payed'),
  createData('Jeep', 'Web development', 5200, '2020/08/02', 'jeep@email.com', 'payed'),
  createData('Lebron James', 'Web development', 500, '2022/03/31', 'lj@email.com', 'payed'),
  createData('Coca Cola', 'Web development', 900, '2016/12/20', 'cocacola@email.com', 'payed'),
];

export default function InquiriesTable() {
  return (
    <>
      <TextField id="filled-basic" label="Search by name" variant="filled" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Dead line</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.companyName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.companyName}
                </TableCell>
                <TableCell align="right">{row.service}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.deadLine}</TableCell>
                <TableCell align="right">{row.companyEmail}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
