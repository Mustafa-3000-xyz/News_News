import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import copyNewsAtom from "../../Atoms/copyNews_Atom";

export default function Loading_Screen() {
    let copyNews = useRecoilState(copyNewsAtom)[0];
    let navigate = useNavigate();
    let notFound = "/not_found";
    let homePage = "/";

    function goToNewLocation(url) {
        navigate(url);
    };


    setTimeout(function () {
        if (copyNews.length <= 0) {
            goToNewLocation(notFound);
        } else {
            goToNewLocation(homePage);
        }
    }, 1000)

    return <section>
        <span className="loader position-absolute top-50 start-50"></span>
    </section>
}
