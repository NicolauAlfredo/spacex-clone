import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { heroContent } from "../../content/homePage/homePage.content";
import { HomeSection } from "./components/HomeSection/HomeSection";
import "./HomePage.css"

export function HomePage() {
    return (
        <>
        <Header />

         <main className="home">
            <HomeSection content={heroContent[0]}/> 
            <HomeSection content={heroContent[1]}/> 
            <HomeSection content={heroContent[2]}/>
            <HomeSection content={heroContent[3]}/>
            <HomeSection content={heroContent[4]}/>
            <HomeSection content={heroContent[5]}/>
         </main>

        <Footer />
        </>
    )
}