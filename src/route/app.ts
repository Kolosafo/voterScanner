import { Party, Result, ProfileImg, Capture } from "../Pages";
export interface AppRouteType {
  to: string;
  element: React.ComponentType;
}

export const appRoutes: AppRouteType[] = [
  {
    to: "/",
    element: Capture,
  },
  {
    to: "profile_picture/:party",
    element: ProfileImg,
  },
  {
    to: "result/:party",
    element: Result,
  },
  {
    to: "party/",
    element: Party,
  },
];
