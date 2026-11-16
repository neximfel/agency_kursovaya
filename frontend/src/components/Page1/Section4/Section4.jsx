import "./Section4.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

export default function Section4(){
    return(
        <>
            <section className="page1_section4">
                <div className="page1_section4_inside">
                    <div className="page1_section4_inside_text">
                        <div className="page1_section4_inside_text_about">
                            <p>Why choose us ?</p>
                        </div>
                        <h2>Designing Experiences, Inspiring Memories</h2>
                        <p className="page1_section4_inside_text_descr">Mauris molestie 
                            elit dolor, ut sollicitudin ante rutrum nec. Vestibulum 
                            molestie molestie enim. Mauris scelerisque scelerisque 
                            ex, at semper velit tincidunt a. Pellentesque in dolor 
                            vitae sapien congue rutrum.</p>
                        <div className="page1_section4_inside_text_punkts">
                            <div className="page1_section4_inside_text_punkts_punkt">
                                <div className="page1_section4_inside_text_punkts_punkt_mark">
                                    <div><img src={Photo.MarkPage1Section2} alt="" /></div>
                                </div>
                                <p>Event fits your budget</p>
                            </div>
                            <div className="page1_section4_inside_text_punkts_punkt">
                                <div className="page1_section4_inside_text_punkts_punkt_mark">
                                    <div><img src={Photo.MarkPage1Section2} alt="" /></div>
                                </div>
                                <p>Delicious Menu</p>
                            </div>
                            <div className="page1_section4_inside_text_punkts_punkt">
                                <div className="page1_section4_inside_text_punkts_punkt_mark">
                                    <div><img src={Photo.MarkPage1Section2} alt="" /></div>
                                </div>
                                <p>Professional Coordination</p>
                            </div>
                        </div>
                    </div>
                    <div className="page1_section4_inside_photo">
                        <img src={Photo.PhotoPage1Section4} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}