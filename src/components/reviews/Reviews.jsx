import ContainerReview from './Container.jsx'
import p1 from '../../../public/peoples/p1.png'
import p2 from '../../../public/peoples/p2.png'
import p3 from '../../../public/peoples/p3.png'
import {useState} from "react";

const peoples = [
    {icon: p1, name: 'Jon Dode', review: '"A Vini.dev foi fundamental para o sucesso do nosso projeto. Entregaram soluções de alta qualidade, no prazo e com suporte impecável. Recomendo sem hesitar."'},
    {icon: p2, name: 'Arnold', review: '"A Vini.dev foi fundamental para o sucesso do nosso projeto. Entregaram soluções de alta qualidade, no prazo e com suporte impecável. Recomendo sem hesitar."'},
    {icon: p3, name: 'Rui', review: '"A Vini.dev foi fundamental para o sucesso do nosso projeto. Entregaram soluções de alta qualidade, no prazo e com suporte impecável. Recomendo sem hesitar."'},
    {icon: p2, name: 'Kross', review: '"A Vini.dev foi fundamental para o sucesso do nosso projeto. Entregaram soluções de alta qualidade, no prazo e com suporte impecável. Recomendo sem hesitar."'},
    {icon: p3, name: 'Rodolfo', review: '"A Vini.dev foi fundamental para o sucesso do nosso projeto. Entregaram soluções de alta qualidade, no prazo e com suporte impecável. Recomendo sem hesitar."'},
    {icon: p1, name: 'Bill', review: '"A Vini.dev foi fundamental para o sucesso do nosso projeto. Entregaram soluções de alta qualidade, no prazo e com suporte impecável. Recomendo sem hesitar."'}]

function pageSelector(navigatorPage){
    switch(navigatorPage){
        case 0:
            return (
                <div class="
                block
                lg:flex
                w-full
                max-w-[1050px]
                h-100
                gap-4
                justify-center
                items-center
                ">
                    <ContainerReview src={peoples[0].icon} name={peoples[0].name} review={peoples[0].review} />
                    <ContainerReview src={peoples[1].icon} name={peoples[1].name} review={peoples[1].review} />
                    <ContainerReview src={peoples[2].icon} name={peoples[2].name} review={peoples[2].review} />
                </div>
            )
        case 1:
            return (
                <div className="
                block
                lg:flex
                w-full
                max-w-[1050px]
                h-100
                gap-4
                justify-center
                items-center
                ">
                    <ContainerReview src={peoples[3].icon} name={peoples[3].name} review={peoples[3].review}/>
                    <ContainerReview src={peoples[4].icon} name={peoples[4].name} review={peoples[4].review}/>
                    <ContainerReview src={peoples[5].icon} name={peoples[5].name} review={peoples[5].review}/>
                </div>
            )
        case 2:
            return (
                <div class="
                block
                lg:flex
                w-full
                max-w-[1050px]
                h-100
                gap-4
                justify-center
                items-center
                ">
                    <ContainerReview src={peoples[1].icon} name={peoples[1].name} review={peoples[1].review}/>
                    <ContainerReview src={peoples[5].icon} name={peoples[5].name} review={peoples[5].review}/>
                    <ContainerReview src={peoples[0].icon} name={peoples[0].name} review={peoples[0].review}/>
                </div>
            )
    }
}

export default function Reviews() {
    const [navigatorPage, setNavigatorPage] = useState(0);

    return (
        <div class="
        h-160
        lg:p-8
        justify-center
        items-center
        ">
            <p class="
            text-white
            text-2xl
            md:text-4xl
            font-mono
            font-bold
            text-center
            mb-8
            mt-8
            lg:mt-10
            lg:mb-2
            "
            >DEPOIMENTOS</p>

            {pageSelector(navigatorPage)}

            <div class="
            flex
            gap-1
            justify-center
            items-center
            "
            >
                <button onClick={() => setNavigatorPage(0)} className="
            bg-white
            w-6
            h-8
            rounded-sm
            ">
                    1
                </button>

                <button onClick={() => setNavigatorPage(1)} className="
            bg-white
            w-6
            h-8
            rounded-sm
            ">
                    2
                </button>
                <button onClick={() => setNavigatorPage(2)} className="
            bg-white
            w-6
            h-8
            rounded-sm
            ">
                    3
                </button>
            </div>

        </div>
    )
}