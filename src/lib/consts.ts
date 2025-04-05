export const API_ROUTES = {
  patients: "https://autodesk-code-challenge.free.beeceptor.com/patients",
};

export const APP_ROUTES = {
  patients: {
    default: `/patients`,
    details: (id: string) => `/patients/${id}`,
  },
};
