export default function ItemList({ items, onRemoveItem, handleToggleItem }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            handleToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
}

function ListItem({ item, onRemoveItem, handleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => {
            handleToggleItem(item.id);
          }}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button
        onClick={() => {
          onRemoveItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
