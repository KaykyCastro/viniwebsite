
export default function Header(){
    return (
        <div class="
         fixed
         flex
         bg-[#000D0D]/75
         backdrop-blur-sm
         bg-opacity-50
         border-3
         border-[#08E9E2]
         mt-4
         p-4
         md:p-8
         lg:p-8
         min-w-[200px]
         max-w-[1050px]
         w-[90%]
         lg:w-full
         h-16
         rounded-xl
         items-center
         justify-between
         ">

            <p class="
        text-[#08E9E2]
        font-mono
        font-semibold
        text-sm
        lg:text-lg

        ">
                Vini.dev
            </p>

            <div class="
              block
              lg:hidden
              md:hidden
              bg-[#000D0D]
              w-4
              h-4
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
         ">

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