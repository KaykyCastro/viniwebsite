import {Link} from "react-scroll";
import {Link as LinkToRout} from "react-router-dom";
import { User } from "@phosphor-icons/react";
import {useState} from "react";

export default function Header(props){

    return (
        <div className="
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

            <p className="
        text-[#08E9E2]
        font-mono
        font-semibold
        text-sm
        lg:text-lg

        ">
                Vini.dev
            </p>

            <div className="
              block
              lg:hidden
              md:hidden
              bg-[#000D0D]
              w-4
              h-4
             ">
                <div className="bg-white w-4 h-0.5 mb-1"/>
                <div className="bg-white w-4 h-0.5 mb-1"/>
                <div className='bg-white w-4 h-0.5 '/>
            </div>

            <div className="
         hidden
         md:flex
         flex
         items-center
         ">

                <Link to="projetcs" smooth={true} duration={1000}>
                    <div className="
             flex
             items-center
             ">
                        <p className="
                 text-white
                 hover:text-[#08E9E2]
                 font-mono
                 font-medium
                 m-2
                 cursor-pointer">
                            Nossos projetos
                        </p>
                    </div>
                </Link>


                <div className="
             flex
             items-center">

                 <span className="
                 border-[#08E9E2]
                 border-l-3
                 h-5
                 justify-center
                 items-center"/>

                 <Link to="about" smooth={true} duration={1000}>

                    <p className="
                 text-white
                 hover:text-[#08E9E2]
                 font-mono
                 font-medium
                 m-2
                 cursor-pointer">
                        Sobre nós
                    </p>
                 </Link>
                </div>

                <div className="
             flex
             items-center">

                 <span className="
                 border-[#08E9E2]
                 border-l-3
                 h-5
                 justify-center
                 items-center"/>

                <Link to="process" smooth={true} duration={1000}>
                    <p class="
                 text-white
                 hover:text-[#08E9E2]
                 font-mono
                 font-medium
                 m-2
                 cursor-pointer">
                        Nossos processos
                    </p>
                </Link>
                </div>

                <div class="">
                </div>

                <LinkToRout to="Crud">
                    <div className="flex gap-2 ml-2">
                        <div className="border-1 border-[#08E9E2] rounded-md p-1">
                            <User color="#08E9E2" weight="fill" size={20}/>
                        </div>

                        {props.user}
                    </div>
                </LinkToRout>

            </div>
        </div>
    )
}