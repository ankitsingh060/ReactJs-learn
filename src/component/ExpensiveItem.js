import ExpenseDate from "./ExpenseDate";
function ExpensiveItem(props){

    // const date = new Date(23, 2, 2023);
    // const title = "Car Insurance";
    // const price = 234.5;


    return (
        <div className="Item_detail">
            <ExpenseDate />
            {/* <div className="Item_detail_date">{props.date.toString()}</div> */}
            <div>{props.id}</div>
            <div className="Item_detail_description">
                <h2>{props.title}</h2>
                <div>{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpensiveItem;