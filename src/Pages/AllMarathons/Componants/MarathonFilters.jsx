import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const MarathonFilters = ({
  onSearch = () => {},
  onSort = () => {},
  onFilter = () => {},
  searchQuery = "",
  sortBy = "newest",
  filters = {},
  isLoading = false,
  className = "",
}) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "deadline", label: "Registration Deadline" },
    { value: "date", label: "Event Date" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ];

  const distanceOptions = [
    { value: "all", label: "All Distances" },
    { value: "3k", label: "3K" },
    { value: "10k", label: "10K" },
    { value: "25k", label: "25K" },
    { value: "marathon", label: "Full Marathon" },
  ];

  const difficultyOptions = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const priceRangeOptions = [
    { value: "all", label: "All Prices" },
    { value: "0-50", label: "$0 - $50" },
    { value: "51-100", label: "$51 - $100" },
    { value: "101-200", label: "$101 - $200" },
    { value: "201+", label: "$201+" },
  ];

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    onSearch(localSearchQuery);
  };

  const handleSearchChange = (e) => {
    const value = e?.target?.value;
    setLocalSearchQuery(value);

    // Debounced search
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
      onSearch(value);
    }, 300);
  };

  const handleSortChange = (value) => {
    onSort(value);
  };

  const handleFilterChange = (filterType, value) => {
    onFilter({ ...filters, [filterType]: value });
  };

  const clearAllFilters = () => {
    setLocalSearchQuery("");
    onSearch("");
    onSort("newest");
    onFilter({});
    setShowAdvancedFilters(false);
  };

  const hasActiveFilters =
    searchQuery ||
    sortBy !== "newest" ||
    Object.keys(filters)?.some(
      (key) => filters?.[key] && filters?.[key] !== "all"
    );

  return (
    <div
      className={`bg-card border border-border rounded-lg p-6 shadow-card ${className}`}>
      {/* Main Search and Sort Row */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* Search */}
        <div className="flex-1">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Input
              type="search"
              placeholder="Search marathons by title, location, or organizer..."
              value={localSearchQuery}
              onChange={handleSearchChange}
              className="pr-12"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-athletic"
              disabled={isLoading}>
              <Icon name="Search" size={18} />
            </button>
          </form>
        </div>

        {/* Sort */}
        <div className="lg:w-48">
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={handleSortChange}
            placeholder="Sort by..."
            disabled={isLoading}
          />
        </div>

        {/* Advanced Filters Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          iconName={showAdvancedFilters ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
          disabled={isLoading}>
          Filters
        </Button>
      </div>
      {/* Advanced Filters */}
      {showAdvancedFilters && (
        <div className="border-t border-border pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Distance Filter */}
            <div>
              <Select
                label="Distance"
                options={distanceOptions}
                value={filters?.distance || "all"}
                onChange={(value) => handleFilterChange("distance", value)}
                disabled={isLoading}
              />
            </div>

            {/* Difficulty Filter */}
            <div>
              <Select
                label="Difficulty"
                options={difficultyOptions}
                value={filters?.difficulty || "all"}
                onChange={(value) => handleFilterChange("difficulty", value)}
                disabled={isLoading}
              />
            </div>

            {/* Price Range Filter */}
            <div>
              <Select
                label="Price Range"
                options={priceRangeOptions}
                value={filters?.priceRange || "all"}
                onChange={(value) => handleFilterChange("priceRange", value)}
                disabled={isLoading}
              />
            </div>

            {/* Registration Status Filter */}
            <div>
              <Select
                label="Registration"
                options={[
                  { value: "all", label: "All Events" },
                  { value: "open", label: "Open Registration" },
                  { value: "closing-soon", label: "Closing Soon" },
                  { value: "limited", label: "Limited Spots" },
                ]}
                value={filters?.registrationStatus || "all"}
                onChange={(value) =>
                  handleFilterChange("registrationStatus", value)
                }
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Date Range Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="date"
                label="Event Date From"
                value={filters?.dateFrom || ""}
                onChange={(e) =>
                  handleFilterChange("dateFrom", e?.target?.value)
                }
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                type="date"
                label="Event Date To"
                value={filters?.dateTo || ""}
                onChange={(e) => handleFilterChange("dateTo", e?.target?.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Filter Actions */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Filter" size={16} />
              <span>
                {hasActiveFilters ? "Filters applied" : "No filters applied"}
              </span>
            </div>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                iconName="X"
                iconPosition="left"
                disabled={isLoading}>
                Clear All
              </Button>
            )}
          </div>
        </div>
      )}
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <div className="flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                <Icon name="Search" size={14} />
                <span>"{searchQuery}"</span>
                <button
                  onClick={() => {
                    setLocalSearchQuery("");
                    onSearch("");
                  }}
                  className="hover:text-primary/80">
                  <Icon name="X" size={12} />
                </button>
              </div>
            )}

            {sortBy !== "newest" && (
              <div className="flex items-center space-x-1 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                <Icon name="ArrowUpDown" size={14} />
                <span>
                  {sortOptions?.find((opt) => opt?.value === sortBy)?.label}
                </span>
                <button
                  onClick={() => onSort("newest")}
                  className="hover:text-secondary/80">
                  <Icon name="X" size={12} />
                </button>
              </div>
            )}

            {Object.entries(filters)?.map(([key, value]) => {
              if (!value || value === "all") return null;

              return (
                <div
                  key={key}
                  className="flex items-center space-x-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                  <Icon name="Tag" size={14} />
                  <span>{value}</span>
                  <button
                    onClick={() => handleFilterChange(key, "all")}
                    className="hover:text-accent/80">
                    <Icon name="X" size={12} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MarathonFilters;
