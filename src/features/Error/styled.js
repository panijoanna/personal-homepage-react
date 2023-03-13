import styled from "styled-components";

export const ErrorMessage = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.color.mineShaft};
  font-weight: 700;
  line-height: 29px;
  margin: 0;
  padding-top: 23px;
`;

export const ErrorContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
`;

export const ErrorParagraph = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
`;