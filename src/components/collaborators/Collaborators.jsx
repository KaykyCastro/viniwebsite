import voltz from "../../../public/collaborators/voltz.png"
import kanom from "../../../public/collaborators/kanom.png"
import iellou from "../../../public/collaborators/Iellou.png"
import lazarus from "../../../public/collaborators/lazarus.png"
import du from "../../../public/collaborators/du.png"

export default function Collaborators() {
    return (
        <div class="
        bg-white
        w-full
        h-20
        p-5
        lg:p-10
        lg:h-40
        justify-center
        items-center
        ">
            <div class="
            w-full
            flex
            mb-2
            lg:mb-6
            gap-4
            lg:gap-20
            justify-center
            items-center
            ">
                <img class="size-6 lg:w-auto lg:h-auto" src={voltz} alt="Voltz" />
                <img class="w-18 h-4 lg:w-auto lg:h-auto" src={kanom} alt="Voltz" />
                <img class="w-12 h-4 lg:w-auto lg:h-auto" src={iellou} alt="Voltz" />
                <img class="w-12 h-3 lg:w-auto lg:h-auto" src={lazarus} alt="Voltz" />
                <img class="w-8 h-4  lg:w-auto lg:h-auto" src={du} alt="Voltz" />
            </div>

            <p class="
            text-[#03918C]
            text-[8px]
            lg:text-sm
            font-mono
            font-medium
            text-center">
                Colaboradores
            </p>

        </div>
    )
}