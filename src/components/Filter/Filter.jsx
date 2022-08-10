import { useDispatch, useSelector } from 'react-redux';
import { change } from 'redux/filterSlice';

import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = value => dispatch(change(value));

  return (
    <label className={styles.filterLabel}>
      <span>Find contacts by name</span>
      <input
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
      />
    </label>
  );
};
