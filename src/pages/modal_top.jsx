import { Button, DialogActions } from '@mui/material';
import useModalRoute from "../hooks/useModalRoute"

const ModalTop = () => {
  const { goModalPath } = useModalRoute();

  return (
    <>
      <img src="../../public/hills-2836301_1280.jpg" alt="" />
      <DialogActions>
        <Button onClick={() => goModalPath("/modal-next")} variant='contained'>
          次へ
        </Button>
      </DialogActions>
    </>
  );
}

export default ModalTop;