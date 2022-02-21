/**
 * ?ThemeToggle Component
 */

import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/actions/uiActions";
import { uiProps } from "../../types/ui";
// import * as cn from "./ThemeToggleStyles";

export type ThemeToggleProps = {
  isSidebar?: boolean;
  className?: string;
};

/**
 * Description of ThemeToggle component displayed in Storybook
 */

const ThemeToggle: FC<ThemeToggleProps> = ({ isSidebar }) => {
  const { theme } = useSelector(({ ui }: { ui: uiProps }) => ui);
  const dispatch = useDispatch();
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.value = "";
    root.classList.add(theme);
  }, [theme]);

  return (
    <div
      className={isSidebar ? "sm:hidden" : "absolute z-10 right-5 mt-4 hidden sm:block"}
      data-testid="theme-toggle"
    >
      <button
        className="p-2 rounded-full bg-white dark:bg-gray-800 dark:text-gray-200"
        onClick={() => dispatch(toggleTheme())}
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
            d={
              theme === "dark"
                ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }
          />
        </svg>
      </button>
    </div>
  );
};

export default ThemeToggle;
