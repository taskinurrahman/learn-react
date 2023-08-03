import ExpenseItem from "./ExpenseItem.jsx";
import "./Expenses.css"
import Card from "./Card.jsx";
import NewExpense from "./NewExpense.jsx";
import {useState} from "react";

const expensesData = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
function Expenses() {
    const [expenses, setExpenses] = useState(expensesData);

    function onAddExpenseHandler(newExpenseData) {

        setExpenses((prevState) =>
            [
                ...prevState,
                newExpenseData
            ]
        )
    }
    console.log("aaaaaaaaa")


    return (
        <div>
            <NewExpense onSaveExpense={onAddExpenseHandler}/>
            <Card className="expenses">
                {
                    expenses.map((item, index) => {
                        console.log(item)
                        return <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date}/>
                    })
                }

            </Card>

        </div>
    )

}

export default Expenses;