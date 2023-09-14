import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

const Top = () => {
  return (
    <Container maxWidth="lg">
      <h2>トップページ</h2>
      <Button component={Link} to="/next" variant="contained">次へ</Button>
    </Container>
  );
};

export default Top;