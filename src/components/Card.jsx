import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ title, description, imageUrl, contactLink }) => {
    return (
      <div className="blog-box w-full md:w-72 max-md:h-fit lg:w-80 xl:w-96 p-2 md:p-4 mb-6 md-max:ml-0 mr-auto"> {/* Updated width and reduced padding */}
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
            <Link target="_blank"  href={contactLink} className="text-blue-500 mt-2 block hover:underline">Join now</Link>
          </div>
        </div>
      </div>
    );
};

export default BlogCard;
