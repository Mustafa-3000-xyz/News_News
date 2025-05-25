import { useRecoilState } from "recoil";
import copyNewsAtom from "../../Atoms/copyNews_Atom";
import realNewsAtom from "../../Atoms/realNews_Atom";
import { Link } from "react-router-dom";



export default function Not_Found() {
    let realNews = useRecoilState(realNewsAtom)[0];
    let setCopyNews = useRecoilState(copyNewsAtom)[1];

    function handle_Back() {
        setCopyNews(realNews);
    }


    return <div className="position-absolute top-50 text-center w-100">
        <h2>Not found <i className="fa-regular fa-face-frown"></i> </h2>
        <Link to="/">
            <button onClick={handle_Back} className=" w-75 py-2 fs-5 fw-medium">Back</button> 
        </Link>
    </div>
}