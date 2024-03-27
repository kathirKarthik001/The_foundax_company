import Image from "next/image";

const BlogCard = ({ title, description, imageUrl, contactLink }) => {
    return (
      <div className="blog-box w-full md:w-72 lg:w-80 xl:w-96 p-2 md:p-4 mb-6 ml-auto mr-auto"> {/* Updated width and reduced padding */}
        <div className="relative overflow-hidden rounded-lg border border-gray-300 shadow-md h-full">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={imageUrl}
              alt="Blog Card"
              width={500}
              height={500}
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-sm">{description}</p>
            <a href={contactLink} className="text-blue-500 mt-2 block hover:underline">Contact</a>
          </div>
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full border-4 border-blue-500 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    );
};

export default BlogCard;
