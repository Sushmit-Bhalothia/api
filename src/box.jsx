import React from "react";

function box(props) {

    return <div className="grid2-item">
        <h6 className="adjust">{props.heading}</h6>
        <div className="graph">
            <img className="img" style={{ margin: '20px' }} src={props.img1} alt="" srcset="" />
            <span>{props.value1}</span>
            <img className="img" style={{ position: 'relative', left: '100px' }} src={props.img2} alt="" srcset="" />
        </div>
        <h4 style={{ marginLeft: '15px' }}>{props.value2}</h4>
    </div>


}
export default box;