/**
 * ?Markers Component
 */

import { FC, useState } from "react";
// import * as cn from "./MarkersStyles";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { markerProps } from "../../types/maps";

export type MarkersProps = {
  className?: string;
};

/**
 * Description of Markers component displayed in Storybook
 */

const Markers: FC<MarkersProps> = () => {
  const positions = useSelector(({ markers }: { markers: markerProps[] }) => markers);
  const [selected, setSelected] = useState<markerProps | null>(null);
  return (
    <>
      {positions.map((marker) => {
        return (
          <Marker
            data-testid={`marker-${marker.id}`}
            key={marker.id}
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
            onClick={() => setSelected(marker)}
          />
        );
      })}
      {selected ? (
        <InfoWindow
          data-testid={`info-window-${selected.id}`}
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <p>{selected.place}</p>
          </div>
        </InfoWindow>
      ) : null}
    </>
  );
};

export default Markers;
