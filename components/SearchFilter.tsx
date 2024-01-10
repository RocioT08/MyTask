import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type SearchFilterProps = {
  query: string;
  placeholderText?: string;
  name: string;
};

/**
 * Search component updates query state based on user input
 * @param query - state for search query
 * @param setQuery - setState function for query
 * @param placeholderText - placeholder text for search input
 * @param name - text used for name and id of input, e.g. 'search-artist'
 */
export function SearchFilter({
  query,
  placeholderText,
  name,
}: SearchFilterProps) {
  return (
    <div className='relative flex items-center justify-center h-full pt-4'>
      <div className='absolute left-2'>
        <MagnifyingGlassIcon
          className='w-6 h-7 text-gray-600'
          aria-hidden='true'
        />
      </div>
      <input
        className=' flex items-center justify-center box-content block w-5/6 pl-8 sm:w-72 border-primary focus-main sm:text-sm h-[32px] rounded-md'
        required
        type='text'
        name='search'
        id='search'
        placeholder={placeholderText || `Search`}
        value={query}
      />
    </div>
  );
}
