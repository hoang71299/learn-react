export default function NavigationMenu() {
  const handleClick = (e) => {
    console.log(e.target);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    console.log(e.target[0].value);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Click me</button>
      </form>
      
    </div>
  );
}
