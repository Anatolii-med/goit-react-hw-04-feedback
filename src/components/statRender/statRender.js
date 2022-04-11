import React from 'react';
import { StatResulrWrap, StatItems } from './statRender.styled';
import PropTypes from 'prop-types';

function StatRender({ good, neutral, bad, total, positive }) {
    return (
        <StatResulrWrap>
            <StatItems>Good: {good}</StatItems>
            <StatItems>Neutral: {neutral}</StatItems>
            <StatItems>Bad: {bad}</StatItems>
            <StatItems>total: {total}</StatItems>
            <StatItems>Positive: {positive}</StatItems>
        </StatResulrWrap>
    );
}

export default StatRender;

StatRender.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.string.isRequired,
};
