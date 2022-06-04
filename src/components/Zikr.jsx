import React from "react";
import Style from "./Zikr.module.css";
import { useState } from "react";
const Zikr = () => {
  let [count, setCount] = useState(0);
  let [count2,setCount2] = useState(0)
  let [count3,setCount3] = useState(0)
  const [change,setChange] = useState(false)

  function cik(){
    change ? setChange(false) : setChange(true)
  }
function reset(){
    setCount(count = 0)
    setCount2(count2 = 0)
    setCount3(count3 = 0)

}


  function plus() {
    setCount(count + 1);
    setCount(count == 33 ? count = 33 : count = count + 1)
  }
  function plus2(){
    setCount2(count2 + 1);
    setCount2(count2 == 33 ? count2 = 33 : count2 = count2 + 1)
  }

  function plus3(){
    setCount3(count3 + 1);
    setCount3(count3 == 33 ? count3 = 33 : count3 = count3 + 1)
  }
  return (
    <div className={Style.header}>
      <h2 className={change ? Style.zago : Style.zagoArb} onClick={cik}>الذكر</h2>
      <h2 className={change ? Style.zagoArb :Style.zago  } onClick={cik}>Зикр </h2>

      <h3 className={Style.bismi}>бисмилля́хи-р-рахма́ни-р-рахи́м</h3>
      <h1>{count + count2 + count3 === 99?  count + count2 + count3 == 0 : count + count2 + count3}</h1>
      <div className={Style.buttons}>
        <div className={Style.button_child}>
        <h3>1 .</h3> <button onClick={plus}>Субханаллах</button>
          <h2>{count}</h2>
        </div>
        <div className={Style.button_child}>
        <h3>2 .</h3> <button onClick={plus2}>Аль-ха́мду ли-Лля́х</button>
          <h2>{count2}</h2>
        </div>
        <div className={Style.button_child}>
         <h3>3 .</h3> <button onClick={plus3}>Алла́ху А́кбар</button>
          <h2>{count3}</h2>
     
        </div>
        <div className={Style.oneBtn}>
        <button onClick={reset}>restart</button>
        </div>
      </div>
    </div>
  );
};

export default Zikr;
