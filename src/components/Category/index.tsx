import { Card } from "../Card";
import { SectionContainer, CategoryContainer } from "./styles";

export interface MediaType {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface CategoryProps {
  title: string;
  mediaItems: MediaType[];
}

export function Category({ title, mediaItems }: CategoryProps) {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      <CategoryContainer>
        {mediaItems &&
          mediaItems.map((item) => {
            return (
              <Card
                onSendingCardContent={() => item}
                onCardType={() => "gallery"}
                key={item.title}
              />
            );
          })}
      </CategoryContainer>
    </SectionContainer>
  );
}
