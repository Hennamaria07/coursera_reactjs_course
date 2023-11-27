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


//   Map()
//  allows you to create new arrays populated with the results of calling a transformation function on every element. 

// Rendering lists on official React docs website
//  dives deeper into how to display multiple similar components from a collection of data, providing examples of both filtering and transformations.

// React keys on official docs
//  offers a comprehensive set of memotecnic rules to reinforce how to use keys properly.