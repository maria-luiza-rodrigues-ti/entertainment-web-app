import styled from "styled-components";

export const SearchContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  margin-top: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  display: flex;
  gap: 1rem;
  width: calc(100% - 2rem);

  @media (min-width: 600px) {
    margin: 2rem 0 0;
  }

  @media (min-width: 768px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;

    gap: 1.5rem;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;

    padding-bottom: 15px;

    svg {
      max-width: 1.5rem;

      @media (min-width: 600px) {
        max-width: 2rem;
      }
    }
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;

    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme["white"]};
    font-feature-settings: "clig" off, "liga" off;

    width: 100%;
    padding-bottom: 15px;

    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    caret-color: ${(props) => props.theme["red"]};

    &::placeholder {
      font-size: 1.5rem;
      font-weight: 400;
      color: ${(props) => props.theme["white"]};
      opacity: 0.5;
    }

    &:active,
    &:focus {
      font-size: 1.5rem;
      color: ${(props) => props.theme["white"]};
      border-bottom: 1px solid ${(props) => props.theme["white"]};
    }
  }
`;
