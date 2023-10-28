import React from 'react';
import { Button } from 'react-native-elements';

export default function Enrollment() {
    return (
    <><div><p id="header">Financial Aid and Scholarships</p></div>
    <div id="textAndButton"> 
        <div id="text">
            <p>At Practicode Academy, we understand the importance of accessible education.</p>
            <p>We offer various financial aids options and  scholarships to eligble students.</p>
            <br></br>
            <br></br>
            <p>Contact our admissions team to inquire about available opportunities.</p>
        </div>
        <br></br>
        <br></br>
        <Button style={{color: yellow}}>Contact us</Button>
    </div></>
    )
}
