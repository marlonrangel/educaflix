import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  font-family: Roboto;
  
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const FooterLogo = styled.img`
  max-width: 148px;
`;