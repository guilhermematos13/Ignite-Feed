import { Header } from "./components/Header";
import "./global.css";
import { Post } from "./Post";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Guilherme Matos"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae corrupti facere delectus illum vero veniam autem mollitia officiis laborum et quasi, consequuntur veritatis quia ullam sit, numquam, rem nemo?"
          />

          <Post author="Leslie Alexander" content="Um post maneiro !!" />
        </main>
      </div>
    </div>
  );
}

export default App;
