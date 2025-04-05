export const API_ROUTES = {
  items: "https://autodesk-code-challenge.free.beeceptor.com/items",
};

export const APP_ROUTES = {
  items: {
    default: `/`,
    details: (id: string) => `/${id}`,
  },
};

export const API_ROUTES_V2 = {
  items: "https://api-generator.retool.com/1jy6Ib/items",
};
