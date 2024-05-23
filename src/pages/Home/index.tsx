import { HomeContainer, SliderContainer } from "./styles";

import data from "../../../data.json";

import { Card } from "../../components/Card";
import { Category } from "../../components/Category";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { SearchInput } from "../../components/SearchInput";

export function Home() {
  // const [filteredItems, setFilteredItems] = useState<MediaType[]>();

  const trendingTVSeriesAndMovies = data.filter((item) => {
    return item.isTrending === true;
  });

  const recommendedTVSeriesAndMovies = data.filter((item) => {
    return item.isTrending === false;
  });

  // function handleFilteredItemsFromSearch(filteredItems: MediaType[]) {
  //   setFilteredItems(filteredItems);
  // }

  return (
    <HomeContainer>
      <SearchInput placeholder="Search for movies or TV series" />
      <SliderContainer>
        <h2>Trending</h2>
        <Swiper
          slidesPerView={1.37}
          spaceBetween={16}
          breakpoints={{
            600: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
          }}
        >
          {trendingTVSeriesAndMovies &&
            trendingTVSeriesAndMovies.map((item) => {
              return (
                <SwiperSlide key={item.title}>
                  <Card
                    onSendingCardContent={() => item}
                    onDetermineSectionType={() => item.isTrending}
                    onCardType={() => "slider"}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </SliderContainer>
      <Category
        title="Recommended for you"
        mediaItems={recommendedTVSeriesAndMovies}
      />
    </HomeContainer>
  );
}
