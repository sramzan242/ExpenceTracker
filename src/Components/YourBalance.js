import React from 'react'
import { useContext } from 'react';
import {Contexts} from './Contexts';

const YourBalance = () => {
    const { transactions } = useContext(Contexts);
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (

        <>
            <h3>Your Balance</h3>
            <h2>${total}</h2>
        </>

    )
}

export default YourBalance