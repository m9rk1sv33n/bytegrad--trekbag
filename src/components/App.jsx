import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <Sidebar />
        <ItemList />
      </main>
      <Footer />
    </>
  );
}
