import propTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.thead}>
        <tr className={css.tr_thead}>
          <th className={css.th_thead}>Type</th>
          <th className={css.th_thead}>Amount</th>
          <th className={css.th_thead}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transaction_body}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tr_body} key={id}>
              <td className={css.td_thead}>{type}</td>
              <td className={css.td_thead}>{amount}</td>
              <td className={css.td_thead}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      type: propTypes.string,
      amount: propTypes.string,
      currency: propTypes.string,
    })
  ),
};
