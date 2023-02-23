import React from 'react';
import PropTypes from 'prop-types';
import {
  SectionStyled,
  SectionTitleStyled,
} from 'components/Feedback/Feedback.styled';

// import scss from 'components/Feedback/Feedback.module.scss';

export const Section = ({ title, moreStyles, children }) => {
  return (
    <SectionStyled moreStyles={moreStyles}>
      <SectionTitleStyled>{title}</SectionTitleStyled>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  moreStyles: PropTypes.string,
};
