import x from '../../../public/X.png'
import facebook from '../../../public/Facebook.png'
import youtube from '../../../public/YouTube.png'
import linkedin from '../../../public/LinkedIn.png'
import instagram from '../../../public/Instagram.png'
import logo from '../../../public/logo.png'
import equipe from '../../../public/equipe.png'

export default function Footer() {
    return (
        <div className="
        lg:block
        bg-white
        w-full
        h-[800px]
        lg:h-[700px]
        lg:h-[500px]
        p-10
        lg:p-10
        items-center
        justify-center
        ">
            <div className="
            block
            lg:flex
            lg:gap-28
            ml-0
            lg:ml-26
            font-mono
            font-bold
            ">
                <div className="
                w-[300px]
                lg:w-[400px]
                items-center
                justify-between">

                    <p className="
                    text-lg
                    lg:text-6xl
                    ">
                        Fale conosco
                    </p>

                    <div className="
                    mt-1
                    mb-4
                    text-sm
                    ">
                        <p>Contato: (41)93212-2341</p>
                        <p>Email: vinicontato@gmail.com</p>
                    </div>


                    <input placeholder="Seu email: " className="
                    bg-gray-100
                    w-full
                    h-4
                    lg:h-12
                    mb-4
                    p-4
                    border-1
                    border-gray-300
                    rounded-4xl
                    text-sm
                    hover:border-[#08E9E2]
                    focus:outline-none
                    focus:border-[#08E9E2]
                    "/>

                    <textarea placeholder="Sua mensagem: " className="
                    bg-gray-100
                    w-full
                    h-40
                    p-4
                    mb-2
                    border-1
                    border-gray-300
                    rounded-2xl
                    text-sm
                    hover:border-[#08E9E2]
                    focus:outline-none
                    focus:border-[#08E9E2]
                    "></textarea>

                    <button className="
                    bg-[#03918C]
                    hover:bg-[#08E9E2]
                    hover:border-white
                    border-[#08E9E2]
                    text-white
                    lg: w-full
                    lg: h-16
                    rounded-xl
                    border-2
                    font-semibold
                    cursor-pointer
                    ">
                        Enviar
                    </button>

                </div>

                <div className="
                mt-4
                ">
                    <div className="
                    w-[300px]
                    lg:w-[540px]
                    flex
                    justify-between
                    ">
                        <div className="">
                                <p className="
                                text-lg
                                lg:text-4xl
                                text-center
                                ">
                                Redes Sociais
                                </p>
                            <div className="flex gap-2">
                                <img src={x}/>
                                <img src={linkedin}/>
                                <img src={instagram}/>
                                <img src={youtube}/>
                                <img src={facebook}/>
                            </div>
                        </div>

                        <img src={logo} class="w-14"/>
                    </div>

                        <p class="mt-8">Links Úteis: </p>

                    <div className="
                    block
                    lg:flex
                    justify-between">
                        <div className="font-medium mt-2">
                            <h1 className="underline cursor-pointer">Direitos e privacidade</h1>
                            <h1 className="underline cursor-pointer">Projetos</h1>
                            <h1 className="underline cursor-pointer">Instagram</h1>
                            <h1 className="underline cursor-pointer">Whatsapp</h1>
                        </div>

                        <div className="font-medium mt-2">
                            <h1 className="underline cursor-pointer">FAQs</h1>
                            <h1 className="underline cursor-pointer">Sobre-nós</h1>
                            <h1 className="underline cursor-pointer">Cookies</h1>
                        </div>
                    </div>
                    <img src={equipe} className="
                    w-[540px]
                    mt-10
                    "/>
                </div>
            </div>

        </div>
    )
}