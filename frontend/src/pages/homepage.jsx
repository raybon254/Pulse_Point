import Hero from "../components/layout/hero";
import Preview from "../components/layout/preview";
import CallToAction from "../components/layout/join_us";
import Features from "../components/layout/feature";
import Work from "../components/layout/works";

function Home() {
    return (
        <>
        <Hero/>
        <Features />
        <Preview />
        <Work />
        <CallToAction/>        
        </>
    )
}

export default Home;