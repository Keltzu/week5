import { useEffect } from 'react';

useEffect(() => {
    console.log('UseEffect2 Ran');
    if (toggleTwo)
      console.log('toggleTwo slice of state is true so this code runs');
  }, [toggleTwo]);
const UseEffectTest = () => {
  useEffect(() => {
    console.log('UseEffect1 Ran');
  }, []);

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleOne(!toggleTwo)}>toggleTwo</button>
    </div>
  );
};

export default UseEffectTest;