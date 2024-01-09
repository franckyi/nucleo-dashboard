import Typography from "@mui/material/Typography";
import InquiriesTable from "../dashboard/inquiries/InquiriesTable";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Inquiries() {
  return (
    <>
      <InquiriesTable />
      <Typography variant="h5" color="primary">
        Add new inquiry
      </Typography>
      <Box>
        <TextField
          id="outlined-basic"
          label="Company name"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Service" variant="outlined" />
        <TextField id="outlined-basic" label="Amount" variant="outlined" />
        <TextField id="outlined-basic" label="Dead line" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Status" variant="outlined" />
      </Box>
      <Button variant="contained" color="primary">
        Add item
      </Button>
    </>
  );
}
