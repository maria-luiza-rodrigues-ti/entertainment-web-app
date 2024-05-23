import data from "../../../data.json";

import { Category, MediaType } from "../../components/Category";
import { SearchInput } from "../../components/SearchInput";
import { useState } from "react";

export function Bookmarked() {
  const bookmarkedItems = data.filter((item) => item.isBookmarked);
  const [filteredItems, setFilteredItems] = useState<MediaType[] | undefined>([]);

  const bookmarkedMovies = bookmarkedItems.filter(
    (item) => item.category === "Movie"
  );

  const bookmarkedTVSeries = bookmarkedItems.filter(
    (item) => item.category === "TV Series"
  );

  function handleFilteredSearchItems(filteredItems: MediaType[] | undefined) {
    setFilteredItems(filteredItems);
  }

  console.log(filteredItems);

  return (
    <div>
      <SearchInput
        placeholder="Search for bookmarked shows"
        onSearchItems={bookmarkedItems}
        onFilteredItems={handleFilteredSearchItems}
      />
      {filteredItems ? (
        <Category title="Bookmarked Movies" mediaItems={bookmarkedMovies} />
      ) : (
        <>
          <Category title="Bookmarked Movies" mediaItems={bookmarkedMovies} />
          <Category
            title="Bookmarked TV Series"
            mediaItems={bookmarkedTVSeries}
          />
        </>
      )}
    </div>
  );
}
