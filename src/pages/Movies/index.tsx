import { Category } from "../../components/Category";

import data from "../../../data.json";
import { SearchInput } from "../../components/SearchInput";

export function Movies() {
  const movies = data.filter((item) => {
    return item.category === "Movie";
  });

  return (
    <div>
      <SearchInput placeholder="Search for movies" />
      <Category title="Movies" mediaItems={movies} />
    </div>
  );
}
