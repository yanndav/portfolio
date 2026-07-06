import styles from "./Text.module.css";
const Text = ({ text }) => {
  const Content = text;
  return (
    <div className={styles.textwrapper}>
      <Content />
    </div>
  );
};

export default Text;
