import { GetStaticProps, NextPage } from "next";

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
  return (
    <>
      {allPostData?.map(({ id, title, date }) => (
        <div key={id}>
          <p>
            date: {date}, title: {title}
          </p>
        </div>
      ))}
    </>
  );
};

export default Home;
