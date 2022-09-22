import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

const todoList = [{label: '阿土麵', finish: false}, {label: '炒板條', finish: false}, {label: '薑絲炒大腸', finish: false}]


export default function Sec(){
  const { register, handleSubmit } = useForm();
  const [base64 , setBase64] = useState('');

  const atFileChange =(e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (evt) => {
      setBase64(evt.target.result)
    }
    reader.readAsDataURL(file)
 }
  const atSubmit = (data) => {
    if(base64 !== ''){
      const newData = {
        ...data,
        img: base64
      }
      return console.log(newData)
    }
    console.log(data)
  }

  return(
    <div className='container'>
      <div className='title'>react hook form</div>
      <form className="inputForm" onSubmit={handleSubmit(atSubmit)}>
        <div className="inputBox">
          <p className="hint">是否有過敏食材:</p>
          <input type="text" placeholder='本店不提供香菜' {...register('text', {required: true})}/>
        </div>

        <div className="inputBox">
          <p className="hint">加辣:</p>
            <label className="checkItem">
              <input type="Radio" name="hot?" {...register("hotSauce")} value='add'/>加辣
            </label>
            <label className="checkItem">
              <input type="Radio" name="hot?" {...register("hotSauce")} value='no'/>不加辣
            </label>
        </div>

        <div className="inputBox">
          <p className="hint">主食:</p>
          {todoList.map(({label})=>{
            return(
              <label key={label}>
                <input 
                  className="checkItem" 
                  type="checkbox"
                  {...register("checkbox")}
                  value={label}
                  />
                {label}
              </label>
            )
          })}
          
        </div>

        <div className="inputBox">
          <p className="hint">湯品:</p>
          <select {...register('soup')}>
            <option value="" disabled>請選擇</option>
            <option value="玉米濃湯">玉米濃湯</option>
            <option value="酸辣湯">酸辣湯</option>
            <option value="水晶餃湯">水晶餃湯</option>
          </select>
        </div>

        <div className="inputBox">
          <p className="hint">取餐資訊:</p>
          <div className="mutiBox">
            <input type="text" placeholder="姓名" {...register('name', {required: true, maxLength: 20 })}/>
          </div>
          <div className="mutiBox">
            <input type="text" placeholder="手機" {...register('tel', {required: true, maxLength: 10})}/>
          </div>
        </div>

        <div className="inputBox">
          <p className="hint">上傳圖片:</p>
          <input 
           type="file" 
           accept=".jpg, .png"
           name='file' 
           onChange={atFileChange}/>
          <div className="showImg">
            {base64 && <img src={base64} alt=""/>}
          </div>
        </div>

        <div className="inputBox submitBtn">
          <button type='submit'>submit</button>
          <Link to='/'>prev page</Link>
        </div>
      </form>
    </div>
  )
}