import Banner from "../banner/Banner.jsx";
import Collaborators from "../collaborators/Collaborators.jsx";
import Projects from "../projects/Projects.jsx";
import About from "../about/About.jsx";
import Process from "../process/Process.jsx";
import Video from "../video/Video.jsx";
import Reviews from "../reviews/Reviews.jsx";
import Footer from "../footer/Footer.jsx";
import { Element } from 'react-scroll';
import {useState, useEffect} from "react";

export default function Home(){
    const [user, setUser] = useState("");

    useEffect(()=>{
         fetch("https://vinidb.onrender.com/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
         .then(res => {
             if(!res.ok){
                 throw new Error("Error na requisição");
             }
             return res.json();
         }).then(data => {
             setUser(data);
         }).catch(err => {
             console.log(err);
         })
    }, [])

    return (
        <div className='bg-[#000D0D] min-h-screen m-0 p-0 w-full flex flex-col justify-center items-center'>
            <Banner user={user.name}/>
            <Collaborators/>
            <Element name="projetcs">
                <Projects/>
            </Element>
            <Element name="about">
                <About/>
            </Element>
            <Element name="process">
                <Process/>
            </Element>
            <Video/>
            <Reviews/>
            <Footer/>
        </div>
            )
            }