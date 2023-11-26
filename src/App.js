
function App() {
  const data = [
    {
      id: "1",
      title: 'Tiramisu',
      description: "The best taramisu in the town",
      image: "https://plus.unsplash.com/premium_photo-1695123861830-f53335412fb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "5.00$"
    },
    {
      id: "2",
      title: 'Lemon Ice Cream',
      description: "Mind blowing taste",
      image: "https://plus.unsplash.com/premium_photo-1678198786424-c2cc6593f59c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb24lMjBpY2VjcmVhbXxlbnwwfHwwfHx8MA%3D%3D",
      price: "4.50$"
    },
    {
      id: "3",
      title: 'Chocolate Mousse',
      description: "Unexplored flavour",
      image: "https://plus.unsplash.com/premium_photo-1674176787634-86d9676a028c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNob2NvbGF0ZSUyMG1vdXNzZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "6.00$"
    }
  ]
  const topDessert = data.map((element) => {    //MAP() RETURNS A NEW ARRAY
    return {
      caption: `${element.title} - ${element.description}`,
      price: element.price
    }
  })
  return (
    <div className="App">
      <h1>Transformation List in js</h1>
      {console.log(topDessert)}
    </div>
  );
}

export default App;
