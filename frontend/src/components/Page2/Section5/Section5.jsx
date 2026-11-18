import { Photo } from "../../../Images.js";
import "./Section5.scss";

const team = [
    {
        image: Photo.Image1Page2Section5,
        name: "Dyas Kardinal",
        role: "Ceo Thevent",
    },
    {
        image: Photo.Image2Page2Section5,
        name: "Elsa Verina",
        role: "Creative Director",
    },
    {
        image: Photo.Image3Page2Section5,
        name: "Kumto Warming",
        role: "Event Planner",
    },
    {
        image: Photo.Image4Page2Section5,
        name: "Harumi Havva",
        role: "Event Stylist",
    },
];

export default function Section5() {
    return (
        <>
            <section className="page2_section5">
                <div className="page2_section5_inside">
                    <div className="page2_section5_inside_title">
                        <div className="page2_section5_inside_title_left">
                            <p className="page2_section5_inside_title_left_class">Team</p>
                            <h2>Meet Our Expert</h2>
                        </div>
                        <p className="page2_section5_inside_title_description">
                            Adipiscing elit, sed do euismod tempor incidunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitacion ullamco.
                        </p>
                    </div>
                    <div className="page2_section5_inside_main">
                        {team.map((member, index) => (
                            <div className="page2_section5_inside_main_card" key={index}>
                                <img
                                    className="page2_section5_inside_main_card_photo"
                                    src={member.image}
                                    alt=""
                                />
                                <div className="page2_section5_inside_main_card_info">
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                    <div className="page2_section5_inside_main_card_info_socials">
                                        <a href="https://www.facebook.com/">
                                            <img src={Photo.FacebookPage2Section5} alt="" />
                                        </a>
                                        <a href="https://x.com/">
                                            <img src={Photo.TwitterPage2Section5} alt="" />
                                        </a>
                                        <a href="https://www.youtube.com/">
                                            <img src={Photo.YouTubePage2Section5} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
