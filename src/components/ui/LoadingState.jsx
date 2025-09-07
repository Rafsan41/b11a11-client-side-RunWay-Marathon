import React from 'react';
import Icon from '../AppIcon';

const LoadingState = ({ 
  type = 'spinner', 
  message = 'Loading...', 
  size = 'default',
  overlay = false,
  className = '' 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'lg':
        return 'w-8 h-8';
      case 'xl':
        return 'w-12 h-12';
      default:
        return 'w-6 h-6';
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      default:
        return 'text-base';
    }
  };

  const SpinnerLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className={`${getSizeClasses()} animate-spin`}>
        <Icon name="Loader2" size={size === 'sm' ? 16 : size === 'lg' ? 32 : size === 'xl' ? 48 : 24} className="text-primary" />
      </div>
      {message && (
        <p className={`${getTextSize()} text-muted-foreground font-medium`}>
          {message}
        </p>
      )}
    </div>
  );

  const SkeletonLoader = () => (
    <div className="space-y-4 animate-pulse">
      {/* Card skeleton */}
      <div className="bg-muted rounded-lg p-4 space-y-3">
        <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-muted-foreground/20 rounded"></div>
          <div className="h-3 bg-muted-foreground/20 rounded w-5/6"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-8 bg-muted-foreground/20 rounded w-20"></div>
          <div className="h-8 bg-muted-foreground/20 rounded w-24"></div>
        </div>
      </div>
      
      {/* Additional skeleton items */}
      <div className="bg-muted rounded-lg p-4 space-y-3">
        <div className="h-4 bg-muted-foreground/20 rounded w-2/3"></div>
        <div className="space-y-2">
          <div className="h-3 bg-muted-foreground/20 rounded"></div>
          <div className="h-3 bg-muted-foreground/20 rounded w-4/5"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-8 bg-muted-foreground/20 rounded w-20"></div>
          <div className="h-8 bg-muted-foreground/20 rounded w-24"></div>
        </div>
      </div>
    </div>
  );

  const DotsLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="flex space-x-1">
        {[0, 1, 2]?.map((i) => (
          <div
            key={i}
            className={`${getSizeClasses()} bg-primary rounded-full animate-pulse`}
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
      {message && (
        <p className={`${getTextSize()} text-muted-foreground font-medium`}>
          {message}
        </p>
      )}
    </div>
  );

  const ProgressLoader = ({ progress = 0 }) => (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="w-full max-w-xs">
        <div className="flex justify-between items-center mb-2">
          <span className={`${getTextSize()} text-muted-foreground font-medium`}>
            {message}
          </span>
          <span className={`${getTextSize()} text-primary font-semibold`}>
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );

  const renderLoader = () => {
    switch (type) {
      case 'skeleton':
        return <SkeletonLoader />;
      case 'dots':
        return <DotsLoader />;
      case 'progress':
        return <ProgressLoader />;
      default:
        return <SpinnerLoader />;
    }
  };

  const content = (
    <div className={`flex items-center justify-center ${className}`}>
      {renderLoader()}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-center min-h-screen p-4">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

// Skeleton components for specific use cases
export const MarathonCardSkeleton = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count })?.map((_, index) => (
      <div key={index} className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
        <div className="h-48 bg-muted"></div>
        <div className="p-4 space-y-3">
          <div className="h-6 bg-muted rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
            <div className="h-4 bg-muted rounded w-4/5"></div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="h-8 bg-muted rounded w-16"></div>
            <div className="h-8 bg-muted rounded w-20"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const TableSkeleton = ({ rows = 5, columns = 4 }) => (
  <div className="space-y-3 animate-pulse">
    {/* Header */}
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array.from({ length: columns })?.map((_, index) => (
        <div key={index} className="h-4 bg-muted rounded"></div>
      ))}
    </div>
    
    {/* Rows */}
    {Array.from({ length: rows })?.map((_, rowIndex) => (
      <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns })?.map((_, colIndex) => (
          <div key={colIndex} className="h-4 bg-muted rounded"></div>
        ))}
      </div>
    ))}
  </div>
);

export default LoadingState;