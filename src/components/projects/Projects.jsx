import ProjectCardTamplate from "./ProjectCardTamplate.jsx";
import versalit from '../../../public/projects/versalite.png'
import iellou from '../../../public/projects/iellou.png';

export default function Projects() {
    return (

        <div class='
        w-full
        max-w-[1050px]
        h-270
        lg:p-8
        lg:h-110
        justify-center
        items-center
        '>

            <p class="
            text-white
            text-2xl
            md:text-4xl
            font-mono
            font-bold
            text-center
            mb-8
            mt-8
            lg:mt-2
            lg:mb-8
            ">NOSSOS PROJETOS</p>

            <div class="
            lg:flex
            lg:gap-14
            justify-center
            items-center
            ">
                <ProjectCardTamplate src={versalit} />
                <ProjectCardTamplate src={iellou} />
                <ProjectCardTamplate src={versalit} />
            </div>


        </div>
    )
}