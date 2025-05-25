import { useEffect, useState } from "react"
import Filter_Btns from "./Components/Filter_Btns/Filter_Btns"
import Header from "./Components/Header/Header"
import News from "./Components/News/News"
import { useRecoilState } from "recoil"
import realNewsAtom from "./Atoms/realNews_Atom"
import copyNewsAtom from "./Atoms/copyNews_Atom"
import { Route, Routes } from "react-router-dom"
import Loading_Screen from "./Components/Loading_Screen/Loading_Screen"
import Not_Found from "./Components/Not_Found/Not_Found"
import Show_Article from "./Components/Show_Article/Show_Article"
// ======================================================= //
function App() {
  let [realNews, setRealNews] = useRecoilState(realNewsAtom);
  let [copyNews, setCopyNews] = useRecoilState(copyNewsAtom);


  useEffect(function () {
    setCopyNews(realNews);
  }, [realNews]);

  setTimeout(function () {

  }, 500)

  return <>
    <Routes>
      <Route path="/" element={<>
          <Header />
          <hr />
          <Filter_Btns />
          <News copyNews={copyNews} />
      </>} />

      <Route path="loading_screen" element={<Loading_Screen />}/>
      <Route path="not_found" element={<Not_Found />}/>
      <Route path="show_article/:id" element={<Show_Article />} />
    </Routes>
  </>
}
export default App;