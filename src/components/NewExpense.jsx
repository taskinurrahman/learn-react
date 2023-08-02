import './NewExpense.css'
import {useState} from "react";

const NewExpense = () => {

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')
    const titleChangeHandler = (event)=>{
        setTitle(()=>event.target.value)
        console.log(title)
    }
    const amountChangeHandler = (event)=>{
        setAmount(()=>event.target.value)
        console.log(amount)
    }
    const dateChangeHandler = (event)=>{
        setDate(()=>event.target.value)
        console.log(date)
    }

    function formatSubmitHandler(event) {
        event.preventDefault()
        console.log({
            title,amount,date
        })
        setTitle(()=>'')
        setAmount(()=>'')
        setDate(()=>'')
    }

    return (
        <div className="new-expense">
            <form onSubmit={formatSubmitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={title} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={date} min='2019-01-01' max='2023-12-01' onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpense