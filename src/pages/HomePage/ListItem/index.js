import './style.css';
import { getShoppingItemById, updateShoppingItem } from '../../../functions/db';

export const ListItem = (props) => {
  const { id, done, product, amount, unit } = props;

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  const element = document.createElement('div');
  element.classList.add('list-item');
  element.innerHTML = `
    <button class="icon-btn btn-tick${tickClass}"></button>
    <div class="list-item__body">
      <div class="list-item__product">${product}</div>
      <div class="list-item__amount">${amount} ${unit}</div>
    </div>
  `;

  const handleTick = () => {
    updateShoppingItem(id, !done).then(() => {
      getShoppingItemById(id).then((response) => {
        element.replaceWith(ListItem(response.data));
      });
    });
  };

  element.querySelector('.btn-tick').addEventListener('click', handleTick);
  return element;
};
