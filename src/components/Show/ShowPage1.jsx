const ShowPage1 = (props)=> {
  const {state} = props;
  

  return (
  <div className="p-8">
    <p className="text-lg font-semibold">以下是您的訂單資訊: </p>
    <br></br>
    <hr/>
    <br></br>
    <p>name: {state.name}</p>
    <p>gender: {state.gender === '0'?'girl':'boy'}</p>
    <p>email: {state.email}</p>
    <p>phone: {state.phone}</p>
    <p>feed: {state.feed}</p>
    <p>framework: {state.framework}</p>
  </div>
  )
}

export default ShowPage1