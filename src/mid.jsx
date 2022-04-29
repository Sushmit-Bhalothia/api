import React from "react";
import Box from "./box"

function mid() {
    return <div className="grid2container navbar right">

        <Box
            heading="Total Active User"
            img1="images/increasing.jpeg"
            value1="(+2.6%)"
            img2="images/green.jpeg"
            value2="18,768"

        />
        <Box
            heading="Total Installed"
            img1="images/increasing.jpeg"
            value1="(+0.7%)"
            img2="images/blue.jpeg"
            value2="4,876"

        />
        <Box
            heading="Total Downloads"
            img1="images/decrease.jpeg"
            value1="(-%0.1)"
            img2="images/green.jpeg"
            value2="748"
        />
    </div>
}

export default mid;