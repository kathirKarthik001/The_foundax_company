import Image from "next/image";

const BlogCard = ({ title, description, imageUrl, contactLink }) => {
    return (
      <div className="blog-box w-full md:w-72 lg:w-80 xl:w-96 mx-auto mb-6"> 
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
        </div>
      </div>
    );
};

export default BlogCard;
