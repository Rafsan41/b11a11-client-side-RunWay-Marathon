import React from "react";
import MarathonCard from "../../../components/ui/MarathonCard";
import LoadingState, {
  MarathonCardSkeleton,
} from "../../../components/ui/LoadingState";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const MarathonGrid = ({
  marathons = [],
  isLoading = false,
  hasMore = false,
  onLoadMore = () => {},
  onRegister = () => {},
  viewMode = "grid",
  className = "",
}) => {
  if (isLoading && marathons?.length === 0) {
    return (
      <div className={className}>
        <MarathonCardSkeleton count={6} />
      </div>
    );
  }

  if (!isLoading && marathons?.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center py-16 text-center ${className}`}>
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <Icon name="Calendar" size={48} className="text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          No marathons found
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          We couldn't find any marathons matching your search criteria. Try
          adjusting your filters or search terms.
        </p>
        <Button
          variant="outline"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={() => window.location?.reload()}>
          Refresh Results
        </Button>
      </div>
    );
  }

  const gridClasses =
    viewMode === "grid"
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      : "space-y-4";

  return (
    <div className={className}>
      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} />
          <span>
            {marathons?.length} marathon{marathons?.length !== 1 ? "s" : ""}{" "}
            found
          </span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
          <button
            onClick={() => {}} // View mode toggle would be handled by parent
            className={`p-2 rounded-md transition-athletic ${
              viewMode === "grid"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title="Grid view">
            <Icon name="Grid3X3" size={16} />
          </button>
          <button
            onClick={() => {}} // View mode toggle would be handled by parent
            className={`p-2 rounded-md transition-athletic ${
              viewMode === "list"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title="List view">
            <Icon name="List" size={16} />
          </button>
        </div>
      </div>
      {/* Marathon Cards */}
      <div className={gridClasses}>
        {marathons?.map((marathon) => (
          <MarathonCard
            key={marathon?.id}
            marathon={marathon}
            onRegister={onRegister}
            displayMode={viewMode}
            showCountdown={true}
            className="h-full"
          />
        ))}
      </div>
      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={onLoadMore}
            loading={isLoading}
            iconName="ChevronDown"
            iconPosition="right"
            size="lg">
            Load More Marathons
          </Button>
        </div>
      )}
      {/* Loading More Indicator */}
      {isLoading && marathons?.length > 0 && (
        <div className="mt-8">
          <LoadingState
            type="skeleton"
            message="Loading more marathons..."
            size="sm"
          />
        </div>
      )}
    </div>
  );
};

export default MarathonGrid;
