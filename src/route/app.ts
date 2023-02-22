import { Party, Result, ProfileImg, Capture, Terms, ContactUs } from "../Pages";
export interface AppRouteType {
  to: string;
  element: React.ComponentType;
}

export const appRoutes: AppRouteType[] = [
  {
    to: "/",
    element: Party,
  },
  {
    to: "profile_picture/:party",
    element: ProfileImg,
  },
  {
    to: "result/:party",
    element: Result,
  },
  // {
  //   to: "party/",
  //   element: Party,
  // },
  {
    to: "TOS/",
    element: Terms,
  },
  {
    to: "contact/",
    element: ContactUs,
  },
];
