import { Hero } from "../components/Hero"
import { Page1 } from "../components/Page1"
import { Page2 } from "../components/Page2"
import { Page3 } from "../components/Page3"

function HomeScreen(){
    return (
        <>
            <Hero/>
            <Page1/>
            <Page2/>
            <Page3 isHome={true}/>
        </>
    )
}

export default HomeScreen;