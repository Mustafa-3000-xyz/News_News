import { Link } from "react-router-dom";
import Style from "./index.module.css";
// ======================================================= //
export default function News({ copyNews }) {
    return <section className="d-flex flex-column w justify-content-center align-items-center">
        {
            copyNews.map(function (ele) {
                let [date, timePart] = ele.date.split("T");
                let [hours, minuts, seconds] = timePart.split(":");
                let amPm = hours >= 12 ? "Pm" : "Am";
                let hour12 = hours % 12 || 12;
                let time = `${hour12}:${minuts}:${seconds} ${amPm}`;

                return <Link to={`/show_article/${ele.id}`} key={ele.id} className={`${Style.news_card} ${Style.link}`}>
                        <div className="d-flex justify-content-between">
                            <h3>{ele.headline}</h3>
                        </div>

                        <div className={`${Style.body}`}>
                            <p className="m-0">" "</p>
                            <p className="m-0 ms-2">
                                {
                                    ele.body.slice(0, 300).replace(/<\/?p>/g, "") + " . . ."
                                }
                            </p>
                            <p className="m-0 text-end">" "</p>
                        </div>

                        <div className="mt-2 d-flex justify-content-between">
                            <div className="d-flex flex-wrap gap-3">
                                <span className="text-success fw-bold">Author ➞ <span className="text-black fw-medium"> {ele.author} </span> </span>
                                <span className="text-danger fw-bold">Data ➞ <span className="text-black fw-medium">{date}</span></span>
                                <span className="text-success fw-bold">Time ➞ <span className="text-black fw-medium">{time}</span></span>
                            </div>

                            <div className="fw-semibold">
                                {ele.section}
                            </div>
                        </div>
                </Link>
            })
        }
    </section>
}