import React from "react";
import FormInput from "./components/FormInput/FormInput";
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <FormInput />
      </div>
     
    </div>
  );
};

export default App;
