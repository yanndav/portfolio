import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";
import { projects } from "../../contents/home/projects";
import HomeStory from "../../components/HomeStory/HomeStory";
import HomeFuture from "../../components/HomeFuture/HomeFuture";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Hero slug={projects[0].slug} />
      {projects.map((story, index) => (
        <HomeStory key={index} story={story} id={story.slug} />
      ))}
      <HomeFuture />
    </div>
  );
};
