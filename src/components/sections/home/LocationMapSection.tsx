import SectionTitle from "@/components/shared/SectionTitle";

const LocationMapSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <SectionTitle badge="Location" title="Find Us in Satellite, Ahmedabad" />
      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Pritgasu PG Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.682!2d72.4993!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922b3b3e1%3A0x4b63b1f3e0c3c8a0!2sSatellite%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default LocationMapSection;
