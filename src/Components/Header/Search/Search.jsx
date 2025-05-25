import { useRecoilState } from "recoil";
import copyNewsAtom from "../../../Atoms/copyNews_Atom";
import realNewsAtom from "../../../Atoms/realNews_Atom";
import check_Text_Btn_Filter from "../../../Atoms/check_Text_Btn_Filter";
import { useNavigate } from "react-router-dom";
// ======================================================= //
export default function Search() {
    let setTextBtn = useRecoilState(check_Text_Btn_Filter)[1];
    let setCopyNews = useRecoilState(copyNewsAtom)[1];
    let realNews = useRecoilState(realNewsAtom)[0];
    let navigate = useNavigate();

    function goToNewLocation() {
        navigate("loading_screen");
    };

    function handle_Search(e) {
        let inpText = e.target.value.toLowerCase();

        if (e.key == "Enter" && inpText != "") {
            goToNewLocation();

            let arr = [];
            realNews.forEach(function (ele) {
                if (ele.headline.toLowerCase().includes(inpText) || ele.author.toLowerCase().includes(inpText) || ele.id == +inpText) {
                    arr.push(ele);
                }
            });

            setCopyNews(arr);
            setTextBtn("");
            e.target.value = "";
        }
    }



    return <input onKeyDown={handle_Search} className='w-75 p-2 fs-5 fw-medium' type="text" placeholder='Search' />
}