import React, { useState,useEffect } from 'react';

import FormAdmission from "./home-child/form-Admission";
import Introduce from "./introdu/introduct";
import Education from "./educate/education";



function Main() {
    return (
        <>
            <Introduce/>
            <Education/>
            <FormAdmission/>
        </>
    );
}

export default Main;
