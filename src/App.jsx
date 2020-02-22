class HelloWorld extends React.Component {
  render(){
    const continents = ['Africa', 'America', 'Australia', 'New Zealand', 'Europe', 'Asia']
    const helloContinents = Array.from(continents, c => `Hello, ${c}!`)
    const message = helloContinents.join(' ');
    return(
      <div title="Outer div"> 
        <h2>Using React</h2>   
        <h1>{message}</h1>  
      </div>
    )
  }
}


const element = <HelloWorld/> 

ReactDOM.render(element, document.getElementById('contents'));
