import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'


const LoginPage = ({ onClickAuthenticateButton }) => {
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const onSubmit = (data) => {
    console.log("Bienvenido "+data.nombre+" "+data.apellido); 
    onClickAuthenticateButton(data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input {...register('nombre', {required: true})}  /> 
        {errors.nombre && <p>El nombre es necesario.</p>}


        <label>Apellido</label>
        <input {...register('apellido', { required: true })} />
        {errors.apellido && <p>El apellido es necesario.</p>}


        <label>Edad</label>
        <input {...register('edad', { pattern: /^\d+$/ })} />
        {errors.edad && <p>La edad tiene que ser un numero.</p>}


        <label>Correo Electrónico</label>
        <input {...register('email', {required: true, pattern: /\S+@\S+\.(com|ucsp.edu.pe)$/ })} />
        {errors.email && <p>Tiene que tener el formato de correo.</p>}


         <label>Contraseña</label>
        <input type="password" {...register('contrasena', { minLength: 5 })} />
        {errors.contrasena && <p>Debe tener minimo 5 caracteres.</p>}

        <label>Dirección</label>
        <input {...register('direccion', { minLength: 10})} />
        {errors.direccion && <p>Debe tener minimo 10 caracteres.</p>}



        

        <input type="submit"  />  

    </form>

    <Link to='/dashboard'>Intenta ir al dashboard </Link>
    </>
  );
  
}

export default LoginPage


