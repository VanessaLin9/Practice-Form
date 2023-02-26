const ShowPage2 = (props)=> {
  const {state} = props;
  
  return (
  <div className="p-8">
    <p className="text-lg font-semibold">以下是您的訂單資訊: </p>
    <br></br>
    <hr/>
    <br></br>
    <p>過敏食材: {state.text}</p>
    <p>辣度: {state.hotSauce === 'add'?'加辣':'不辣'}</p>
    <p>主食: {state.checkbox}</p>
    <p>湯品: {state.soup}</p>
    <p>取餐者姓名: {state.name}</p>
    <p>取餐者電話: {state.tel}</p>
  </div>
  )
}

export default ShowPage2