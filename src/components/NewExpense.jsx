import './NewExpense.css'
import {useState} from "react";
import {useForm} from "react-hook-form";

const NewExpense = (props) => {

    const {register,handleSubmit} = useForm();

    // const [title,setTitle] = useState('')
    // const [amount,setAmount] = useState('')
    // const [date,setDate] = useState('')
    //
    // const titleChangeHandler = (event)=>{
    //     setTitle(()=>event.target.value)
    // }
    // const amountChangeHandler = (event)=>{
    //     setAmount(()=>event.target.value)
    // }
    // const dateChangeHandler = (event)=>{
    //     setDate(()=>event.target.value)
    // }

    // function formSubmitHandler(event) {
    //     event.preventDefault()
    //
    //     const expenseData = {
    //         id:'f1',
    //         title:title,
    //         amount:amount,
    //         date: new Date(date),
    //     };
    //     props.onSaveExpense(expenseData)
    //
    //     setTitle('')
    //     setAmount('')
    //     setDate('')
    // }

    return (
        <div className="new-expense">
            <form onSubmit={handleSubmit((data)=>{
                    props.onSaveExpense(data)
            })}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input  {...register("title",{required:"This is required"})}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input {...register("amount",{required:"This is required"})} type='number' min='0.01' step='0.01'/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input {...register("date",{required:"This is required"})} type='date' />
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