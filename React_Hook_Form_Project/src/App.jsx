import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'

function App() {
 const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting ,errors },
  } = useForm();
  
  async function onSubmit(data){
    //API call ko simulate krte hen
    await new Promise((resolve)=> setTimeout(resolve,5000));
    console.log("submitting the form ", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label >first name:</label>
        <input 
        className={errors.firstName ? 'input-error': ''}
        {...register("firstName",
           { required: true, 
           minLength:{value: 3, message:"Min Length value 3"}, 
           maxLength:{value: 7 ,message:"Max length value 7 "}} )}/> 
              {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}

      </div>
    <br/>
      <div>
        <label >middle name:</label>
         <input
         className={errors.middleName ? 'input-error': ''}
         {...register("middleName")}/>
      </div>
    <br/>

      <div>
        <label >last name:</label>
         <input
         className={errors.lastName ? 'input-error': ''}
         {...register("lastName" , {
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "last name is not written as per rules"
          }
         })}/>
         {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
    <br/>
   
   <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submiting" : "Submit"}></input>

    </form>
  )
}

export default App
