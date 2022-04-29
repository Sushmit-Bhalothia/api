import React from "react";

function list(props) {
    return <div><h5 style={{ margin: '25px' }}>{props.heading}</h5>

        <ul>
            <li><ion-icon name={props.icon1}></ion-icon>  {props.item1}</li>
            <li> <ion-icon name={props.icon2}></ion-icon> {props.item2}</li>
            <li><ion-icon name={props.icon3}></ion-icon> {props.item3}</li>
            <li><ion-icon name={props.icon4}></ion-icon> {props.item4}</li>
            <li><ion-icon name={props.icon5}></ion-icon>{props.item5}</li>
        </ul>
    </div>
}
export default list;