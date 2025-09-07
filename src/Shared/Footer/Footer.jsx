import logo1 from "../../assets/runway marathon loogo.png";
import logo2 from "../../assets/runway marathon white variant.png";

const Footer = ({ theme }) => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className=" mx-auto px-4 sm:px-6  py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-20 h-20  rounded-lg flex items-center justify-center">
                  {theme ? (
                    <>
                      <img
                        src={logo1}
                        className=" w-20 h-20 object-cover  rounded-lg"
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={logo2}
                        className=" w-20 h-20 object-cover  rounded-lg"
                        alt=""
                      />
                    </>
                  )}
                </div>
                <span className="text-xl font-semibold text-foreground">
                  Marathon Manager
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Your comprehensive platform for discovering, registering, and
                managing marathon events worldwide. Join thousands of runners in
                achieving their personal best.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-athletic">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-athletic">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-athletic">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.926 1.365 2.077 1.365 3.374s-.49 2.448-1.365 3.323c-.875.807-2.026 1.167-3.323 1.167z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/allmarathons"
                    className="text-muted-foreground hover:text-primary transition-athletic">
                    Browse Marathons
                  </a>
                </li>
                <li>
                  <a
                    href="/user-authentication"
                    className="text-muted-foreground hover:text-primary transition-athletic">
                    Create Account
                  </a>
                </li>
                <li>
                  <a
                    href="/add-marathon-event"
                    className="text-muted-foreground hover:text-primary transition-athletic">
                    Organize Event
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-athletic">
                    Training Plans
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-athletic">
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-athletic">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-athletic">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-athletic">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date()?.getFullYear()} Marathon Manager. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-muted-foreground text-sm">
                Made with ❤️ for runners worldwide
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
