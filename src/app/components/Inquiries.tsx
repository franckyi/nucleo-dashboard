import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  location: string,
  status: string,
  amount: number,
) {
  return { id, date, name, location, status, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Coca Cola',
    'Tupelo, MS',
    'yes',
    10120.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Nike',
    'London, UK',
    'yes',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Jeep', 'Boston, MA', 'no', 1000.81),
  createData(
    3,
    '16 Mar, 2019',
    'Lebron James',
    'Gary, IN',
    'yes',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Lidle',
    'Long Branch, NJ',
    'no',
    212.79,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Inquiries() {
  return (
    <React.Fragment>
      <Title>Recent Inquiries</Title>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more inquiries
      </Link>
    </React.Fragment>
  );
}
