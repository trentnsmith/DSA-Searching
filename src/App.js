import React from 'react';

function App() {

  const data = [
    89, 30, 25, 32, 72, 70, 51, 42,
    25, 24, 53, 55, 78, 50, 13, 40, 
    48, 32, 26, 2, 14, 33, 45, 72, 
    56, 44, 21, 88, 27, 68, 15, 62, 
    93, 98, 73, 28, 16, 46, 87, 28, 
    65, 38, 67, 16, 85, 63, 23, 69, 
    64, 91, 9, 70, 81, 27, 97, 82, 
    6, 88, 3, 7, 46, 13, 11, 64, 76, 
    31, 26, 38, 28, 13, 17, 69, 90, 
    1, 6, 7, 64, 43, 9, 73, 80, 98, 
    46, 27, 22, 87, 49, 83, 6, 39, 42, 
    51, 54, 84, 34, 53, 78, 40, 14, 5,
  ]

  const linearSearch = (data, num) => {

    for(let i =0; i< data.length; i++){
      console.log(data[i], num);
      if(data[i] == num){
        return `Found ${num} in ${i + 1} tries`;
      }
    }
    return `${num} not found in ${data.length} tries`;
  }

  const binarySearch = (data, value, start, end, numSearch) =>{
    let starter = start === undefined ? 0: start;
    let ender = end === undefined ? data.length: end;
    let searches = numSearch === undefined ? 0: numSearch;

    if(starter > ender){
      return -1;
    }
    const index = Math.floor((starter + ender)/2);
    const item = data[index];

    console.log(starter, ender);
    if(item == value){
      return `Found ${value} in ${searches} searches`;
    }else if(item < value){
      searches++
      return binarySearch(data, value, index + 1, ender, searches);
    }else if(item > value){
      searches++
      return binarySearch(data, value, starter, index -1, searches);
    }
  };


   const handleSubmit = (e) =>{
    e.preventDefault();
    let target = e.target.numInput.value;
    console.log(target);
    // alert(linearSearch(data, target));
    const sorted = data.sort((a, b) =>{
      return a-b;
    })
    console.log(sorted);
    alert(binarySearch(sorted, target));
  }

  return (
    <main className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='inputData'>Input Data</label>
        <input id ='numInput' type='text' name='inputData' />
        <button type='submit'>Submit</button>
      </form>
      
    </main>
  );
}

export default App;
