import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

   async function handleSubmit(){

       await fetch("https://vinidb.onrender.com/login", {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           credentials: 'include',
           body: JSON.stringify({ email, password })
       }).then(res => {
         if(res.status === 200){
           navigate("/");
         }
       }

       );
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

                    <p className="font-mono font-semibold text-2xl text-center mb-12">Login</p>

                    <input placeholder="Seu email: " class="
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
                        Logar
                    </button>
                </div>

                <div className="flex gap-4 justify-center items-center">
                  <RouterLink to={'/Register'}>
                    <p className="text-center">Registrar</p>
                  </RouterLink>
                </div>

            </div>
        </div>
    )
}