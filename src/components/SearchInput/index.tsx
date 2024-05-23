import { FiSearch } from "react-icons/fi";
import { SearchContainer } from "./styles";
import { ChangeEvent, useState } from "react";
import { MediaType } from "../Category";

type SearchProps = {
  placeholder: string;
  onSearchItems?: MediaType[];
  onFilteredItems?: (filteredItems: MediaType[] | undefined) => void;
};

export function SearchInput({
  placeholder,
  onSearchItems,
}: /*onFilteredItems */
SearchProps) {
  const [search, setSearch] = useState("");

  function handleSearchValue(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function onFilterItens() {
    let filteredItems: MediaType[] | undefined;

    if (!onSearchItems) {
      filteredItems = [];
    } else if (onSearchItems?.length > 0) {
      filteredItems = onSearchItems?.filter((item: MediaType) => {
        return item.title.toLowerCase().includes(search);
      });

      filteredItems;
    } else {
      filteredItems = [];
    }

    // onFilteredItems(filteredItems);
  }

  return (
    <SearchContainer>
      <button>
        <FiSearch color="#fff" size={32} />
      </button>
      <input
        name="search"
        type="text"
        placeholder={placeholder}
        onChange={handleSearchValue}
        value={search}
        onSubmit={onFilterItens}
      />
    </SearchContainer>
  );
}
