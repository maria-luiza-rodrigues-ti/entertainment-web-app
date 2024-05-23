import { styled } from "styled-components";

export const SectionContainer = styled.section`
  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${(props) => props.theme["white"]};
    letter-spacing: -0.5px;

    margin-top: 0.5rem;
    margin-bottom: 1rem;

    @media (min-width: 600px) {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-bottom: 1rem;

  padding-right: 1.5rem;

  @media (min-width: 600px) {
    margin-bottom: 1.5rem;

    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem 1.875rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem 2.5rem;

    padding-right: 2rem;
  }
`;
