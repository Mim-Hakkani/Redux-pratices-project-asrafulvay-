import React from "react";
import { useDispatch } from "react-redux";
import changeBackground from "../redux/actions/backgroundAction";
import { CHANGEIMAGE } from "../redux/actionTypes/actionTypes";

const BackgroundChange = () => {

    const dispatch =useDispatch()
  return (
    <div className="my-5 text-center">
      <select className="select w-full max-w-lg " onClick={(e)=>dispatch(changeBackground(CHANGEIMAGE,e.target.value))} >
        <option disabled selected>
          Pick image for background
        </option>
        <option value="https://wallpaperaccess.com/full/215112.jpg">King-prased</option>
        <option value="https://wallpapercave.com/wp/wp2570965.jpg">Nature</option>
        <option value="https://wallpaperaccess.com/full/439757.jpg">Moon</option>
        <option value="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701385699.jpg">NatureTree</option>
        <option value="https://wallpaperaccess.com/full/439757.jpg">River</option>
      </select>
    </div>
  );
};

export default BackgroundChange;
