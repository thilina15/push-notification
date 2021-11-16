import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={async()=>{
          let sw = await navigator.serviceWorker.ready;
          let push = await sw.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey:
              "BHBGsh8bWs6kOnxm0FdNe0Ibh6bEd6niewiFeyAQdfgvRkLq2FTosy9a1Io9BJrhLqNmkaALAhV45Paz9txzNpI",
          });
          // let x = "hi thilina";
          // document.getElementById("key").innerHTML = JSON.stringify(push);
          console.log(JSON.stringify(push));
        }}>subscribe</button>

<button onClick={async()=>{
          navigator.serviceWorker.ready.then(function(reg) {
            reg.pushManager.getSubscription().then(function(subscription) {
              subscription.unsubscribe().then(function(successful) {
                console.log('unsubscribed successfull..!');
              }).catch(function(e) {
                // Unsubscription failed
                console.log('operation error');
              })
            })
          });
          
        }}>unsubscribe</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
