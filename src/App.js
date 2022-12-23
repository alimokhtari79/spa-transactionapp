import { Route, Switch } from 'react-router-dom';
import './App.css';
import TransactionProvider from './Context/TransactionProvider';
import AddTransactionPage from './Pages/AddTransactionPage';
import AllTransactionsPage from './Pages/AllTransactionsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="min-h-screen flex items-center flex-col bg-slate-900 text-gray-50 overflow-hidden">
      <main className="w-full max-w-sm">
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
      </main>
    </div>
  );
}

export default App;
