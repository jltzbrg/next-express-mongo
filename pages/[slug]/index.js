import { useRouter } from "next/router";

function BlogDetailPage() {
  const router = useRouter();

  console.log(router.query);
  return <h1>Blog Detail Page</h1>;
}

export default BlogDetailPage;
