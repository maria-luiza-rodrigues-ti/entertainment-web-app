import { styled } from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    margin-top: 5.125rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 25rem;

    margin-top: 5.125rem;
    padding: 2rem;

    background: ${(props) => props.theme["semi-dark-blue"]};
    border-radius: 20px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.5px;

    margin-bottom: 2.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    input {
      width: 100%;

      padding: 0 1rem 1.125rem;

      background: transparent;

      border: none;
      border-bottom: 1px solid ${(props) => props.theme["greiysh-blue"]};

      &::placeholder {
        color: ${(props) => props.theme["white"]};

        opacity: 0.5;
      }
    }

    button {
      margin-top: 0.5rem;
      padding: 1rem 0;

      width: 100%;

      background: ${(props) => props.theme["red"]};

      border: none;
      border-radius: 6px;

      color: ${(props) => props.theme["white"]};
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme["white"]};
        color: ${(props) => props.theme["black"]};
      }
    }

    span {
      display: flex;
      gap: 0.5rem;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme["red"]};
    }
  }
`;

export const HomeIcon = styled.img`
  max-height: 1.25rem;

  @media (min-width: 600px) {
    max-height: none;
  }
`;
