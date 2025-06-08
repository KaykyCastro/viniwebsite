
export default function CustomizeReviews({src, name, review}) {
    return (
        <div class="
        block
        bg-white
        rounded-lg
        w-60
        h-30
        lg:w-100
        lg:h-60
        p-4
        lg:p-4
        mb-4
        lg:mb-0
        justify-center
        items-center
        ">
            <div class="
            block
            lg:flex
            items-center
            ">
                <img src={src} alt={src} class="
                size-8
                lg:size-12
                " />
                <p class="
                ml-4
                font-mono
                font-semibold
                text-xl
                ">{name}</p>

            </div>

            <h1 class="
            mt-2
            ml-1
            lg:ml-0
            lg:mt-10
            text-[8px]
            lg:text-sm
            ">{review}</h1>

        </div>
    )
}