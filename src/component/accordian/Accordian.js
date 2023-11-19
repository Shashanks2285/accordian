import React, { useState } from 'react';
import { questions } from './api';
import MyAccordian from './MyAccordian';

const Accordian = () => {

    const [data, setdata] = useState(questions);
    return (
        <>
            <section className='main_div'>
                <h1>AWS Interview Questions</h1>
                {
                    data.map(
                        (current_element) => {
                            const { id, question, answer } = current_element;
                            return <MyAccordian key={id}{...current_element} />
                        }
                    )
                }
            </section>
        </>
    )
}

export default Accordian;