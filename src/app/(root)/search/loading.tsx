import { CardActivitySkeleton } from "../../../../components/skeletopn-laoding/activity-skeletoon-loading";

export default function Loading() {
  return [...Array(3)].map((_, index) => <CardActivitySkeleton key={index} />);
}
