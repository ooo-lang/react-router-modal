import { Button, DialogActions } from '@mui/material';
import useModalRoute from '../hooks/useModalRoute';

const ModalNext = () => {
  const { endModalPath } = useModalRoute();

  return (
    <>
      <img src="../../public/valley-90388_1280.jpg" alt="" />
      <DialogActions>
        <Button onClick={() => endModalPath()} variant='outlined'>
          閉じる
        </Button>
      </DialogActions>
    </>
  )
}

export default ModalNext;