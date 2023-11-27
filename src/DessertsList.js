function DessertsList({data}) {
    // Implement the component here.
    const filteredDesserts = data.filter(dessert => dessert.calories < 500);
    const sortedDesserts = filteredDesserts.sort((a, b) => a.calories - b.calories);
    let Lists = sortedDesserts.map((element) => {
      const DessertsList = `${element.name} - ${element.calories} cal`;
      return <li>{ DessertsList }</li>;
    })
    return <ul>
      {Lists}
    </ul>;
  }
  
  export default DessertsList;