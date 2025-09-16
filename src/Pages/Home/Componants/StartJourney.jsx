import { Link } from "react-router";
import Button from "../../../components/ui/Button";

const StartJourney = () => {
  return (
    <div>
      <div>
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of runners worldwide and discover your next
              marathon adventure. Create your account today and never miss an
              opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/user-authentication">
                <Button
                  variant="default"
                  size="lg"
                  iconName="UserPlus"
                  iconPosition="left">
                  Create Account
                </Button>
              </Link>
              <Link to="/all-marathons">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Search"
                  iconPosition="left">
                  Browse Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartJourney;
