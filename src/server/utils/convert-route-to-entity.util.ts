const mapping: Record<string, string> = {
  menus: 'menu',
  restaurants: 'restaurant',
  seatings: 'seating',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
