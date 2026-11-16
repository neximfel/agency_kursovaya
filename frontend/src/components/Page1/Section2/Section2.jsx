import "./Section2.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

export default function Section2(){
    return(
        <>
            <section className="page1_section2">
                <div className="page1_section2_inside">
                    <div className="page1_section2_inside_photo">
                        <img src={Photo.PhotoPage1Section2} alt="" />
                    </div>
                    <div className="page1_section2_inside_text">
                        <div className="page1_section2_inside_text_about">
                            <p>About us</p>
                        </div>
                        <h2>Inspiring Events, Lasting Impressions, 
                            Let's Write Your Story</h2>
                        <p className="page1_section2_inside_text_descr">Dicta sunt explicabo. Nemo enim ipsam 
                            voluptatem quia voluptas sit aspernatur aut 
                            odit aut fugit. Pellentesque habitant morbi 
                            tristique senectus et netus et malesuada 
                            fames ac turpis egestas. Aliquam rutrum neque 
                            ac urna laoreet ultrices.</p>
                        <div className="page1_section2_inside_text_punkts">
                            <div className="page1_section2_inside_text_punkts_punkt">
                                <div className="page1_section2_inside_text_punkts_punkt_mark">
                                    <div><img src={Photo.MarkPage1Section2} alt="" /></div>
                                </div>
                                <p>Event fits your budget</p>
                            </div>
                            <div className="page1_section2_inside_text_punkts_punkt">
                                <div className="page1_section2_inside_text_punkts_punkt_mark">
                                    <div><img src={Photo.MarkPage1Section2} alt="" /></div>
                                </div>
                                <p>Delicious Menu</p>
                            </div>
                            <div className="page1_section2_inside_text_punkts_punkt">
                                <div className="page1_section2_inside_text_punkts_punkt_mark">
                                    <div><img src={Photo.MarkPage1Section2} alt="" /></div>
                                </div>
                                <p>Professional Coordination</p>
                            </div>
                        </div>
                        <Link to="">Learn More <img src={Photo.ArrowToRightPage1Section2} alt="" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}