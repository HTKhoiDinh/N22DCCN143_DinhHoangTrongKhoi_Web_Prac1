import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

      <h2 className="text-xl font-semibold mb-2 text-indigo-600">
        {post.title}
      </h2>

      <p className="text-gray-600 mb-4">
        {post.body.slice(0, 80)}...
      </p>

      <Link
        href={`/blog/${post.id}`}
        className="text-indigo-500 hover:underline"
      >
        Read More →
      </Link>

    </div>
  );
}