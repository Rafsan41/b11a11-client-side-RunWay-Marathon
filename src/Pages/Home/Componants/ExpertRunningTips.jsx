import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ExpertRunningTips = () => {
  return (
    <div>
      <div>
        <section className={`py-16 bg-muted/30 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Expert Running Tips
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master your marathon journey with professional advice from
                experienced runners and coaches. From training to race day,
                we've got you covered.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              tab option
            </div>

            {/* Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div
                key=""
                className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-modal transition-athletic hover-scale">
                <div className="relative">
                  <img src="" alt="" className="w-full h-48 object-cover" />

                  {/* Difficulty Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium`}>
                      difficulty
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-black/50 text-white">
                      readTime
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    title
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    description
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="w-full justify-between">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ExpertRunningTips;
