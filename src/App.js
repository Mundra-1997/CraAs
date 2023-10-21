import React, { useState, useRef, useEffect } from 'react';
import Chart from './Chart';

function App() {
    const inBalRef = useRef();
    const emiRef = useRef();
    const [issubmitted,setissubmitted] = useState(false)
    const [accountArr, setAccountArr] = useState([]);
    const [inBal, changeInBal] = useState(null);
    const [emiArray, changeEmiArray] = useState([]);
    const [emiOption, setEmiOption] = useState(0);

   
    const handleBalanceSubmit = () => {
        const newInBal = +inBalRef.current.value;
        changeInBal(newInBal);
        setAccountArr([...accountArr, newInBal]);
    }

    const totalBalance = () => {
        const sumTotal = accountArr.reduce((acc, bal) => {
            return acc + bal;
        }, 0);
        return sumTotal;
    }

    const calculateEmi = () => {
   if (emiOption > 0) {
            const a = totalBalance();
            let temp = a;
            let arr = [];
            while (temp > 0) {
                arr.push(temp);
                temp = temp - emiOption;
            }
            changeEmiArray(arr);
        }
}

    useEffect(() => {
        calculateEmi();
        console.log(emiArray);
    }, [emiOption,accountArr,issubmitted]);

    const handleEmiSubmit = () => {
        setissubmitted(!issubmitted)
        setEmiOption(+emiRef.current.value);
        console.log(emiArray)
    }


 
    return (
        <div className="App"  style={{display:'flex',flexDirection:"column"}}>
            <div><label>Balance</label>
            <input type='number' ref={inBalRef}></input>
            <button onClick={handleBalanceSubmit}>Submit</button></div>
            <div><span>Count : {accountArr.length}</span></div>
            <div>
                {accountArr.length > 0 && accountArr.map((a, i) => {
                    return (
                        <li key={i}>Balance: {a}</li>
                    )
                })}
            </div>
            <div><label>Monthly payment</label>
            <input type='number' ref={emiRef}></input>
            <button onClick={handleEmiSubmit}>Submit</button></div>

               <div>Total Balance {totalBalance()}</div>
            {emiArray.length>0 && <Chart length={emiArray.length } emiArray={emiArray}/>}

         
        </div>
    );
}

export default App;
