import styled from "styled-components";

export const NavigationContainer = styled.aside`
  grid-row: 1 / 2;
  grid-column: 1 / 2;

  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme["semi-dark-blue"]};

  @media (min-width: 600px) {
    width: calc(100vw - 4rem);

    padding: 1.25rem;

    border-radius: 20px;
  }

  @media (min-width: 768px) {
    grid-row: 1/3;
    grid-column: 1 / 2;

    padding: 2rem;

    max-width: 6rem;
    height: calc(100vh - 4rem);

    flex-direction: column;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.875rem;

    @media (min-width: 768px) {
      flex-direction: column;
    }
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    list-style: none;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      svg {
        fill: ${(props) => props.theme["white"]};
        stroke: ${(props) => props.theme["white"]};
      }
    }
  }

  svg {
    max-height: 1.25rem;
    width: 100%;

    &:hover {
      fill: ${(props) => props.theme["red"]};
      stroke: ${(props) => props.theme["red"]};
    }

    @media (min-width: 600px) {
      max-height: fit-content;
    }
  }
`;

export const HomeIcon = styled.img`
  max-height: 1.25rem;
`;

export const AvatarContainer = styled.div`
  border: 1px solid ${(props) => props.theme["white"]};
  border-radius: 50%;
  max-width: 2rem;
  max-height: 2rem;

  @media (min-width: 768px) {
    max-width: 2.5rem;
    max-height: 2.5rem;
  }

  img {
    width: 100%;
  }
`;
