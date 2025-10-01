import { defineApp } from "rwsdk/worker";
import { setCommonHeaders } from "./app/headers";
import { render, route } from "rwsdk/router";
import { Home } from "./app/pages/Home";
import { Document } from "./app/Document";

export default defineApp([
    setCommonHeaders(),
    render(Document, [
        route("/", () => {
            return <Home />;
        }),
    ]),
]);
