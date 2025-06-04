export default function ProjectCardTamplate({src, alt}) {
    return (
        <div class="
        lg:w-80
        lg:h-auto
        pr-6
        pl-6
        md:p-0
        mb-10
        md:mb-0
        ">
            <img src={src} alt={alt} class="
            mb-4
            lg:mb-6
            rounded-xl
            border-1
            border-[#08E9E2]
            shadow-lg
            shadow-[#08E9E2]
            shadow-2xl
            "/>

            <button class="
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
                Ver projeto
            </button>
        </div>
    )
}