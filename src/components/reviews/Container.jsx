
export default function CustomizeReviews({src, name, review}) {
    return (
        <div class="
        bg-white
        rounded-lg
        w-60
        h-30
        lg:w-100
        lg:h-60
        lg:p-4
        justify-center
        items-center
        ">
            <div class="
            flex
            items-center
            ">
                <img src={src} alt={src} />
                <p class="
                ml-4
                font-mono
                font-semibold
                text-xl
                ">{name}</p>

            </div>

            <h1 class="
            mt-6
            text-lg
            ">{review}</h1>

        </div>
    )
}