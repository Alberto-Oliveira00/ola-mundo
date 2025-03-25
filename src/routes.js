import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim"
import Menu from "./componentes/Menu/Index";
import Rodape from "componentes/Rodape/Index";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop/Index";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Menu />
      <Routes>    
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}  />
          <Route path="/sobremim" element={<SobreMim />}/>
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
