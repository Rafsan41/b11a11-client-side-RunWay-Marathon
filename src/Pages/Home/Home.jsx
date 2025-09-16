import CommunityReach from "./Componants/CommunityReach";
import ExpertRunningTips from "./Componants/ExpertRunningTips";
import Featured from "./Componants/Featured";
import Hero from "./Componants/Hero";
import RunnersComment from "./Componants/RunnersComment";
import StartJourney from "./Componants/StartJourney";
import UpcomingEvents from "./Componants/UpcomingEvents";
import WeeklyRunningTips from "./Componants/WeeklyRunningTips";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Featured></Featured>
      <UpcomingEvents></UpcomingEvents>
      <StartJourney></StartJourney>
      <RunnersComment></RunnersComment>
      <CommunityReach></CommunityReach>
      <ExpertRunningTips></ExpertRunningTips>
      <WeeklyRunningTips></WeeklyRunningTips>
    </div>
  );
};
export default Home;
