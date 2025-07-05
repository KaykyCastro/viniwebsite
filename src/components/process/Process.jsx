import process from '../../../public/process.png';

export default function Process() {
    return (
        <div className="
        w-full
        max-w-[1050px]
        h-[350px]
        lg:h-[660px]
        justify-center
        items-center
        ">
            <div className="

            pt-3
            lg:pl-30
            lg:pr-30
            lg:pt-8
            justify-center
            items-center
            ">
                <p className="
            text-white
            text-2xl
            md:text-4xl
            font-mono
            font-bold
            text-center
            mt-10
            lg:mt-2
            lg:mb-8
            ">
                    NOSSOS PROCESSOS
                </p>

                <img src={process}
                className="
                justify-center
                items-center
                w-90
                lg:w-260
                mt-10
                lg:mt-20
                "/>
            </div>


        </div>
    )
}