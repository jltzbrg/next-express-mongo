import BlogItem from "./components/BlogItem/BlogItem";

const BLOG_POST = [
  {
    id: 1,
    title: "First Blog Post",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80",
    description: "This is the first blog post.",
    details: "How everything began...",
  },
  {
    id: 2,
    title: "Second Blog Post",
    image:
      "https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    description: "This is the second blog post.",
    details: "How everything began part 2...",
  },
  {
    id: 3,
    title: "Third Blog Post",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: "This is the third blog post.",
    details: "How everything began part 3...",
  },
];
export default function HomePage() {
  return (
    <>
      <h1>Blog Page</h1>
      {BLOG_POST.map((post) => (
        <div key={post.id} className="flex flex-col">
          <BlogItem
            title={post.title}
            image={post.image}
            description={post.description}
            details={post.details}
          />
        </div>
      ))}
    </>
  );
}
