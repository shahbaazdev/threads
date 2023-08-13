import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser, getActivity } from "../../../../lib/actions/user.actions";
import Link from "next/link";
import Image from "next/image";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  // get all activity
  const activites = await getActivity(userInfo._id);

  return (
    <section>
      <h2 className="head-text">Activity</h2>
      <section className="mt-10 flex flex-col gap-5">
        {!activites.length ? (
          <p className="text-base-regular text-light-2">Not activity to show</p>
        ) : (
          activites.map((activity) => (
            <Link key={activity._id} href={`/thread/${activity.parentId}`}>
              <article className="activity-card">
                <Image
                  src={activity.author.image}
                  alt="Profile Picture"
                  width={20}
                  height={20}
                  className="rounded-full object-contain"
                />
                <p className="!text-small-regular text-light-1">
                  <span className="mr-1 text-primary-500">
                    {activity.author.name}
                  </span>{" "}
                  replied to your thread
                </p>
              </article>
            </Link>
          ))
        )}
      </section>
    </section>
  );
}

export default Page;
