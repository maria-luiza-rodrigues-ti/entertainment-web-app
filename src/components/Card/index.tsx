import MediaQuery from "react-responsive";
import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";
import { IoPlayCircle } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";

import {
  BookmarkButton,
  BookmarkButtonGallery,
  CardContainer,
  ImageContainer,
  ItemInfoContainer,
  ItemInfoContainerGallery,
  PlayButton,
  PlayButtonContainer,
  PlayButtonGallery,
} from "./styles";
import { useEffect, useState } from "react";
import { MediaType } from "../Category";


interface CardProps {
  onSendingCardContent: () => MediaType;
  onDetermineSectionType?: () => boolean;
  onCardType: () => string;
}

export function Card({
  onSendingCardContent,
  onDetermineSectionType,
  onCardType,
}: CardProps) {
  const [itemFavorited, setItemFavorited] = useState(false);
  const [sectionType, setSectionType] = useState(false);
  const media = onSendingCardContent();
  const cardType = onCardType();

  useEffect(() => {
    if (onDetermineSectionType) {
      setSectionType(onDetermineSectionType());
    }
  }, [onDetermineSectionType]);

  function isAMovie(category: string) {
    if (category === "Movie") {
      return <MdLocalMovies size={18} />;
    } else {
      return <PiTelevisionBold size={18} />;
    }
  }

  function isTrending(sectionType: boolean) {
    if (sectionType) {
      return true;
    } else {
      return false;
    }
  }

  function handleFavoriteItem() {
    setItemFavorited(true);
  }

  return (
    <>
      {cardType === "slider" ? (
        <CardContainer>
          <BookmarkButton onClick={handleFavoriteItem}>
            {itemFavorited ? (
              <RiBookmarkFill size={16} color="#fff" />
            ) : (
              <RiBookmarkLine size={16} color="#fff" />
            )}
          </BookmarkButton>
          <ImageContainer>
            <MediaQuery minWidth={300} maxWidth={599}>
              <img
                src={
                  isTrending(sectionType)
                    ? media.thumbnail.trending?.small
                    : media.thumbnail.regular.small
                }
                alt=""
              />
            </MediaQuery>

            <MediaQuery minWidth={600} maxWidth={1023}>
              <img
                src={
                  isTrending(sectionType)
                    ? media.thumbnail.trending?.small
                    : media.thumbnail.regular.medium
                }
                alt=""
              />
            </MediaQuery>

            <MediaQuery minWidth={1024}>
              <img
                src={
                  isTrending(sectionType)
                    ? media.thumbnail.trending?.large
                    : media.thumbnail.regular.large
                }
                alt=""
              />
            </MediaQuery>
          </ImageContainer>

          <ItemInfoContainer>
            <div>
              <span>{media.year}</span>
              <span>&#183;</span>
              <span>
                {isAMovie(media.category)} {media.category}
              </span>
              <span>&#183;</span>
              <span>{media.rating}</span>
            </div>
            <h3>{media.title}</h3>
          </ItemInfoContainer>

          <PlayButtonContainer>
            <PlayButton>
              <IoPlayCircle size={30} color="#fff" />
              Play
            </PlayButton>
          </PlayButtonContainer>
        </CardContainer>
      ) : (
        <CardContainer>
          <BookmarkButtonGallery onClick={handleFavoriteItem}>
            {itemFavorited ? (
              <RiBookmarkFill size={16} color="#fff" />
            ) : (
              <RiBookmarkLine size={16} color="#fff" />
            )}
          </BookmarkButtonGallery>
          <ImageContainer>
            <img
              src={
                isTrending(sectionType)
                  ? media.thumbnail.trending?.large
                  : media.thumbnail.regular.large
              }
              alt=""
            />

            <PlayButtonContainer>
              <PlayButtonGallery>
                <IoPlayCircle size={30} color="#fff" />
                Play
              </PlayButtonGallery>
            </PlayButtonContainer>
          </ImageContainer>

          <ItemInfoContainerGallery>
            <div>
              <span>{media.year}</span>
              <span>&#183;</span>
              <span>
                {isAMovie(media.category)} {media.category}
              </span>
              <span>&#183;</span>
              <span>{media.rating}</span>
            </div>
            <h3>{media.title}</h3>
          </ItemInfoContainerGallery>
        </CardContainer>
      )}
    </>
  );
}
