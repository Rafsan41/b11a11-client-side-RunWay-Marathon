import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const WeeklyRunningTips = () => {
  return (
    <div>
      <div>
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Get Weekly Running Tips
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and receive expert running advice,
              training plans, and exclusive marathon insights delivered to your
              inbox every week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              <Button variant="default" iconName="Send" iconPosition="right">
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeeklyRunningTips;
