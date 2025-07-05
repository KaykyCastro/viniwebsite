import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Me({user}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user.name, user.email]);

  async function handleSubmitUpdate() {
    await fetch("https://vinidb.onrender.com/update", {
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      credentials: 'include',
      body: JSON.stringify({name, email})
    }).then(res => {
      if (res.status === 200) {
        navigate("/Crud");
      }
    })
  }

  async function handleSubmitDelete() {
    await fetch("https://vinidb.onrender.com/delete", {
      method: "DELETE",
      headers: {"Content-type": "application/json"},
      credentials: 'include',
      body: JSON.stringify({email})
    }).then(res => {
      if (res.status === 200) {
        navigate("/");
      }
    })
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

          <p className="font-mono font-semibold text-2xl text-center mb-12">Meus dados</p>

          <input placeholder="Seu nome: " value={name} onChange={(e) => setName(e.target.value)} className="
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
                    " />

          <input placeholder="Seu email: " value={email} onChange={(e)=> setEmail(e.target.value)} className="
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
                    "/>

            <button onClick={handleSubmitUpdate} className="
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
                    mb-2
                    ">
              Update
            </button>

            <button onClick={handleSubmitDelete} className="
                    bg-red-500
                    hover:bg-red-800
                    hover:border-white
                    border-red-600
                    text-white
                    lg: w-full
                    lg: h-12
                    rounded-xl
                    border-2
                    font-semibold
                    cursor-pointer
                    ">
              Deletar
            </button>

        </div>
      </div>
    </div>
  )
};