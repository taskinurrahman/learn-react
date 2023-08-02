import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "./Card.jsx";
import {useState} from "react";

function ExpenseItem({title, amount, date}) {


    const [tittle,setTitle] = useState(title)

    function clickHandler() {
          setTitle((prevState)=>prevState+" updated")
    }
    return (
        <Card className='expense-item'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{tittle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>

    )
}

export default ExpenseItem;