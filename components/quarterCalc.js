import React, {useState} from "react";
import {q1, q2, q3, q4, q5, q6, q7, q8} from "../data/wrkData";


// Convert each period string to decimal year
// Turn e.g., '2021 Q2' into 2021.5'

const QuarterCalc = (period) => {
return (period.slice(0,3) + 1/(period.slice(6,6)))
}

// Create ordered list of period strings
