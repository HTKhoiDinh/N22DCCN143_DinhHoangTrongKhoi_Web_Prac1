export default function BlogCard({ post }) { 
 return ( 
 <div className="border p-5 rounded-xl shadow-sm hover:shadow-lg transition bg-white">  <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wide">
{post.category} 
 </span> 
 <h2 className="font-bold text-lg mt-2 mb-1 line-clamp-2">{post.title}</h2>  <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.body}</p>
