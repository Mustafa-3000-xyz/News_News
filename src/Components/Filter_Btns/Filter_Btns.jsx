import { useEffect, useState } from "react";
import Style from "./index.module.css";
import { useRecoilState } from "recoil";
import copyNewsAtom from "../../Atoms/copyNews_Atom";
import check_Text_Btn_Filter from "../../Atoms/check_Text_Btn_Filter";
// ======================================================= //
export default function Filter_Btns() {
    let [textBtn, setTextBtn] = useRecoilState(check_Text_Btn_Filter);
    let [copyNews, setCopyNews] = useRecoilState(copyNewsAtom);

    function handle_btns(e) {
        let btn = e.target;
        let getId = btn.getAttribute("id");
        setTextBtn(btn.innerText);
        // ===== //
        if (getId == "btn-oldest") {
            let result = [...copyNews].sort(function (a, b) {
                return new Date(a.date) - new Date(b.date)
            });
            setCopyNews(result);
        } else if (getId == "btn-latest") {
            let result = [...copyNews].sort(function (a, b) {
                return new Date(b.date) - new Date(a.date)
            });
            setCopyNews(result);
        }
    }

    function handle_Span() {
        setTextBtn("");

        let result = [...copyNews].sort(function (a, b) {
            return new Date(a.date) - new Date(b.date)
        });
        setCopyNews(result);
    }

    return (
        <section>
            <div className={`${Style.filter_btns} d-flex gap-3 mb-3`}>
                <button onClick={handle_btns} id="btn-oldest" className={`ms-2 ${textBtn == "Oldest" ? "bg-success text-white" : ""}`}>
                    Oldest
                </button>

                <button onClick={handle_btns} id="btn-latest" className={textBtn == "Latest" ? "bg-success text-white" : ""}>
                    Latest
                </button>
            </div>

            <div className="ps-2">
                {
                    textBtn != "" ? (
                        <span onClick={handle_Span} id={Style.span} className="px-3 py-1 rounded-1 cursor-pointer fs-5 d-flex gap-1 align-items-center">
                            {textBtn}
                            <i className="fa-solid fa-xmark text-danger mt-1"></i>
                        </span>
                    ) : ""
                }
            </div>
        </section>
    )
}
