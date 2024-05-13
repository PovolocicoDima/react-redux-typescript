import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../store/action-creators/index";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators.default, dispatch);
};
