import { createRoot } from "react-dom/client";
import ArtikelFit from "./ArtikelFit";
import Qna from "./Qna";  
import Produkgym from "./produkgym"; 
import Container from "./container";
import "./TampilanFit.css";

createRoot(document.getElementById("root")).render(
    <div>
    <Container>
        <ArtikelFit/>
        <Qna/>
        <Produkgym/>
    </Container>
    </div>
);
