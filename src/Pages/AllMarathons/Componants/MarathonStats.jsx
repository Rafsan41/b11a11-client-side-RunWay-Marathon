import React from "react";
import Icon from "../../../components/AppIcon";

const MarathonStats = ({
  totalMarathons = 0,
  upcomingMarathons = 0,
  openRegistrations = 0,
  totalParticipants = 0,
  className = "",
}) => {
  const stats = [
    {
      id: "total",
      label: "Total Marathons",
      value: totalMarathons?.toLocaleString(),
      icon: "Calendar",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: "upcoming",
      label: "Upcoming Events",
      value: upcomingMarathons?.toLocaleString(),
      icon: "Clock",
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      id: "open",
      label: "Open Registrations",
      value: openRegistrations?.toLocaleString(),
      icon: "UserPlus",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      id: "participants",
      label: "Total Participants",
      value: totalParticipants?.toLocaleString(),
      icon: "Users",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {stats?.map((stat) => (
        <div
          key={stat?.id}
          className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-modal transition-athletic">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {stat?.label}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {stat?.value}
              </p>
            </div>
            <div
              className={`w-12 h-12 rounded-lg ${stat?.bgColor} flex items-center justify-center`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarathonStats;
