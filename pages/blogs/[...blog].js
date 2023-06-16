import { useRouter } from "next/router";
function BlobPaths() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Each Blob folder / file</h1>
    </div>
  );
}
export default BlobPaths;
