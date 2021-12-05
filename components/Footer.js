const Footer = () => {
  return (
    <div className="grid grid-cols-1 px-32 bg-gray-100 md:grid-cols-4 gap-y-10 py-14">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="hover:underline">How Airbnb works</p>
        <p className="hover:underline">Newsroom</p>
        <p className="hover:underline">Investors</p>
        <p className="hover:underline">Airbnb Plus</p>
        <p className="hover:underline">Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="hover:underline">Accessibility</p>
        <p className="hover:underline">This is not a real site</p>
        <p className="hover:underline">Its a pretty awesome clone</p>
        <p className="hover:underline">Build using Next.js</p>
        <p className="hover:underline">By Darryl Wong</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="hover:underline">Try hosting</p>
        <p className="hover:underline">AirCover: protection for Hosts</p>
        <p className="hover:underline">Explore hosting resources</p>
        <p className="hover:underline">Visit our community forum</p>
        <p className="hover:underline">How to host responsibly</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="hover:underline">Help Centre</p>
        <p className="hover:underline">Safety information</p>
        <p className="hover:underline">Cancellation options</p>
        <p className="hover:underline">Our COVID-19 Response</p>
        <p className="hover:underline">Report a neighbourhood concern</p>
      </div>
    </div>
  );
};

export default Footer;
