/**
 * ?Search Component
 */

import { FC } from "react";
import * as cn from "./SearchStyles";

export type SearchProps = {
  /**
   * Description of options in Storybook
   */
  option?: "option__one" | "option__two" | "option__three";
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Class Name override
   */
  className?: string;
};

/**
 * Description of Search component displayed in Storybook
 */

const Search: FC<SearchProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Search</span>
    </div>
  );
};

export default Search;
