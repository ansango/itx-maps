/**
 * ?Locate Component
 */

import { FC } from "react";
import * as cn from "./LocateStyles";

export type LocateProps = {
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
 * Description of Locate component displayed in Storybook
 */

const Locate: FC<LocateProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Locate</span>
    </div>
  );
};

export default Locate;
