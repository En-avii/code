import { FaLinkedin } from "react-icons/fa";

function BlogShare({ data }) {
  return (
    <>
      <div className="text-center pb-4">
        <button className="bg-blue-600 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <FaLinkedin />
          <a
            className="linkedin-share-button"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${
              encodeURIComponent(`https://blogs.Abhishek/blogs/${String(
                data.Title.split(" ").join("-").toLowerCase()
              )}`)
            }`}
          >
            Share
          </a>
        </button>
      </div>
    </>
  );
}

export default BlogShare;
