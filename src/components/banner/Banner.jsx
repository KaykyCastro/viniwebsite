import Header from "../header/Header.jsx";


export default function Banner(){
    return (
        <div class='
        max-w-[1050px]
        h-[700px]
        lg:h-[788px]
        p-4
        lg:p-1
        items-center
        justify-center
        '>

            <Header/>

                <div class='
            flex items-center
            justify-center
            mt-20
            lg:mt-30
            '>

                    <div class='
                    max-w-[1050px]
                    lg:flex
                    items-center
                    justify-center
                    '>

                        <img src='/logo.png'
                             class='
                        md:mr-12
                        '/>

                        <div class='text-[#000D0D]  w-full lg:w-170 pt-4'>
                            <p class='
                        text-white
                         text-lg
                         lg:text-6xl
                         font-mono
                         font-bold
                         mb-6
                         w-full'>
                                Uma equipe completa para o seu projeto
                            </p>
                            <h2 class='
                        hidden
                        md:block
                        text-white
                         text-2xl
                         w-full
                         mb-10
                         text-left
                         text-justify'>
                                Transforme sua ideia em um projeto digital com a Vini.dev. Soluções sob medida, design moderno, tecnologia de ponta e suporte especializado para acelerar o crescimento do seu negócio.
                            </h2>
                            <button class='
                        bg-[#03918C]
                        hover:bg-[#08E9E2]
                        hover:border-white
                        border-[#08E9E2]
                        w-full
                        lg:w-full
                        h-12
                        lg:h-14
                        border-3
                        rounded-lg
                        text-white
                        font-semibold
                        cursor-pointer
                         '>
                                Entrar em contato
                            </button>

                        </div>

                    </div>
                </div>

        </div>
    )
}