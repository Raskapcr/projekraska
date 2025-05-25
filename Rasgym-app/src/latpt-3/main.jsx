import { createRoot } from "react-dom/client";
 import './tailwind.css';
import Member from "./member"
import FormUser from "./FormUser";


createRoot(document.getElementById("root"))
    .render(
        <div>
            <FormUser/>
            <Member/>
        </div>
    )