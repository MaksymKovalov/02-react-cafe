// Компонент повідомлення про відсутність голосів
import css from './Notification.module.css';

const Notification = () => {
  return (
    <p className={css.message}>No feedback yet</p>
  );
};

export default Notification;