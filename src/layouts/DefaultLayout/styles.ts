import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto 1fr;

  margin-bottom: 0.875rem;

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    gap: 1.25rem 2rem;

    margin-bottom: 1.75rem;
  }
`;
