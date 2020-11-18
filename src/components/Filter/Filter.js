import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import {connect} from 'react-redux';
import contactActions from '../../redux/contact/contactActions';
import contactSelectors from '../../redux/contact/contactSelectors';

function Filter({value, handlerFilter}) {
    return (
        <div className={styles.container}>
            <label className={styles.label}>
            Search contacts by name
            <input className={styles.input} type="text" value={value} onChange={e => handlerFilter(e.target.value)} ></input>
            </label>
        </div>
    )

};
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handlerFilter: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    value: contactSelectors.getFilter(state),
});
const mapDispatchToProps = {
    handlerFilter: contactActions.filterContact,
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);