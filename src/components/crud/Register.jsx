import {useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";


export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(){
    await fetch("https://vinidb.onrender.com/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ name, email, password })
    }).then(res => {
      if (res.status === 200) {
        navigate("/");
      }
    });
  }

  return (
    <div className="bg-[#000D0D] min-h-screen m-0 p-0 w-full flex flex-col justify-center items-center">
      <div className="
            bg-white
             w-60
             h-100
             lg:w-100
             lg:h-120
             rounded-md
             justify-center
             items-center
             ">

        <div className=" p-4 lg:p-12 justify-center items-center">

          <p className="font-mono font-semibold text-2xl text-center mb-12">Register</p>

          <input placeholder="Seu nome: " className="
                    bg-gray-100
                    w-full
                    h-4
                    lg:h-12
                    mb-4
                    p-4
                    border-1
                    border-gray-300
                    rounded-xl
                    text-sm
                    hover:border-[#08E9E2]
                    focus:outline-none
                    focus:border-[#08E9E2]
                    " onChange={e => setName(e.target.value)}/>

          <input placeholder="Seu email: " className="
                    bg-gray-100
                    w-full
                    h-4
                    lg:h-12
                    mb-4
                    p-4
                    border-1
                    border-gray-300
                    rounded-xl
                    text-sm
                    hover:border-[#08E9E2]
                    focus:outline-none
                    focus:border-[#08E9E2]
                    " onChange={e => setEmail(e.target.value)}/>

          <input placeholder="Sua senha: " className="
                    bg-gray-100
                    w-full
                    h-4
                    lg:h-12
                    mb-4
                    p-4
                    border-1
                    border-gray-300
                    rounded-xl
                    text-sm
                    hover:border-[#08E9E2]
                    focus:outline-none
                    focus:border-[#08E9E2]
                    " onChange={e => setPassword(e.target.value)}/>

          <button className="
                    bg-[#03918C]
                    hover:bg-[#08E9E2]
                    hover:border-white
                    border-[#08E9E2]
                    text-white
                    lg: w-full
                    lg: h-12
                    rounded-xl
                    border-2
                    font-semibold
                    cursor-pointer
                    " onClick={handleSubmit}>
            Registrar
          </button>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <RouterLink to={'/Login'}>
            <p className="text-center">Login</p>
          </RouterLink>

        </div>

      </div>
    </div>
  )
}
