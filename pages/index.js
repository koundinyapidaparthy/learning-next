import Link from "next/link";
export default function Home() {
  const clientsData = [
    {
      id: "max",
      name: "MaxStar",
      subname: "client1",
    },
    {
      id: "gopal",
      name: "Gopal",
      subname: "client1",
    },
    { id: "mister", name: "Mister", subname: "client1" },
  ];
  return (
    <div>
      <ul>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {clientsData.map(({ id, name, subname }) => {
          return (
            <li key={id}>
              <Link
                href={{
                  pathname: "/clients/[id]/[clientproject]",
                  query: {
                    id: id,
                    clientproject: subname || "",
                  },
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
