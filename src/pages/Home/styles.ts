import styled from "styled-components";
import { SectionContainer } from "../../components/Category/styles";

export const HomeContainer = styled.aside`
  display: flex;
  flex-direction: column;

  max-width: calc(100vw - 2.5rem);
  margin-left: auto;
  overflow: visible;

  @media (min-width: 768px) {
    max-width: calc(100vw - 11rem);
  }
`;

export const SliderContainer = styled(SectionContainer)`
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    margin-bottom: 2.5rem;
  }
`;
