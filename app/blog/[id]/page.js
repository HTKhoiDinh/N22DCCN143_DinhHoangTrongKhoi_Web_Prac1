import Link from "next/link";

async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.json();
}

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-indigo-600">
          {post.title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          {post.body}
        </p>

        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
        >
          ← Back to Blog
        </Link>

      </div>
    </div>
  );
}