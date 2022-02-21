/**
 * ?Sidebar Component
 */

import { FC } from "react";
// import * as cn from "./SidebarStyles";
import { useSelector, useDispatch } from "react-redux";
import { openOptions, toggleSideBar } from "../../store/actions/uiActions";
import ThemeToggle from "../ThemeToggle";
import { uiProps } from "../../types/ui";
import { markerProps } from "../../types/maps";
export type SidebarProps = {
  className?: string;
};

/**
 * Description of Sidebar component displayed in Storybook
 */

const Sidebar: FC<SidebarProps> = () => {
  const { sidebarOpen } = useSelector(({ ui }: { ui: uiProps }) => ui);
  const marksLength = useSelector(({ markers }: { markers: markerProps[] }) => markers).length;
  const dispatch = useDispatch();
  return (
    <aside
      className={
        sidebarOpen
          ? "w-64 absolute z-30 h-full px-3 py-4 overflow-y-auto rounded bg-white dark:bg-gray-800 dark:text-gray-200"
          : "hidden"
      }
      aria-label="Sidebar"
      data-testid="sidebar"
    >
      <div className="flex justify-end pb-5">
        <ThemeToggle isSidebar />
        <button
          className="p-2 rounded-full bg-white dark:bg-gray-800 dark:text-gray-200"
          type="button"
          onClick={() => dispatch(toggleSideBar())}
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
      <ul className="space-y-2">
        <li>
          <button
            type="button"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full justify-between"
            onClick={() => {
              dispatch(toggleSideBar());
              dispatch(openOptions());
            }}
          >
            <span className="flex items-center">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="ml-3">My places</span>
            </span>
            {marksLength > 0 && (
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {marksLength}
              </span>
            )}
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
