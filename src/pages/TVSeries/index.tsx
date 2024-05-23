import { Category } from "../../components/Category";

import data from "../../../data.json";
import { SearchInput } from "../../components/SearchInput";

export function TVSeries() {
  const series = data.filter((item) => {
    return item.category === "TV Series";
  });

  return (
    <div>
      <SearchInput placeholder="Search for TV series" />
      <Category title="TV Series" mediaItems={series} />
    </div>
  );
}
