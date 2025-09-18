import React from "react";
import Icon from "../../../components/AppIcon";
import { use } from "react";
import { Calendar, Clock, UserPlus } from "lucide-react";

const MarathonStats = ({
  alleventPromise,
  upCommingEventPromise,
  openEventPromise,
}) => {
  const eventsData = use(alleventPromise);
  const upCommingEvent = use(upCommingEventPromise);
  const openEvent = use(openEventPromise);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  my-5`}>
      {/* total event  */}
      <div
        key=""
        className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-modal transition-athletic">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Total Event
            </p>
            <p className="text-2xl font-bold text-foreground">
              {eventsData.length}
            </p>
          </div>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center`}>
            <Calendar size={24} color="#500075" />
          </div>
        </div>
      </div>
      {/* _________________________________________________  */}
      {/* Upcoming Events */}
      <div
        key=""
        className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-modal transition-athletic">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Upcoming Events
            </p>
            <p className="text-2xl font-bold text-foreground">
              {upCommingEvent.length}
            </p>
          </div>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center`}>
            <Clock size={24} color="#dba100" />
          </div>
        </div>
      </div>
      {/* _________________________________________________ */}
      {/* Open Registrations */}
      <div
        key=""
        className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-modal transition-athletic">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Open Registrations
            </p>
            <p className="text-2xl font-bold text-foreground">
              {openEvent.length}
            </p>
          </div>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center`}>
            <UserPlus size={24} color="#00ad0c" />
          </div>
        </div>
      </div>
      {/* _________________________________________________ */}
      {/* Total Participants */}
      <div
        key=""
        className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-modal transition-athletic">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Total Participants
            </p>
            <p className="text-2xl font-bold text-foreground">
              {eventsData.length}
            </p>
          </div>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center`}>
            <Icon name="" size={24} className="" />
          </div>
        </div>
      </div>
      {/* _________________________________________________ */}
    </div>
  );
};

export default MarathonStats;
