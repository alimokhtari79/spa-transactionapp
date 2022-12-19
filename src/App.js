import { Route, Switch } from 'react-router-dom';
import './App.css';
import TransactionProvider from './Context/TransactionProvider';
import AddTransactionPage from './Pages/AddTransactionPage';
import AllTransactionsPage from './Pages/AllTransactionsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route
            path="/add-transaction"
            render={(props) => <AddTransactionPage {...props} />}
          />
          <Route
            path="/all-transaction"
            render={(props) => <AllTransactionsPage {...props} />}
          />
        </Switch>
      </TransactionProvider>
    </div>
  );
}

export default App;
