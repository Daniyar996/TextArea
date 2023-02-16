import React from 'react';
import {Input} from "antd";
import appStore from "../store/AppStore";

const TextArea = ({onChange, disabled, ...rest}) => {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return <Input.TextArea onChange={handleChange} {...rest} disabled={appStore.isBusy || disabled}/>
}

export default TextArea;
