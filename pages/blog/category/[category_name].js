import fs from "fs";
import path from "path";
import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import { getPosts } from "@/lib/posts";
import matter from "gray-matter";

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      {/* <section className='object-cover sw-full h-screen bg-log_lift bg-cover '></section> */}

      <div className='flex justify-between'>
        <div className='w-3/4 mr-10'>
          <h1 className='text-5xl my-5 border-b-4 p5 font-bold text-left'>
            Posts in {categoryName}
          </h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>

          <Link href='/blog'>
            <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
              All Posts
            </a>
          </Link>
        </div>

        <div className='w-1/4'>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const catergories = files.map((filename) => {
    const markDownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markDownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = catergories.map((category) => ({
    params: { category_name: category }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);

  // need to filter out repeated or duplicate category names
  const uniqueCategories = [...new Set(categories)];
  // console.log("unique cats", uniqueCategories);

  // Filter by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() == category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories
    }
  };
}
