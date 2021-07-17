import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
    const [searchText, setSearchText] = useState('');


    const searchStock = async () => {
        console.log('the searchText is', searchText)
        let res = await fetch(`http://localhost:3000/api/v1/search/${searchText}`)
        let data = await res.json()
        console.log(data)
    //    Write code to Create a state variable and set it to the data we received from the backend server and show it in the UI

    };


  return (
    <>
      <div className={'grid grid-cols-12'}>
          <div className={'col-span-12 p-5 text-center border-b-4 border-black'}>
              <h1 className={'text-3xl'}>Paper Trader</h1>
          </div>

          {/*Left Side Box*/}
          <div className={'col-span-12 md:col-span-7 md:border-r-4 md:border-b-0 border-b-4 border-black'}>

              <div className={'grid grid-cols-12'} style={{height: "calc(100vh - 80px)"}}>
                  <div className={'col-span-12 p-4'}>
                      <input value={searchText} onChange={(ev) => setSearchText(ev.currentTarget.value)} type="search" className={'border p-2 w-3/4 mr-4 border-gray-400 rounded'} placeholder={'Search...'}/>
                      <button onClick={searchStock} className={'px-3 py-2 bg-blue-500 rounded text-white w-24'}>Search</button>

                  </div>

                  <div className={'col-span-12 p-4'}>
                      <h1 className={'text-3xl'}>BHP - BHP Group Limited</h1>
                  </div>

                  <div className={'col-span-12 p-4'}>
                      <button className={'px-4 py-3 bg-blue-500 rounded text-white w-24'}>Buy</button>
                      <input type="number" placeholder={'Enter the quantity to buy'} className={' border border-gray-400 w-2/3 ml-2 p-2'}/>
                  </div>
              </div>



          </div>

          {/*Right Side Box*/}
          <div className={'col-span-12 md:col-span-5'}>

              <h1 className={'text-3xl p-2'}>Portfolio</h1>

          </div>

      </div>
    </>
  );
}

export default App;
