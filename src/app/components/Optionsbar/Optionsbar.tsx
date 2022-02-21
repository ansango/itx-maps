/**
 * ?Optionsbar Component
 */

import { FC } from "react";
// import * as cn from "./OptionsbarStyles";
import { useSelector, useDispatch } from "react-redux";
import { closeOptions } from "../../store/actions/uiActions";
import { markerProps } from "../../types/maps";
import { uiProps } from "../../types/ui";
import { removeAllMarkers, removeMarker } from "../../store/actions/markerActions";

export type OptionsbarProps = {
  className?: string;
};

/**
 * Description of Optionsbar component displayed in Storybook
 */

const Optionsbar: FC<OptionsbarProps> = () => {
  const { optionsBarOpen } = useSelector(({ ui }: { ui: uiProps }) => ui);
  const positions = useSelector(({ markers }: { markers: markerProps[] }) => markers);
  const dispatch = useDispatch();
  return (
    <aside
      className={
        optionsBarOpen
          ? "w-72 absolute right-0 z-20 h-full px-3 py-4 overflow-y-auto rounded bg-white dark:bg-gray-800 dark:text-gray-200"
          : "hidden"
      }
      aria-label="Optionsbar"
      data-testid="optionsbar"
    >
      <div className="flex justify-end pb-5">
        <button
          data-testid="close-options"
          className="p-2 rounded-full bg-white dark:bg-gray-800 dark:text-gray-200"
          type="button"
          onClick={() => dispatch(closeOptions())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {positions.map(({ place, text, id }, index) => (
          <li key={index} className="mb-10 ml-4" data-testid={`marker-${id}`}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{place}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{text}</p>
            <button
              data-testid={`remove-marker-${id}`}
              type="button"
              className="inline-flex items-center py-1 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => dispatch(removeMarker(id))}
            >
              Remove
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </li>
        ))}
      </ol>
      {positions.length > 0 && (
        <button
          data-testid="remove-all-markers"
          type="button"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
          onClick={() => dispatch(removeAllMarkers())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="ml-3">Remove all places</span>
        </button>
      )}
      {positions.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">No places added yet</p>
      )}
    </aside>
  );
};

export default Optionsbar;
