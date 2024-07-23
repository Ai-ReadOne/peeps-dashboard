import { Button, Typography } from "@mui/material";

function Profile() {
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ py: 2.5, borderRadius: "8px" }}
      >
        <Typography variant="body2" fontWeight={600} letterSpacing={1}>
          Sign in
        </Typography>
      </Button>
    </>
  );
}

export default Profile;
