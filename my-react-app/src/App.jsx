
import styles from "./App.module.css";import Header from "./components/Header/Header.jsx";
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
          avatar="https://i.pravatar.cc/150?img=12"
          type="Friend"
        />

        <ProfileCard
          name="Michael"
          description="An experienced programming teacher"
          avatar="https://i.pravatar.cc/150?img=13"
          type="Teacher"
        />
      </div >
      <Footer />
    </div>
  );
}

export default App;

