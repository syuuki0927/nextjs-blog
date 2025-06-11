import { SortOrder, sortOrderAtom } from "@/atoms";
import { useAtom } from "jotai";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  date: string;
};

type HomeProps = {
  allPostData: Post[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      allPostData: [
        { id: 1, title: "First Post", date: "2024-01-01" },
        { id: 2, title: "Second Post", date: "2024-01-02" },
        { id: 3, title: "Third Post", date: "2024-01-03" },
      ],
    },
  };
};

const Home: NextPage<HomeProps> = ({ allPostData }) => {
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);

  const sortedPosts = allPostData?.sort(
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );

  const posts =
    sortOrder === SortOrder.Acscending ? sortedPosts : sortedPosts.toReversed();

  return (
    <>
      {posts.map(({ id, title, date }) => (
        <div key={id}>
          <p>
            date: {date}, title: {title}
          </p>
        </div>
      ))}
      <div>
        <span>
          <input
            type="radio"
            id="descending"
            name="descending"
            value="descending"
            checked={sortOrder === SortOrder.Descending}
            onChange={() => setSortOrder(SortOrder.Descending)}
          />
          <label htmlFor="descending">Newer</label>
        </span>
        <span>
          <input
            type="radio"
            id="ascending"
            name="ascending"
            value="ascending"
            checked={sortOrder === SortOrder.Acscending}
            onChange={() => setSortOrder(SortOrder.Acscending)}
          />
          <label htmlFor="ascending">Older</label>
        </span>
      </div>
      <Link href="/">戻る</Link>
    </>
  );
};

export default Home;
