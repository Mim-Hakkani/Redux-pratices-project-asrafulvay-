import { CHANGEIMAGE } from "../actionTypes/actionTypes";
const initialImage = "";
const changeBgImage = (state = initialImage, { type, payload }) => {
  switch (type) {
    case CHANGEIMAGE:
      return (state = payload);
    default:
      return state;
  }
};

export default changeBgImage
