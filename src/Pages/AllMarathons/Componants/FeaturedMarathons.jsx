import React from "react";
import { Link } from "react-router";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const FeaturedMarathons = ({
  featuredMarathons = [],
  onRegister = () => {},
  className = "",
}) => {
  if (!featuredMarathons?.length) return null;

  return (
    <div
      className={`bg-card border border-border rounded-lg p-6 shadow-card ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Star" size={20} className="text-warning" />
          <h2 className="text-xl font-semibold text-foreground">
            Featured Marathons
          </h2>
        </div>
        <Link
          to="/all-marathons"
          className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredMarathons?.slice(0, 2)?.map((marathon) => (
          <div
            key={marathon?.id}
            className="relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg overflow-hidden border border-border">
            <div className="flex">
              {/* Image */}
              <div className="flex-shrink-0 w-32 h-32">
                <Image
                  src={marathon?.image}
                  alt={marathon?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <Link
                    to={`/marathon-details?id=${marathon?.id}`}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-athletic line-clamp-2">
                    {marathon?.title}
                  </Link>
                  <span className="px-2 py-1 bg-warning text-warning-foreground rounded-full text-xs font-medium ml-2">
                    Featured
                  </span>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    <span>{new Date(marathon.date)?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={14} />
                    <span>{marathon?.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Route" size={14} />
                    <span>{marathon?.distance}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-foreground">
                    ${marathon?.price}
                  </div>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e?.preventDefault();
                      onRegister(marathon);
                    }}
                    iconName="UserPlus"
                    iconPosition="left">
                    Register
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Badge */}
            <div className="absolute top-2 left-2">
              <div className="w-6 h-6 bg-warning rounded-full flex items-center justify-center">
                <Icon
                  name="Star"
                  size={14}
                  className="text-warning-foreground"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMarathons;
