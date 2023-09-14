import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const useModalRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const background = useSelector((state) => state.background);

  const startModalPath = (to) => {
    dispatch({
      type: 'CHANGE_LOCATION',
      payload: location,
    });
    navigate(to, {state: { background: location } });
  };

  const endModalPath = () => {
    navigate(`${background?.pathname.replace(/\/+$/, "")}/${background?.search}`);
  }
  
  const goModalPath = (to) => {
    navigate(to, { state: { background: background } });
  };

  return { startModalPath, endModalPath, goModalPath };
}

export default useModalRoute;