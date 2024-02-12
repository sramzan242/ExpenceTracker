
import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { Contexts } from './Contexts';

export const TransactionList = () => {
  const { transactions } = useContext(Contexts);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}