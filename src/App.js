import './App.css';
import ExpensiveItem from './component/ExpensiveItem';

function App() {
  const Expensive = [
    {
      id:'e1',
      title:'Car Insurance 1',
      amount: 94.2,
      date: new Date(2020 , 7, 20)
    },
    {
      id:'e2',
      title:'Toilet Paper',
      amount: 200,
      date: new Date(2020 , 11, 17)
    },
    {
      id:'e3',
      title:'College Paper',
      amount: 75,
      date: new Date(2020 , 3, 21)
    },
    {
      id:'e4',
      title:'Course Content',
      amount: 89,
      date: new Date(2023 , 9, 28)
    },
  ]
  return (
    <div className="App">
      <h1>Print Hello World</h1>
      <ExpensiveItem id={Expensive[0].id} title={Expensive[0].title}  amount={Expensive[0].amount} date={Expensive[0].date}></ExpensiveItem>
      <ExpensiveItem id={Expensive[1].id} title={Expensive[1].title}  amount={Expensive[1].amount} date={Expensive[1].date}></ExpensiveItem>
      <ExpensiveItem id={Expensive[2].id} title={Expensive[2].title}  amount={Expensive[2].amount} date={Expensive[2].date}></ExpensiveItem>
      <ExpensiveItem id={Expensive[3].id} title={Expensive[3].title}  amount={Expensive[3].amount} date={Expensive[3].date}></ExpensiveItem>
    </div>
  );
}

export default App;
