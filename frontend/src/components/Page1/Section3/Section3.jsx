import "./Section3.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

const punkts = [
    {num: "01.", title: "Event Planning", descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus."},
    {num: "02.", title: "Corporate Event", descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus."},
    {num: "03.", title: "Wedding Event", descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus."},
    {num: "04.", title: "Private Party", descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus."},
    {num: "05.", title: "Birthday Party", descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus."},
]

export default function Section3(){
    return(
        <>
            <section className="page1_section3">
                <div className="page1_section3_black">
                    <div className="page1_section3_black_inside">
                        <div className="page1_section3_black_inside_title">
                            <p>What we do</p>
                            <div>
                                <h2>Full-service event production</h2>
                                <Link to="">View Details <img src={Photo.ArrowToRightPage1Section2} alt="" /></Link>
                            </div>
                        </div>
                        <div className="page1_section3_black_inside_punkts">
                            {punkts.map((meow, index) => (
                                <div className="page1_section3_black_inside_punkts_punkt" key={index}>
                                    <div className="page1_section3_black_inside_punkts_punkt_title">
                                        <h3>{meow.num}</h3>
                                        <h3>{meow.title}</h3>
                                    </div>
                                    <div className="page1_section3_black_inside_punkts_punkt_descr">
                                        <p>{meow.descr}</p>
                                        <Link to=""><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M-2.60828e-07 5.96703C-2.68513e-07 5.79121 0.0698421 5.6226 0.194162 5.49828C0.318483 5.37396 0.487097 5.30411 0.662913 5.30411L16.2984 5.30411L12.126 1.13307C12.0015 1.00859 11.9316 0.83976 11.9316 0.663723C11.9316 0.487686 12.0015 0.318858 12.126 0.19438C12.2505 0.0699028 12.4193 -2.72457e-05 12.5953 -2.72534e-05C12.7714 -2.72611e-05 12.9402 0.0699028 13.0647 0.19438L18.368 5.49768C18.4297 5.55926 18.4787 5.63242 18.5121 5.71295C18.5455 5.79349 18.5627 5.87983 18.5627 5.96703C18.5627 6.05422 18.5455 6.14056 18.5121 6.2211C18.4787 6.30164 18.4297 6.37479 18.368 6.43637L13.0647 11.7397C12.9402 11.8642 12.7714 11.9341 12.5953 11.9341C12.4193 11.9341 12.2505 11.8642 12.126 11.7397C12.0015 11.6152 11.9316 11.4464 11.9316 11.2703C11.9316 11.0943 12.0015 10.9255 12.126 10.801L16.2984 6.62994L0.662913 6.62994C0.487097 6.62994 0.318483 6.5601 0.194162 6.43578C0.0698421 6.31146 -2.53143e-07 6.14284 -2.60828e-07 5.96703Z" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF"/></svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

