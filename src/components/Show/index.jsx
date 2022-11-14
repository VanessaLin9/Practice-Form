import { useLocation } from "react-router-dom";
import ShowPage1 from "./ShowPage1";
import ShowPage2 from "./ShowPage2";

const Show = () => {
  const location = useLocation();
  let info = <p>請填寫訂單</p>

  if (location.pathname === '/page1/show'){
    // TODO 轉址
    if (!location.state) return;
    // 整理資料送到子層
    const {state} = location;
    const e = state.feed.filter(eat => eat.finish).map(eat => eat.label).join(',') 
    const data = {...state, feed: e}
    info = <ShowPage1 state={data}/>
  } else if (location.pathname === '/page2/show'){
    // TODO 轉址
    if (!location.state) return;
    const {state} = location;
    info = <ShowPage2 state={state}/>
  }
 

  return (
    <section className="container p-4">
      {info}
    </section>
  )
};

export default Show;