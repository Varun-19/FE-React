import React from 'react';

import styles from './ButtonSearch.module.css';
import AutoComplete from '../../../containers/AutoComplete/AutoComplete';
import SearchFalcone from '../../../containers/SearchFalcone/Search';

const buttonSearch = () => {
    return (
        <div className={styles.btn}>
            <AutoComplete />
            <SearchFalcone />
        </div>
    )
}
export default buttonSearch;