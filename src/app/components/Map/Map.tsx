/**
 * ?Map Component
 */

import { FC } from "react";
import * as cn from "./MapStyles";

export type MapProps = {
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
 * Description of Map component displayed in Storybook
 */

const Map: FC<MapProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Map</span>
    </div>
  );
};

export default Map;
