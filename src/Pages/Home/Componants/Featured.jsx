import { Link } from "react-router";
import Button from "../../../components/ui/Button";

const Featured = () => {
  return (
    <div>
      <div>
        <section className={`py-16 bg-background `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Marathons
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the most popular marathon events happening this year.
                From iconic city races to scenic trail runs, find your perfect
                challenge.
              </p>
            </div>

            {/* Marathon Cards Grid */}

            {/* View All Button */}
            <div className="text-center">
              <Link to="/all-marathons">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right">
                  View All Marathons
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Featured;
