import './App.css';
import { AddTransactions } from './Components/AddTransactions';
import { GlobalProvider } from './Components/Contexts';
import ExpenceTracker from './Components/ExpenceTracker';
import { Expenses } from './Components/Expences';
import { TransactionList } from './Components/TransactionList';
import YourBalance from './Components/YourBalance';

function App() {
  return (
    <>
    <div className="App">
      <GlobalProvider> 
     <ExpenceTracker/>
     <YourBalance/>
     <Expenses/>
     <TransactionList/>
     <AddTransactions/>
     </GlobalProvider>

    </div>
    </>
  );
}

export default App;
