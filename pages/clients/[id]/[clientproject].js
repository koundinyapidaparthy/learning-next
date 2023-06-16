import { useRouter } from "next/router";
function SelectedclientProjectsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Selected client Projects Page of the given file</h1>
    </div>
  );
}
export default SelectedclientProjectsPage;
