import React from "react";
const Jobs = React.lazy(() => import("Components/Pages/Jobs/Jobs"));
const Applied = React.lazy(() => import("Components/Pages/Applied/Applied"));
const Saved = React.lazy(() => import("Components/Pages/Saved/Saved"));

export default [
  { name: "Jobs", path: "/jobs", component: <Jobs />, isUserPath: false },
  {
    name: "Applied",
    path: "/applied",
    component: <Applied />,
    isUserPath: true,
  },
  { name: "Saved", path: "/saved", component: <Saved />, isUserPath: true },
];
