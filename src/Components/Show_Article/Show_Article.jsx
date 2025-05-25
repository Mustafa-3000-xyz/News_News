import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import realNewsAtom from "../../Atoms/realNews_Atom";
import Btn_Next from "./Btns/Btn_Next";
import Btn_Go_Home from "./Btns/Btn_Go_Home";
// ======================================================= //
export default function Show_Article() {
    let { id } = useParams();
    let realNews = useRecoilState(realNewsAtom)[0];

    let [article] = realNews.filter(function (ele) {
        return ele.id == id;
    })

    return <section className="p-2">
        <div>
            <h1>{article.headline}</h1>
            <div className=" my-2">
                <span className=" fw-medium me-2"> - {article.author} </span>
                <span className=" fw-medium me-2 text-danger"> - {article.date.split("T")[0]} </span>
                <span className=" fw-medium me-2"> - {article.section} </span>
            </div>
            <h6> ➞ {article.abstract} </h6>
        </div>

        <hr />

        <div>
            <p>{article.body.replace(/<\/?p>/g, "")}</p>
        </div>

        <hr />

        <div className="d-flex gap-3 flex-wrap">
            <Btn_Go_Home />
            <Btn_Next />
        </div>
    </section>
}