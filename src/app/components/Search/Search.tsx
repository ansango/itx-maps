/**
 * ?Search Component
 */

import { FC, useCallback, useRef } from "react";

import usePlaces, { getGeocode, getLatLng } from "use-places-autocomplete";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addMarker } from "../../store/actions/markerActions";
import { config } from "./config";

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";

// import * as cn from "./SearchStyles";

export type SearchProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map: google.maps.Map | any;
};

/**
 * Description of Search component displayed in Storybook
 */

const Search: FC<SearchProps> = ({ map }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlaces(config);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<google.maps.Map | any>();
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current = map;
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  const dispatch = useDispatch();
  const handleInput = (e: { target: { value: string } }) => setValue(e.target.value);
  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
      dispatch(
        addMarker({
          id: uuidv4(),
          place: results[0].formatted_address,
          lat,
          lng,
          text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        })
      );
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="absolute z-10 mt-4 right-5 sm:right-auto" data-testid="search">
      <Combobox onSelect={handleSelect}>
        <div className="relative flex items-center dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 absolute"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search a location"
            className="w-72 pl-8 py-2 rounded-full bg-white dark:bg-gray-800"
          />
        </div>
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ description }, index) => (
                <ComboboxOption key={index} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default Search;
