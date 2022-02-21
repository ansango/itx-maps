/**
 * ?SidebarToggle Component
 */

import { FC } from "react";
// import * as cn from "./SidebarToggleStyles";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../store/actions/uiActions";
export type SidebarToggleProps = {
  className?: string;
};

/**
 * Description of SidebarToggle component displayed in Storybook
 */

const SidebarToggle: FC<SidebarToggleProps> = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute z-10 left-5 mt-4" data-testid="sidebar-toggle">
      <button
        className="p-2 rounded-full bg-white dark:bg-gray-800 dark:text-gray-200"
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
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarToggle;
