import { Link } from "react-router-dom";
import "./Section4.scss";

const plans = [
    {
        name: "Basic",
        price: "$300.00",
        period: "/Per day",
        featured: false,
    },
    {
        name: "Luxury",
        price: "$500.00",
        period: "/Per day",
        featured: true,
    },
    {
        name: "Fantasy",
        price: "$800.00",
        period: "/Per day",
        featured: false,
    },
];

export default function Section4() {
    return (
        <>
            <section className="page3_section4">
                <div className="page3_section4_inside">
                    <div className="page3_section4_inside_title">
                        <h2>Pricing</h2>
                        <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim.
                        </p>
                    </div>
                    <div className="page3_section4_inside_cards">
                        {plans.map((plan, index) => (
                            <div
                                className={`page3_section4_inside_cards_card ${plan.featured ? "featured" : ""}`}
                                key={index}
                            >
                                <div className="page3_section4_inside_cards_card_top">
                                    <p className="page3_section4_inside_cards_card_top_badge">
                                        {plan.name}
                                    </p>
                                    <h3>{plan.price}</h3>
                                    <span>{plan.period}</span>
                                </div>
                                <Link to="/">Order</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
