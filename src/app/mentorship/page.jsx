import styles from './mentorship.module.css';
import BlogCard from '@/components/Card';

const Mentorshippage = () => {
  return (
    <>
      <header className={`${styles.imgHeader} h-32 md:h-64 bg-cover bg-no-repeat flex items-center justify-center`}>
        <h1 className="text-white text-4xl md:text-6xl font-bold">Students Hub</h1>
      </header>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <BlogCard
            title="Personalized One-on-One Sessions"
            description={`Discuss students' strengths, career aspirations, and startup ideas. 
            Provide individualized guidance and advice tailored to each student.`}
            imageUrl="/Personalized.png"
            contactLink="https://wa.me/qr/UX36XLCHYSC7E1"
          />
          <BlogCard
            title="Startup Mentorship for Students"
            description={`Validate startup ideas, develop business plans, and navigate the startup journey. 
            Offer insights into market research, product development, funding, and networking opportunities.`}
            imageUrl="/Startup_mentor.png"
            contactLink="https://wa.me/qr/UX36XLCHYSC7E1"
          />
          <BlogCard
            title="Personal Branding Consultation for Students"
            description={`Help students build and enhance their personal brands as founders and digital creators. 
            Guide on creating a compelling brand story and establishing an online presence.`}
            imageUrl="/Personal_Branding.png"
            contactLink="https://wa.me/qr/UX36XLCHYSC7E1"
          />
          <BlogCard
            title="Ideation and Product Mentoring"
            description={`Assist students in generating and refining startup ideas, identifying market opportunities. 
            Provide feedback on idea validation, market research, and minimum viable product (MVP) development.`}
            imageUrl="/Ideation.png"
            contactLink="https://wa.me/qr/UX36XLCHYSC7E1"
          />
          <BlogCard
            title="Career Path Guidance"
            description={`Explore potential career paths in entrepreneurship, tech, marketing, etc., tailored to students' interests. 
            Offer insights into industry trends, job opportunities, and skills development.`}
            imageUrl="/Career.png"
            contactLink="https://wa.me/qr/UX36XLCHYSC7E1"
          />
          <BlogCard
            title="Network opportunities"
            description={`Provide startup founders with networking and access to a broader professional network, which can include potential investors, partners, and clients.`}
            imageUrl="/Network_oppurtunity.jpeg"
            contactLink="https://wa.me/qr/UX36XLCHYSC7E1"
          />
        </div>
      </div>
    </>
  );
};

export default Mentorshippage;
