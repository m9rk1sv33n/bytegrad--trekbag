import Button from "./Button";

const secondaryButtons = [
  "Mark all as complete",
  "Mark all as imcomplete",
  "Reset to initial",
  "Remove all items",
];

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button key={button} type="secondary">
          {button}
        </Button>
      ))}
    </section>
  );
}
