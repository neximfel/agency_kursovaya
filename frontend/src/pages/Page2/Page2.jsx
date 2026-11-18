import { Link } from "react-router-dom"
import "./Page2.scss"
import Section1 from "../../components/Page2/Section1/Section1.jsx"
import Section2 from "../../components/Page2/Section2/Section2.jsx"
import Section3 from "../../components/Page2/Section3/Section3.jsx"
import Yellow from "../../components/Yellow/Yellow.jsx"
import Section4 from "../../components/Page2/Section4/Section4.jsx"
import Section5 from "../../components/Page2/Section5/Section5.jsx"

export default function Page2(){
    return(
        <>
            <div className="page2_div_container1">
                <div>
                    <Section1/>
                        <Section2/>
                            <Section3/>
                                <Yellow/>
                </div>
                    <Section4/>
                        <Section5/>
            </div>
        </>
    )
}