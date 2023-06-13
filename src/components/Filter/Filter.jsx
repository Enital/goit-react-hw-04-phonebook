import React from "react";
import css from './filter.module.css';
import PropTypes from 'prop-types';

function Filter({ filter, setFilter }) {
    return (
        <>
            <h3>Find contacts by name</h3>
            <label>
                <input
                    type="text"
                    name='filter'
                    value={filter}
                    onChange={setFilter}
                    className={css.input}
                    />
                </label>
        </>
    )
}
export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};