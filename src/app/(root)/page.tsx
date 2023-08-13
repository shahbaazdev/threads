import { currentUser } from "@clerk/nextjs";
import { ThreadCard } from "../../../components/cards";
import { fetchPosts } from "../../../lib/actions/thread.action";

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;
  const result = await fetchPosts(1, 30);

  return (
    <>
      <section className="mt-9 flex flex-col gap-10">
        {!result.posts.length ? (
          <p className="no-result">No threads found</p>
        ) : (
          result.posts.map((post) => (
            <ThreadCard
              key={post._id}
              id={post._id}
              currentUserId={user.id!}
              parentId={post.parentId}
              content={post.text}
              author={post.author}
              community={post.community}
              createdAt={post.createdAt}
              comments={post.comments}
            />
          ))
        )}
      </section>
    </>
  );
}
