import ExpenseItem from "./ExpenseItem";

function Expense(props){

    return(
        <div className="expense-items-wrapper">
            <ExpenseItem 
                expense={props.items[0]} 
            />
            <ExpenseItem 
                expense={props.items[1]} 
            />
            <ExpenseItem 
                expense={props.items[2]} 
            />
            <ExpenseItem 
                expense={props.items[3]} 
            />
        </div>
    )
}

export default Expense