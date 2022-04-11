import React from 'react';
import { RateButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ buttons, onLeaveFeedback }) {
    return buttons.map(button => {
        return (
            <RateButton
                type="button"
                key={button}
                name={button}
                onClick={() => {
                    onLeaveFeedback(button);
                }}
            >
                {button}
            </RateButton>
        );
    });
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    button: PropTypes.string,
    onLeaveFeedback: PropTypes.func.isRequired,
};
