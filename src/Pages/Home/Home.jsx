import { Suspense } from "react";
import CommunityReach from "./Componants/CommunityReach";
import ExpertRunningTips from "./Componants/ExpertRunningTips";
import Featured from "./Componants/Featured";
import Hero from "./Componants/Hero";
import RunnersComment from "./Componants/RunnersComment";
import StartJourney from "./Componants/StartJourney";
import UpcomingEvents from "./Componants/UpcomingEvents";
import WeeklyRunningTips from "./Componants/WeeklyRunningTips";

const eventPromise = fetch("http://localhost:5000/featuredEvent").then((res) =>
  res.json()
);
const upCommingEventPromise = fetch(
  "http://localhost:5000/upCommingEvent"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Suspense fallback={"featured data loading ......"}>
        <Featured eventPromise={eventPromise}></Featured>
      </Suspense>
      <UpcomingEvents
        upCommingEventPromise={upCommingEventPromise}></UpcomingEvents>
      <StartJourney></StartJourney>
      <RunnersComment></RunnersComment>
      <CommunityReach></CommunityReach>
      <ExpertRunningTips></ExpertRunningTips>
      <WeeklyRunningTips></WeeklyRunningTips>
    </div>
  );
};
export default Home;
