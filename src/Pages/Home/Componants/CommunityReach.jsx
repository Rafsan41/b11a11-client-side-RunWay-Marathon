const CommunityReach = () => {
  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            50,000+
          </div>
          <div className="text-muted-foreground">Happy Runners</div>
        </div>

        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            1,200+
          </div>
          <div className="text-muted-foreground">Marathon Events</div>
        </div>

        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            98%
          </div>
          <div className="text-muted-foreground">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  );
};
export default CommunityReach;
