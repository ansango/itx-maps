/**
 * ?Map Component
 */

import { GoogleMap } from "@react-google-maps/api";
import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { uiProps } from "../../types/ui";
import { useLocator } from "../LocatorProvider/LocatorProvider";
import Markers from "../Markers";
import { props } from "./config";
import * as cn from "./MapStyles";

/**
 * Description of Map component displayed in Storybook
 */

const Maps: FC = () => {
  const { setMap } = useLocator();
  const onMapLoad = useCallback((map) => setMap(map), []);
  const { theme } = useSelector(({ ui }: { ui: uiProps }) => ui);
  const options = {
    disableDefaultUI: true,
    styles: theme === "light" ? cn.layerLight : cn.layerDark,
  };
  return (
    <div data-testid={`google-map-${theme}`}>
      <GoogleMap onLoad={onMapLoad} {...props} options={options}>
        <Markers />
      </GoogleMap>
    </div>
  );
};

export default Maps;
