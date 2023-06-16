import { useRouter } from "next/router";
export default function Ids() {
  const router = useRouter();
  console.log({ router });
  return <div onClick={() => router.push("/about")}>{router.query.id}</div>;
}
