import React from 'react';
import { TitleName } from './Section.styled';
import PropTypes from 'prop-types';

function Section({ title, children }) {
    return (
        <div>
            <TitleName>{title}</TitleName>
            {children}
        </div>
    );
}

export default Section;

Section.propTyps = {
    title: PropTypes.string,
    children: PropTypes.string.isRequired,
};
