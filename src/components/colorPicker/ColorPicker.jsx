import React, { useState } from 'react';
import { ChromePicker } from "react-color";

function ColorPicker({selectColor, changeColor}) {

  return (
    <ChromePicker
          color= {selectColor}
          onChange={changeColor}
    />
  );
};

export default ColorPicker;