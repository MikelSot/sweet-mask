import { useUsers } from 'mock2/context/user.context'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'

const userLogin = [
  {
    id: 1,
    name: 'Juan Francia Sánchez',
    email: 'juan@gmail.com',
    password: 'password',
    uri: '@juan'
  },
  {
    id: 2,
    name: 'Juan Francia Sánchez',
    email: 'admin@gmail.com',
    password: 'admin123',
    uri: '@admin'
  }
]

interface IFormInput {
  email: String
  password: String
}

type Props = {}

const ModalLogin = (props: any) => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const router = useRouter()
  const { users }: any = useUsers()

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const { email, password } = data

    const userData = users.find((user: any) => user.email === email && user.password === password)

    if (userData) {
      window.sessionStorage.setItem('isUserLogin', userData.uri)
      window.sessionStorage.setItem('isUserAccess', userData.access)
      props.closeModal()
      router.push(`/`)
      return
    }

    alert('Los datos ingresados son incorrectos, verifique y vuelva a intentarlo')
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-8">
        <div className="w-full grid gap-5">
          <label htmlFor="login-user">Usuario</label>
          <input
            className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
            id="login-user"
            type="email"
            defaultValue={'admin2022@gmail.com'}
            {...register('email', { required: true })}
            // placeholder="Escriba su usuario"
          />
        </div>
        <div className="w-full grid gap-5">
          <label htmlFor="login-password">Contraseña</label>
          <input
            className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
            id="login-password"
            type="password"
            defaultValue={'admin'}
            {...register('password', { required: true })}
            // placeholder="Escriba su contraseña"
          />
        </div>
      </div>
      <div className="grid gap-8 mb-8">
        <p className="text-red-500">¿Olvidaste la contraseña?</p>
        <button
          type="submit"
          className={`w-full m-auto text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
          `}
        >
          Iniciar Sesión
        </button>
        <p className="text-right">
          ¿No tienes cuenta? <span className="text-red-500">Crea tu cuenta ahora</span>
        </p>
      </div>
    </form>
  )
}

export default ModalLogin
