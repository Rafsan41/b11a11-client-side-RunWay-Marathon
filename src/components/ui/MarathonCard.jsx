import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Image from "../AppImage";
import Icon from "../AppIcon";
import Button from "./Button";

const MarathonCard = ({ event }) => {
  const {
    _id,
    title,
    marathonStart,
    location,
    distance,
    price,
    image,
    registrationStart,
    registrationDeadline,
    availableSpots,
    totalSpots,
    difficulty,
    organizer,
    description,
    isFeatured,
    createdAt,
    registrationCount,
  } = event;

  // const [timeLeft, setTimeLeft] = useState("");
  // const [isRegistering, setIsRegistering] = useState(false);

  // useEffect(() => {
  //   if (!showCountdown) return;

  //   const calculateTimeLeft = () => {
  //     const deadline = new Date(marathon.registrationDeadline);
  //     const now = new Date();
  //     const difference = deadline?.getTime() - now?.getTime();

  //     if (difference > 0) {
  //       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor(
  //         (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       );
  //       const minutes = Math.floor(
  //         (difference % (1000 * 60 * 60)) / (1000 * 60)
  //       );

  //       if (days > 0) {
  //         setTimeLeft(`${days}d ${hours}h left`);
  //       } else if (hours > 0) {
  //         setTimeLeft(`${hours}h ${minutes}m left`);
  //       } else {
  //         setTimeLeft(`${minutes}m left`);
  //       }
  //     } else {
  //       setTimeLeft("Registration closed");
  //     }
  //   };

  //   calculateTimeLeft();
  //   const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

  //   return () => clearInterval(timer);
  // }, [event?.registrationDeadline, showCountdown]);

  // const handleRegisterClick = async (e) => {
  //   e?.preventDefault();
  //   e?.stopPropagation();

  //   setIsRegistering(true);

  //   // Simulate registration process
  //   setTimeout(() => {
  //     onRegister(marathon);
  //     setIsRegistering(false);
  //   }, 1500);
  // };

  // const availabilityPercentage =
  //   (event?.availableSpots / event?.totalSpots) * 100;
  // const isLowAvailability = availabilityPercentage < 20;
  // const isRegistrationClosed =
  //   new Date(marathon.registrationDeadline) < new Date();

  // const getDifficultyColor = (difficulty) => {
  //   switch (difficulty?.toLowerCase()) {
  //     case "beginner":
  //       return "text-success bg-success/10";
  //     case "intermediate":
  //       return "text-warning bg-warning/10";
  //     case "advanced":
  //       return "text-error bg-error/10";
  //     default:
  //       return "text-muted-foreground bg-muted";
  //   }
  // };

  // if (displayMode === "list") {
  //   return (
  //     <Link
  //       to={`/marathon-details?id=${event?.id}`}
  //       className={`block bg-card border border-border rounded-lg p-4 hover:shadow-modal transition-athletic hover-scale ${className}`}>
  //       <div className="flex items-center space-x-4">
  //         <div className="flex-shrink-0">
  //           <Image
  //             src={event?.image}
  //             alt={event?.title}
  //             className="w-16 h-16 rounded-lg object-cover"
  //           />
  //         </div>

  //         <div className="flex-1 min-w-0">
  //           <div className="flex items-start justify-between">
  //             <div>
  //               <h3 className="text-lg font-semibold text-foreground truncate">
  //                 {event?.title}
  //               </h3>
  //               <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
  //                 <span className="flex items-center space-x-1">
  //                   <Icon name="Calendar" size={14} />
  //                   <span>{new Date(marathon.date)?.toLocaleDateString()}</span>
  //                 </span>
  //                 <span className="flex items-center space-x-1">
  //                   <Icon name="MapPin" size={14} />
  //                   <span>{event?.location}</span>
  //                 </span>
  //                 <span className="flex items-center space-x-1">
  //                   <Icon name="Route" size={14} />
  //                   <span>{event?.distance}</span>
  //                 </span>
  //               </div>
  //             </div>

  //             <div className="text-right">
  //               <div className="text-lg font-semibold text-foreground">
  //                 ${event?.price}
  //               </div>
  //               {showCountdown && timeLeft && (
  //                 <div
  //                   className={`text-xs ${
  //                     isRegistrationClosed ? "text-error" : "text-warning"
  //                   }`}>
  //                   {timeLeft}
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </Link>
  //   );
  // }

  return (
    <div
      className={`bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-modal transition-athletic hover-scale `}>
      <Link to={`/marathon-details?id=${event?.id}`} className="block">
        <div className="relative">
          <Image
            src={event?.image}
            alt={event?.title}
            className="w-full h-48 object-cover"
          />

          {/* Difficulty Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium `}>
              {event?.difficulty}
            </span>
          </div>

          {/* Availability Badge */}

          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 rounded-full text-xs font-medium text-error bg-error/10">
              Limited spots
            </span>
          </div>

          {/* Registration Status */}

          {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="px-4 py-2 bg-error text-error-foreground rounded-lg font-medium">
              Registration Closed
            </span>
          </div> */}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/marathon-details?id=${event?.id}`}>
          <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-athletic">
            {event?.title}
          </h3>
        </Link>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Calendar" size={14} />
            <span>
              {new Date(event.marathonStart)?.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="MapPin" size={14} />
            <span>{event?.location}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Route" size={14} />
            <span>{event?.distance}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Users" size={14} />
            <span>
              {event?.availableSpots?.toLocaleString()} spots available
            </span>
          </div>
        </div>

        {/* Countdown Timer */}

        <div className="mb-4 p-2 bg-warning/10 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={14} className="text-warning" />
            <span className="text-sm font-medium text-warning">
              Registration ends in{" "}
              <strong className="text-error ml-[5px]">
                {new Date(event.registrationDeadline)?.toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </strong>
            </span>
          </div>
        </div>

        {/* Availability Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            {/* <span className="text-xs text-muted-foreground">Availability</span>
            <span className="text-xs text-muted-foreground">% available</span> */}
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className={`h-2 rounded-full transition-all duration-300 `} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-foreground">
              ${event?.price}
            </div>
            <div className="text-xs text-muted-foreground">
              Registration fee
            </div>
          </div>

          <Button>Register</Button>
        </div>

        {/* Organizer Info */}
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center space-x-2">
            <Icon name="Building" size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              Organized by {event?.organizer}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonCard;
