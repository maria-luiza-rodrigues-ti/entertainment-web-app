import { styled } from "styled-components";

// ESTILIZAÇÃO VINDO ANTES DEVIDO AO ERRO QUE DA NO HOVER DO CARDCONTAINER

export const PlayButtonContainer = styled.div`
  display: none;

  position: absolute;
  inset: 0;
  z-index: 15;

  width: 100%;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );

  transition: all 0.2s;
`;

export const PlayButton = styled.button`
  position: absolute;
  inset: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: max-content;
  height: max-content;

  padding: 0.5rem 1.5rem 0.5rem 0.5rem;

  border: none;
  border-radius: 28.5px;
  background: rgba(100%, 100%, 100%, 0.25);

  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme["white"]};

  cursor: pointer;

  transition: all 0.2s;

  @media (min-width: 600px) {
    gap: 1.5rem;

    font-size: 1.25rem;
  }
`;

export const PlayButtonGallery = styled(PlayButton)`
  font-size: 0;
  padding: 0;
  gap: 0;

  @media (min-width: 600px) {
    font-size: 1.25rem;

    padding: 0.5rem 1.5rem 0.5rem 0.5rem;

    gap: 1.5rem;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    ${PlayButtonContainer} {
      display: flex;
    }
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;

export const BookmarkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 20;

  width: 2rem;
  height: 2rem;

  background: ${(props) => props.theme["dark-blue-with-opacity-50"]};
  border: none;
  border-radius: 50%;

  cursor: pointer;

  transition: all 0.2s;

  @media (min-width: 600px) {
    right: 1.5rem;
    top: 1rem;
  }

  &:hover {
    background: ${(props) => props.theme["white"]};

    svg {
      fill: black;
    }
  }
`;

export const BookmarkButtonGallery = styled(BookmarkButton)`
  @media (min-width: 600px) {
    right: 1rem;
    top: 1rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

export const ItemInfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  padding: 1rem;

  @media (min-width: 600px) {
    padding: 1.5rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: 400;

    opacity: 0.75;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 600px) {
      font-size: 1rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }

  h3 {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 400;

    @media (min-width: 600px) {
      margin-top: 3px;
      font-size: 1.5rem;
    }
  }
`;

export const ItemInfoContainerGallery = styled(ItemInfoContainer)`
  position: relative;

  padding: 0.5rem 0 0;

  span {
    font-size: 0.75rem;
  }

  h3 {
    margin-top: 5px;
    font-size: 1.125rem;
  }
`;
