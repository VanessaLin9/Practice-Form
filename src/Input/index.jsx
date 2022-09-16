import { useState } from 'react'
const eatSomething = [{label:'早餐', finish:false}, {label:'午餐', finish:false}, {label:'晚餐', finish:false}]

const Input = ()=> {
  const [text, setText] = useState('')
  const [radio, setRadio]= useState('yes')
  const [checkBox, setCheckBox] = useState(eatSomething)
  const [select, setSelect] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [base64, setBase64] = useState('')

  const atInputChange= (e) => {
    const idx = e.target.dataset.index /1
    const newCheckBoxArr = checkBox.concat()
    newCheckBoxArr[idx].finish = !newCheckBoxArr[idx].finish
    setCheckBox(newCheckBoxArr)
  }
  const atFileChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (evt) => {
      setBase64(evt.target.result)
    }
    reader.readAsDataURL(file)
  }

  return (
  <div className="container">

   <form className="inputForm">
    <div className="inputBox">
      <p className="hint">請輸入文字:</p>
       <label htmlFor="">
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      </label>
    </div>
   
    <div className="inputBox">
      <p className="hint">radio:</p>
      <label htmlFor="">
        <input 
          type="radio" 
          name="radioBoolean"
          value="yes"
          checked={radio ==='yes'}
          onChange={(e)=> setRadio(e.target.value)}/>yes
      </label>
      <label htmlFor="">
        <input 
        type="radio" 
        name="radioBoolean"
        value="no"
        checked={radio ==='no'}
        onChange={(e)=> setRadio(e.target.value)}/>no
      </label>
    </div>

    <div className="inputBox">
      <p className="hint">checkbox:</p>
       {checkBox.map(({label, finish}, index)=> {
        return (
          <label key={label}>
            <input 
            data-index={index}
            type="checkbox" 
            value={label} 
            checked={finish}  
            onChange={atInputChange}/>
            {label}
          </label>
        )
       })}
    </div>

    <div className="inputBox">
      <p className="hint">下拉選單:</p>
      <select value={select} onChange={(e)=> setSelect(e.target.value)}>
        <option value="" disabled>請選擇</option>
        <option value="React">React</option>
        <option value="Vue2">Vue2</option>
        <option value="Vue3">Vue3</option>
      </select>
    </div>

      {/* TODO validate email */}
    <div className="inputBox">
      <p className="hint">MutiInput:</p>
        <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Name"/>
        <input type="text" value={emailInput} onChange={(e)=> setEmailInput(e.target.value)} placeholder="Email" />
    </div>

    

   </form>
   <div className="inputBox">
      <p className="hint">上傳圖片:</p> 
      <input 
      type="file" 
      accept=".jpg, .png"
      onChange={atFileChange}
      name="file"/>
      <div className="showImg">
       {base64 && <img src={base64} alt="" />}
      </div>
      
    </div>
   </div>
  )
}

export default Input