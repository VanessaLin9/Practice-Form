import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { phoneValidate } from '../../helper';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

const todoList = [{label: '阿土麵', finish: false}, {label: '炒板條', finish: false}, {label: '薑絲炒大腸', finish: false}]


export default function Sec(){
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [base64 , setBase64] = useState('');
  const navigation = useNavigate();

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
       console.log(newData)
    } else {
      console.log(data)
    }
    navigation('/page2/show', {state: data})
    console.log('react router dom Submit')
  }

  return(
    <div className='container'>
      <div className='title'>使用 react hook form 管理表單資訊</div>
      <form className="inputForm" onSubmit={handleSubmit(atSubmit)}>
        <div className="inputBox">
          <p className="hint">是否有過敏食材:</p>
          <div>
            <input className='border-2 px-1' type="text" placeholder='本店不提供香菜' {...register('text', {required: true})}/>
          {errors.text && <span>This field is required</span>}
          </div>
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
            <input 
              className='border-2 px-1' 
              type="text" 
              placeholder="姓名" 
              {...register('name', {required: true, maxLength: 20 })}/>
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="mutiBox">
            <InputMask 
              className='border-2 px-1' 
              type="text" 
              placeholder="0911-123456"
              mask="0\999-999999" 
              {...register('tel', {required: true, pattern: phoneValidate })}/>
            {errors.tel && <span>This field is required</span>}
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
          <button type='submit' className="bg-gray-500 m-3 px-2 rounded">submit</button>
        </div>
      </form>
    </div>
  )
}