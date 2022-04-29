import React from "react";
import List from "./list";
function head() {

    return <div className="left">
        <div className="top">
            <img className="img" src="images/top.jpg" alt="logo" srcset="" />
            <img src="images/circle.png" style={{ position: 'relative', bottom: '10px', left: '90px', width: '15px', height: '15px' }}
                alt="logo" />
        </div>

        <div className="logo">
            <img class="img" src="images/logo.jpg" alt="logo" />

            <h6 style={{ position: 'relative', top: '2px' }}>Minimal Ui</h6>
            <span style={{ position: 'relative', top: '20px', right: '60px' }}>admin</span>
        </div>
        <List
            heading="GENERAL"
            icon1="apps-outline" icon2="logo-amazon" icon3="analytics-outline" icon4="business-outline" icon5="book-outline"
            item1="App" item2="E-commerce" item3="Analytics" item4="Banking" item5="Booking"
        />
        <List
            heading="Management"
            icon1="person-circle-outline" icon2="mail-outline" icon3="apps-outline" icon4="logo-amazon" icon5="book-outline"
            item1="User" item2="Mail" item3="Minimal-Ui" item4="E-commerce" item5="blog"
        />
        <List
            heading="App"
            icon1="mail-outline" icon2="apps-outline" icon3="book-outline" icon4="business-outline" icon5="book-outline"
            item1="Mail" item2="User" item3="Blog" item4="Banking" item5="Booking"
        />
        <List
            heading="App"
            icon1="mail-outline" icon2="logo-twitter" icon3="logo-instagram" icon4="logo-facebook" icon5="logo-twitter"
            item1="E-Mail" item2="Twitter" item3="Instagram" item4="Facebook" item5="Snapchat"
        />
    </div>
}

export default head;