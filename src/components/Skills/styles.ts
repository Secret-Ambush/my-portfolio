import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding: 0 2rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 2.5rem;
    color: var(--green);
    display: inline-block;
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    font-weight: 500;
    margin-bottom: 1.6rem;
    color: var(--text);
  }

  @media (max-width: 960px) {
    text-align: center;
    
    h2 {
      font-size: 2.6rem;
    }

    p {
      font-size: 1.7rem;
    }
  }

  @media only screen and (max-width: 480px) {
    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }
`;
