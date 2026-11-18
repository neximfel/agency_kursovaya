import "./Page3.scss";
import Section1 from "../../components/Page3/Section1/Section1.jsx";
import Section3_page1 from "../../components/Page1/Section3/Section3.jsx";
import Section2 from "../../components/Page3/Section2/Section2.jsx";
import Section3 from "../../components/Page3/Section3/Section3.jsx";
import Section4 from "../../components/Page3/Section4/Section4.jsx";
import Section5 from "../../components/Page3/Section5/Section5.jsx";
import Yellow from "../../components/Yellow/Yellow.jsx";

export default function Page3() {
    return (
        <>
            <div className="page3_div_container1">
                <div className="page3_div_top">
                    <Section1 />
                    <Section3_page1 />
                </div>
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Yellow />
            </div>
        </>
    );
}
