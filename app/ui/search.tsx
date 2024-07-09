'use client'; // This is a Client Component, which means you can use event listeners and hooks

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams(); // get the current param on client side
  const pathname = usePathname(); // get the current path
  const { replace } = useRouter(); // provides a way to change routes programmatically

  // Debounce the search input to avoid making too many requests (delay of 300ms)
  const handleSearch = useDebouncedCallback((input: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    // Set the params string based on the user’s input. 
    // If the input is empty, you'd want to delete it.
    if (input) {
      params.set('query', input);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
