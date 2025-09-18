import React from "react";
import MarathonCard from "../../../components/ui/MarathonCard";
import LoadingState, {
  MarathonCardSkeleton,
} from "../../../components/ui/LoadingState";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import { use } from "react";

const MarathonGrid = ({ alleventPromise }) => {
  const allevent = use(alleventPromise);

  return (
    <div className="">
      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} />
          <span>{allevent.length} Marathon event found</span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
          <button
            onClick={() => {}} // View mode toggle would be handled by parent
            className={`p-2 rounded-md transition-athletic`}
            title="Grid view">
            <Icon name="Grid3X3" size={16} />
          </button>
          <button
            onClick={() => {}} // View mode toggle would be handled by parent
            className={`p-2 rounded-md transition-athletic `}
            title="List view">
            <Icon name="List" size={16} />
          </button>
        </div>
      </div>
      {/* Marathon Cards */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {allevent.map((event) => (
            <MarathonCard key={event._id} event={event}></MarathonCard>
          ))}
        </div>
      </div>
      {/* Load More */}

      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          onClick=""
          loading=""
          iconName="ChevronDown"
          iconPosition="right"
          size="lg">
          Load More Marathons
        </Button>
      </div>

      {/* Loading More Indicator */}
      {/* {isLoading && marathons?.length > 0 && ( */}
      <div className="mt-8">
        <LoadingState
          type="skeleton"
          message="Loading more marathons..."
          size="sm"
        />
      </div>
      {/* )} */}
    </div>
  );
};

export default MarathonGrid;
