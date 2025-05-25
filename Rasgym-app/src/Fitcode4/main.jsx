import { createRoot } from "react-dom/client";
import "./tailwind.css";
import ServiceList from "./ServiceList";

createRoot(document.getElementById("root"))
    .render(
        <div>    
            <ServiceList/>
        </div>
        );