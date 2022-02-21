export const config = {
  requestOptions: {
    location: {
      lat: () => 43.6532,
      lng: () => -79.3832,
      equals: () => false,
      toJSON: () => {
        return { lat: 43.6532, lng: -79.3832 };
      },
      toString: () => {
        return "43.6532,-79.3832";
      },
      toUrlValue: () => {
        return "43.6532,-79.3832";
      },
    },
    radius: 100 * 1000,
  },
};
