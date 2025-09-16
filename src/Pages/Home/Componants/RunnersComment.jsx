import Icon from "../../../components/AppIcon";

const RunnersComment = () => {
  return (
    <div>
      <div>
        <section className={`py-16 bg-background `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Runners Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied runners who have discovered their
                perfect marathon experience through our platform.
              </p>
            </div>

            {/* Main Testimonial */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-card border border-border rounded-lg p-8 shadow-card">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src=""
                      alt=""
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start items-center space-x-1 mb-4">
                      rating
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                      "adsfads"
                    </blockquote>

                    {/* Author Info */}
                    <div className="space-y-2">
                      <div className="font-semibold text-foreground text-lg">
                        "dafdfasd"
                      </div>
                      <div className="text-muted-foreground">•</div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Icon name="Trophy" size={14} />
                          <span>marathons completed</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="Heart" size={14} />
                          <span>Favorite</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <button
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-athletic"
                aria-label="Previous testimonial">
                <Icon name="ChevronLeft" size={20} />
              </button>

              <div className="flex space-x-2"></div>

              <button
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-athletic"
                aria-label="Next testimonial">
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default RunnersComment;
