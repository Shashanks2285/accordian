import React, { useState } from "react";

const MyAccordian = ({ question, answer }) => {
    const [show, setshow] = useState(false);
    const show_answer = ()=>{
        setshow(!show);
    }

    return (
        <>
            <div className="main_heading">
                <p onClick={show_answer}>{show ? "➖" : "➕"}</p><h3>{question}</h3>
            </div>
            {show && <p className="answers">{answer}</p>}
        </>
    )
}

export default MyAccordian;