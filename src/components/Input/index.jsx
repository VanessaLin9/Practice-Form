import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const eatSomething = [{label:'早餐', finish:false}, {label:'午餐', finish:false}, {label:'晚餐', finish:false}]

// TODO Email validation
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// 6 type input
const Input = ()=> {
  const [text, setText] = useState('')
  const [radio, setRadio]= useState('yes')
  const [checkBox, setCheckBox] = useState(eatSomething)
  const [select, setSelect] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [validateResult, setValidateResult] = useState('')
  const [base64, setBase64] = useState('')

  useEffect(()=> {
    const isValidateEmail = validateEmail(emailInput)
    setValidateResult(isValidateEmail)
  }, [emailInput])

  const atInputChange= (e) => {
    const idx = e.target.dataset.index/1
    const newCheckBox = checkBox.concat()
    newCheckBox[idx].finish = !newCheckBox[idx].finish
    setCheckBox(newCheckBox)
  }
  const atFileChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (evt) => {
      setBase64(evt.target.result)
    }
    reader.readAsDataURL(file)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const data = {
      text,
      radio,
      checkBox,
      select,
      nameInput,
      emailInput,
      base64,
    }
    console.log(data)
  }

 return (
  <div className="container">
   <div className='title'>useState</div>
   <form className="inputForm" onSubmit={onSubmit}>
  
    <div className="inputBox">
      <p className="hint">請輸入文字:</p>
       <label htmlFor="">
        <input type="text" autoFocus value={text} onChange={(e)=> setText(e.target.value)}/>
      </label>
    </div>
   
    <div className="inputBox">
      <p className="hint">Radio:</p>
      <label htmlFor="">
        <input 
          type="radio" 
          name="radioBoolean"
          className="checkItem"
          value="yes"
          checked={radio ==='yes'}
          onChange={(e)=> setRadio(e.target.value)}/>yes
      </label>
      <label htmlFor="">
        <input 
        type="radio" 
        name="radioBoolean"
        className="checkItem"
        value="no"
        checked={radio ==='no'}
        onChange={(e)=> setRadio(e.target.value)}/>no
      </label>
    </div>

    <div className="inputBox">
      <p className="hint">Checkbox:</p>
       {checkBox.map(({label, finish}, index)=> {
        return (
          <label key={label}>
            <input 
            data-index={index}
            className="checkItem"
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

    <div className="inputBox">
      <p className="hint">MutiInput:</p>
      <div className="mutiBox">
        <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Name"/>
        <p>ok</p>
      </div>
      
      <div className="mutiBox">
        <input type="text" value={emailInput} onChange={(e)=> setEmailInput(e.target.value)} placeholder="Email" />
        <p>{validateResult? 'ok': 'error'}</p>
      </div>
    </div>

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

    <div className="inputBox submitBtn">
      <button type='submit' className="">submit</button>
      <Link to='page2'>next page</Link>
    </div>
    
   </form>
   </div>
  )
}

export default Input