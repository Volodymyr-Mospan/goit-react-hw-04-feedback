import { textStyled } from 'styles/text.styled';
import styled from 'styled-components';

export const SectionStyled = styled.section`
  max-width: 600px;
  border: 10px inset;
  padding: 40px;
  background-color: #c4c4c4;

  & p {
    font-size: ${textStyled.TextSize};
    margin: 0;
    margin-bottom: 15px;
  }

  ${props => {
    switch (props.moreStyles) {
      case '__statistics':
        return `
        margin: 0;
        margin-bottom: 20px;
        text-transform: capitalize;
        `;
      default:
        return;
    }
  }}
`;

export const SectionTitleStyled = styled.h2`
  font-size: ${textStyled.TitleSize};
  margin: 0;
  margin-bottom: 20px;
`;

export const FeedbackBtnStyled = styled.button`
  padding: 10px;
  min-width: 100px;
  text-transform: capitalize;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #00000094;

    background-color: ${props => {
      switch (props.name) {
        case 'good':
          return '#00ff1560';
        case 'neutural':
          return 'transparent';
        case 'bad':
          return '#ff040460';
        default:
          return 'inherit';
      }
    }};
  }
`;
