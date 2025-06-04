
export default function Header(){
    return (
        <div class="
     flex
     bg-[#000D0D]/75
     backdrop-blur-lg
     bg-opacity-50
     border-3
     border-[#08E9E2]
     p-4
     md:p-8
     lg:p-8
     w-80
     md:w-full
     h-16
     gap-47
     md:gap-100
     lg:gap-147
     rounded-xl
     items-center">

            <p class="
        text-[#08E9E2]
        font-mono
        font-semibold
        text-sm
        lg:text-lg
        ml-2
        lg:ml-16">
                Vini.dev
            </p>

            <div class="
              block
              lg:hidden
              md:hidden
              bg-[#000D0D]
              w-4
              h 4
             ">
                <div class="bg-white w-4 h-0.5 mb-1"/>
                <div class="bg-white w-4 h-0.5 mb-1"/>
                <div class='bg-white w-4 h-0.5 '/>
            </div>

            <div class="
         hidden
         md:flex
         flex
         items-center
         mr-16">

                <div class="
             flex
             items-center
             ">
                    <p class="
                 text-white
                 hover:text-[#08E9E2]
                 font-mono
                 font-medium
                 m-2
                 cursor-pointer">
                        Nossos projetos
                    </p>
                </div>

                <div class="
             flex
             items-center">

                 <span class="
                 border-[#08E9E2]
                 border-l-3
                 h-5
                 justify-center
                 items-center"/>

                    <p class="
                 text-white
                 hover:text-[#08E9E2]
                 font-mono
                 font-medium
                 m-2
                 cursor-pointer">
                        Sobre nós
                    </p>

                </div>

                <div class="
             flex
             items-center">

                 <span class="
                 border-[#08E9E2]
                 border-l-3
                 h-5
                 justify-center
                 items-center"/>

                    <p class="
                 text-white
                 hover:text-[#08E9E2]
                 font-mono
                 font-medium
                 m-2
                 cursor-pointer">
                        Nossos processos
                    </p>

                </div>
            </div>
        </div>
    )
}