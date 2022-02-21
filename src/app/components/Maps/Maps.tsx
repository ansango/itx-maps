/**
 * ?Map Component
 */

import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { FC, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { markerProps } from "../../types/maps";
import { uiProps } from "../../types/ui";
import { useLocator } from "../LocatorProvider/LocatorProvider";
import { props } from "./config";
import * as cn from "./MapStyles";

/**
 * Description of Map component displayed in Storybook
 */

const Maps: FC = () => {
  const { setMap } = useLocator();
  const [selected, setSelected] = useState<markerProps | null>(null);
  const onMapLoad = useCallback((map) => setMap(map), []);
  const positions = useSelector(({ markers }: { markers: markerProps[] }) => markers);
  const { theme } = useSelector(({ ui }: { ui: uiProps }) => ui);

  return (
    <GoogleMap
      onLoad={onMapLoad}
      {...props}
      options={{ disableDefaultUI: true, styles: theme === "dark" ? cn.layerDark : cn.layerLight }}
      data-testid="google-map"
    >
      {positions.map((marker) => (
        <Marker
          key={marker.id}
          position={{
            lat: marker.lat,
            lng: marker.lng,
          }}
          onClick={() => setSelected(marker)}
        />
      ))}
      {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <p>{selected.place}</p>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default Maps;
