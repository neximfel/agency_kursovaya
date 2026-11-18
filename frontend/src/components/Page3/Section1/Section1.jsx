import { Photo } from "../../../Images.js";
import "./Section1.scss";

const services = [
    {
        icon: Photo.LocationPage3Section1,
        title: "Location",
        descr: "Adipiscing elit, sed do euismod tempor incidunt ut labore",
    },
    {
        icon: Photo.CateringPage3Section1,
        title: "Catering",
        descr: "Adipiscing elit, sed do euismod tempor incidunt ut labore",
    },
    {
        icon: Photo.SpeakerPage3Section1,
        title: "Speaker",
        descr: "Adipiscing elit, sed do euismod tempor incidunt ut labore",
    },
    {
        icon: Photo.PhotoVideoPage3Section1,
        title: "Photography & Video",
        descr: "Adipiscing elit, sed do euismod tempor incidunt ut labore",
    },
];

export default function Section1() {
    return (
        <>
            <section className="page3_section1">
                <div className="page3_section1_inside">
                    <h2>Our Services</h2>
                    <div className="page3_section1_inside_items">
                        {services.map((service, index) => (
                            <div className="page3_section1_inside_items_item" key={index}>
                                <div className="page3_section1_inside_items_item_icon">
                                    <img src={service.icon} alt="" />
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.descr}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
