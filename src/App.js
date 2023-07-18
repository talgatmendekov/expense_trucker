import ExpenseItem from './components/ExpenseItem';
import './App.css';


const expenses = [
  {
    id: '1',
    title: 'Car insurance',
    price: 200,
    date: new Date(2023, 3, 20)
  },
  {
    id: '2',
    title: 'Online Course',
    price: 50,
    date: new Date(2022, 5, 10)
  },
  {
    id: '3',
    title: 'Kinder Garden',
    price: 150,
    date: new Date(2021, 3, 18)
  },
  {
    id: '4',
    title: 'Toilet Paper',
    price: 2,
    date: new Date(2020, 9, 1)
  },
]

function App() {
  return (
    <div className="App">
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].price}
      date={expenses[0].date}
      />
      <ExpenseItem 
      title={expenses[1].title} 
      amount={expenses[1].price}
      date={expenses[1].date}
      />
      <ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].price}
      date={expenses[2].date}
      />
      <ExpenseItem 
      title={expenses[3].title} 
      amount={expenses[3].price}
      date={expenses[3].date}
      />
    </div>
  );
}

export default App;
