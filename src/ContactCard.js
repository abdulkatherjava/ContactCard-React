import React from "react"

function ContactCard(props) {
    console.log(props)
    return(
        <div className="contact-card">
            <h1>{props.contact.name}</h1>
            <img src={props.contact.imgUrl} />
            <h3>{props.contact.address}</h3>
            <h3>{props.contact.mobileno}</h3>
        </div>
    )
}

export default ContactCard