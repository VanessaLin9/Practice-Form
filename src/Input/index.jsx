const eatSomething = ['早餐', '午餐', '晚餐']

const Input = ()=> {
  return (
  <div className="container">

    
   <form className="inputForm">
  
    <div className="inputBox">
      <p className="hint">請輸入文字:</p>
       <label htmlFor="">
        <input type="text" value="" onChange=""/>
      </label>
    </div>
   
    <div className="inputBox">
      <p className="hint">Radio選擇:</p>
      <label htmlFor="">
        <input 
          type="radio" 
          name="radioBoolean"
          checked=""
          onChange=""/>yes
      </label>
      <label htmlFor="">
        <input 
        type="radio" 
        name="radioBoolean"
        value=""
        checked=""
        onChange=""/>no
      </label>
    </div>

    <div className="inputBox">
      <p className="hint">checkbox:</p>
       {eatSomething.map((text)=> {
        return (
          <label key={text}>
            <input type="checkbox" value={text} checked=""  onchange=""/>
            {text}
          </label>
        )
       })}
    </div>

    <div className="inputBox">
      <p className="hint">下拉選單:</p>
      <select value="" onChange="">
        <option value="" disabled>請選擇</option>
        <option value="React">React</option>
        <option value="Vue2">Vue2</option>
        <option value="Vue3">Vue3</option>
      </select>
    </div>

    <div className="inputBox">
      <p className="hint">MutiInput:</p>
        <input type="text" value="" onChange="" placeholder="Name"/>
        <input type="text" value="" onChange="" placeholder="Email" />
    </div>

    

   </form>
   <div className="inputBox">
      <p className="hint">上傳圖片:</p> 
      <input 
      type="file" 
      accept=".jpg, .png"
      onChange=""
      name="file"/>
    </div>
   </div>
  )
}

export default Input