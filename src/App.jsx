import Nav from "./components/Nav";
import Card from "./components/Card";
import cardData from "./cardData";

function App() {
  const cardElements = cardData.map((item) => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Nav />
      <section>
        {cardElements}
      </section>
    </div>
  )
}

export default App