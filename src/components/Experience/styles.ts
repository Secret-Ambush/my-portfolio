import styled from "styled-components";

export const Container = styled.section`
  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--white);
  }

  h3 {
  font-size: 2rem;
  margin-top: 2.5rem;
  color: var(--green);
  font-weight: 600;
}

h3 span {
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 400;
  margin-left: 1rem;
  color: var(--text-light);
}

ul {
  list-style-type: disc;
  margin-left: 2rem;
  margin-top: 1rem;
}

ul li {
  font-size: 1.7rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-weight: 400;
  color: var(--text);
}
`;
