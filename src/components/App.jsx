import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import { itemsInitial } from "../lib/constants";

export default function App() {
  const [items, setItems] = useState(itemsInitial);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(itemsInitial);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleMarkAllAsImcomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList
          items={items}
          handleRemoveItem={handleRemoveItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsImcomplete={handleMarkAllAsImcomplete}
        />
      </main>
      <Footer />
    </>
  );
}
