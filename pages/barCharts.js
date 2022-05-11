import { useState } from "react";
import {values, allkeys, colors}  from "/components/barChartsData";
import BarChartsControls from "/components/barChartsControls";
import BarChartsSvg from "/components/barChartsSvg";


function BarCharts() {
  
	const [keys, setKeys] = useState(allkeys);
	const selectKeys = setKeys;
	return (
    <>
<BarChartsSvg values={values} keys={keys} colors={colors} />
<BarChartsControls allKeys={allkeys} keys={keys} colors={colors} selectKeys={selectKeys} />
    </>
  );
}

export default BarCharts;
