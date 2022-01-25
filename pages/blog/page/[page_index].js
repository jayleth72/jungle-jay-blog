import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import CategoryList from "@/components/CategoryList";
import { POSTS_PER_PAGE } from "@/config/index";
import { getPosts } from "@/lib/posts";

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='w-3/4 mr-10'>
          <h1 className='text-5xl my-5 border-b-4 p5 font-bold text-center'>
            JJ's Blog
          </h1>

          <Pagination currentPage={currentPage} numPages={numPages} />

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>

        <div className='w-1/4'>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);

  // need to filter out repeated or duplicate category names
  const uniqueCategories = [...new Set(categories)];
  // console.log("unique cats", uniqueCategories);

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderdPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderdPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories
    }
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() }
    });
  }

  return {
    paths,
    fallback: false
  };
}
