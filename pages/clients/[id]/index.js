import { useRouter } from "next/router";
function ClientProjectssPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Projects of the given file</h1>
    </div>
  );
}
export default ClientProjectssPage;
