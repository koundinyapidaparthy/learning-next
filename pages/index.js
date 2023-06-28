import Link from "next/link";
import styles from "../styles/main.module.css";
import path from "path";
import * as fs from "fs/promises";
function Home(props) {
  return (
    <div className={styles.wrapper}>
      {(props.products || []).map(({ id, title, image, description, date }) => {
        return (
          <Link
            className={styles.mainContainer}
            key={id}
            href={{
              pathname: "/events/[eventId]",
              query: {
                eventId: id,
              },
            }}
          >
            <img src={image} className={styles.eachImage} />
            <h3>
              {title} <span>({date})</span>
            </h3>

            <p>{description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  console.log("First this was called");
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const unParsedData = await fs.readFile(filePath);
  const data = JSON.parse(unParsedData);
  return {
    props: {
      products: data.products || [],
    },
    revalidate: 10,
  };
}

export default Home;
