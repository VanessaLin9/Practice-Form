import { useState } from 'react';
// import { Link } from 'react-router-dom'
import InputMask from 'react-input-mask';
import { emailValidate } from '../../helper';
import { useNavigate } from 'react-router-dom';

const eatSomething = [{label:'早餐', finish:false}, {label:'午餐', finish:false}, {label:'晚餐', finish:false}]

// 6 type input
const Input = ()=> {
const [base64, setBase64] = useState('');
const navigation = useNavigate();
const [state, setState] = useState({
  email: '',
  gender: '0',
  feed: eatSomething,
  framework: '',
  name: '',
  phone: '',
  file: '',
});
const [validate, setValidate] = useState(true)

function atChange(e) {
  const { value, name } = e.target;
  if (name === 'feed') {
  const index = e.target.dataset.index;
  const newArr = state.feed.concat()
  newArr[index].finish = !newArr[index].finish
  setState((pre) => {
    return {
      ...pre,
      feed: newArr,
    } 
    }) 
  } else if (name === 'email') {
    const result = emailValidate.test(value)
    setValidate(result)
    setState((pre) => {
      return {
        ...pre,
        email: value}})
  } else {
     setState((pre) => {
      return {
        ...pre,
        [name]: value}})
  }
}

function atFileChange(e){
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    setBase64(event.target.result)
  }
  reader.readAsDataURL(file)
};

function onSubmit(e){
  e.preventDefault()
  if (base64 !== ''){
    const newData = {
      ...state,
      file: base64,
    }
    console.log(newData)
  } else {
    console.log(state)
  }
  navigation('/page1/show', {state: state})
  console.log('onSubmit')
} 

 return (
  <div className="container">
   <div className='title'>使用 useState 管理表單資訊</div>
   <form className="inputForm" onSubmit={onSubmit}>
    {/* text */}
    <div className="inputBox">
      <p className="hint">Email:</p>
      <input
      type="text"
      name="email"
      value={state.email}
      onChange={atChange}
      placeholder='email@email.com'
      className='border m-1 p-1 border-slate-500' />
      {!validate && <span>inValidate email</span>}
    </div>
    
    {/* radio */}
    <div className="inputBox">
      <p className="hint">Radio:</p>
      <label className='m-1'>Boy
        <input 
        type="radio"
        name="gender" 
        value="0"
        onChange={atChange}
        checked={state.gender === "0"}  
        className='m-1'/>
      </label>
      <label className='m-1'>Girl
        <input 
        type="radio"
        name="gender"  
        value="1"
        onChange={atChange}
        checked={state.gender === "1"} 
        className='m-1'/>
      </label>
    </div>
    
    {/* checkbox */}
    <div className="inputBox">
      <p className="hint">Checkbox:</p>
      {state.feed.map(({label, finish}, index)=> (
        <label key={label}>
          <input 
            type="checkbox"
            name="feed"
            value={label}
            onChange={atChange} 
            data-index={index}
            checked={finish} />
          {label}
        </label>
      ))}
    </div>

    {/* select */}
    <div className="inputBox">
      <p className="hint">Select:</p>
      <select value={state.framework} name="framework" onChange={atChange} >
        <option value="" disabled>Please select</option>
        <option value="Vue">Vue</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
      </select>
    </div>

    {/* muti text */}
    <div className="inputBox">
      <p className="hint">Muti:</p>
      <input 
        type="text" 
        placeholder='name'
        name="name" 
        value={state.name}
        onChange={atChange}/>
      <InputMask 
        type="text" 
        placeholder='0910-123456'
        name="phone"
        mask="0\999-999999"
        value={state.phone}
        onChange={atChange}/>
    </div>

    {/* img upload */}
    <div className="inputBox">
      <p className="hint">Image upload:</p>
      <input 
        type="file"
        name="file"
        accept='.jpg, .png'
        onChange={atFileChange} />
      <div className="showImg">
          {base64 && <img src={base64} alt=""/> }
      </div>
      
    </div>
    
    <div className="inputBox submitBtn">
      <button 
        type="submit" 
        className="bg-gray-500 m-3 px-2 rounded">
          submit
        </button>
    </div>
    
   </form>
   </div>
  )
}

export default Input