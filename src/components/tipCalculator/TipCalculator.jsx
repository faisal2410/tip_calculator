import { useState } from "react";
import BillInput from "../billInput/BillInput";
import SelectPercentage from "../selectPercentage/SelectPercentage";
import Output from "../output/Output";
import Reset from "../reset/Reset";


const TipCalculator = () => {
    const [bill, setBill] = useState("");
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    const tip = bill * ((percentage1 + percentage2) / 2 / 100);

    function handleReset() {
      setBill("");
      setPercentage1(0);
      setPercentage2(0);
    }

    return (
      <div>
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
          How did you like the service?
        </SelectPercentage>
        <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
          How did your friend like the service?
        </SelectPercentage>

        {bill > 0 && (
          <>
            <Output bill={bill} tip={tip} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    );
};

export default TipCalculator;