import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr className={s.head}>
                    <th className={s.headTitle}>Type</th>
                    <th className={s.headTitle}>Amount</th>
                    <th className={s.headTitle}>Currency</th>
                </tr>
            </thead>

            <tbody className={s.body}>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={s.bodyItem} key={id}>
                        <td className={s.bodyTdType}>{type}</td>
                        <td className={s.bodyTd}>{amount}</td>
                        <td className={s.bodyTd}>{currency} </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    ),
}