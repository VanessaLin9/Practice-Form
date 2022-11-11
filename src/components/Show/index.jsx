// import { useState } from 'react';
import { useLocation } from "react-router-dom";

const Show = () => {
  const location = useLocation();
  let info = <p>請填寫訂單</p>
  if (location.state){
    const {state} = location;
    const e = state.feed.filter(eat => eat.finish).map(eat => eat.label).join(',')
    info = (
      <>
        <p>以下是您的訂單資訊: </p>
        <br></br>
        <hr/>
        <br></br>
        <p>{state.name}</p>
        <p>{state.gender === '0'?'girl':'boy'}</p>
        <p>{state.email}</p>
        
        <p>{state.baw}</p>
        <p>{state.phone}</p>
        <p>{e}</p>
        <p>{state.framework}</p>
      </>
    )
  }

  return (
    <section className="container p-4">
      {info}
    </section>
  )
};

export default Show;