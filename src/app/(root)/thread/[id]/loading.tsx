import { CardSkeleton } from "../../../../../components/skeletopn-laoding/skeleton-loading";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return [...Array(3)].map((_, index) => <CardSkeleton key={index} />);
}
