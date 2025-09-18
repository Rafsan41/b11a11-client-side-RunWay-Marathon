import { Link } from "react-router";
import Button from "../../../components/ui/Button";
import { use } from "react";
import MarathonCard from "../../../components/ui/MarathonCard";

const UpcomingEvents = ({ upCommingEventPromise }) => {
  const upCommingEvent = use(upCommingEventPromise);
  return (
    <div>
      <div>
        <section className={`py-16 bg-muted/30 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mark your calendar for these extraordinary running events around
                the world. From world majors to unique adventures, there's
                something for every runner.
              </p>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
              {upCommingEvent.map((event) => (
                <MarathonCard key={event._id} event={event}></MarathonCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default UpcomingEvents;
