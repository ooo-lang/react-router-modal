import { Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom"
import useModalRoute from "../hooks/useModalRoute"

const Next = () => {
  const { startModalPath } = useModalRoute();

  return (
    <Container maxWidth="lg">
      <h2>次ページ</h2>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => startModalPath("/modal-top")} variant="contained">
          モーダルダイアログ
        </Button>
        <Button component={Link} to="/" variant="outlined">
          戻る
        </Button>
      </Stack>
    </Container>
  );
}

export default Next;