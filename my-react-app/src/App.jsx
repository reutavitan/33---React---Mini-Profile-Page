
import styles from "./App.module.css"; import Header from "./components/Header/Header.jsx";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Footer from "./components/Footer/Footer.jsx"
function App() {
  return (
    <div>
      <Header />
      <div className={styles.cardsContainer}>
        <ProfileCard
          name="David"
          description="A good friend who loves sports"
          avatar="https://clipart-library.com/2023/60-604226_vector-illustration-of-boy-wears-jewish-kippah-kip-junge-clipart.png"
          type="Teacher"
        />

        <ProfileCard
          name="Michael"
          description="An experienced programming teacher"
          avatar="https://clipart-library.com/2023/087559f0b0b177592459a750a0c2186b.jpg"
          type="Friend"

        />
      </div >
      <Footer />
    </div>
  );
}

export default App;

