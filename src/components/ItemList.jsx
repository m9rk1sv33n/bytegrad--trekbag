const items = [
  {
    name: "good mood",
    packed: true,
  },
  {
    name: "socks",
    packed: false,
  },
  {
    name: "toothbrush",
    packed: true,
  },
];

export default function ItemList() {
  return (
    <ul>
      {items.map((item, index) => {
        return <ListItem key={index} item={item} />;
      })}
    </ul>
  );
}

function ListItem({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {item.name}
      </label>
    </li>
  );
}
