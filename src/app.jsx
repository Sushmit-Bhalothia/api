import React from "react";
import Top from "./top";
import Left from "./Left";
import Mid from "./mid";
import Bottom from "./bottom";



function app() {
    return <div className="main">
        <div><Left /></div>
        <div>
            <Top />
            <Mid />
            <Bottom />
        </div>

    </div>


}
export default app;