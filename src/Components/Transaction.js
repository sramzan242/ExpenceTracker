import React, {useContext} from 'react';
import { Contexts } from './Contexts';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(Contexts);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">Delete</button>
    </li>
  )
}