
import './App.css';
import { Contract } from './Components/Contract';

function App() {

  const data=[
    {
      "img": "http://dummyimage.com/100x100.png/dddddd/000000",
      "name": "Dimeloe",
      "email": "hdimeloe1@1und1.de",
      "phone": "303-218-6519"
    }, {
      "img": "http://dummyimage.com/100x100.png/ff4444/ffffff",
      "name": "Knapp",
      "email": "fknapp2@unc.edu",
      "phone": "506-818-1340"
    }, {
      "img": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      "name": "Otterwell",
      "email": "fotterwell3@purevolume.com",
      "phone": "975-674-3436"
    }, {
      "img": "http://dummyimage.com/100x100.png/dddddd/000000",
      "name": "Braunfeld",
      "email": "nbraunfeld4@latimes.com",
      "phone": "437-156-5391"
    }, {
      "img": "http://dummyimage.com/100x100.png/cc0000/ffffff",
      "name": "Dymond",
      "email": "wdymond5@yolasite.com",
      "phone": "689-686-8290"
    }, {
      "img": "http://dummyimage.com/100x100.png/dddddd/000000",
      "name": "Sandys",
      "email": "osandys6@toplist.cz",
      "phone": "939-258-1242"
    }, {
      "img": "http://dummyimage.com/100x100.png/dddddd/000000",
      "name": "Winston",
      "email": "mwinston7@paypal.com",
      "phone": "758-890-0904"
    }, {
      "img": "http://dummyimage.com/100x100.png/ff4444/ffffff",
      "name": "Westbrook",
      "email": "jwestbrook8@theatlantic.com",
      "phone": "377-754-7536"
    }, {
      "img": "http://dummyimage.com/100x100.png/dddddd/000000",
      "name": "McNess",
      "email": "wmcness9@indiatimes.com",
      "phone": "267-786-2505"
    }, {
      "img": "http://dummyimage.com/100x100.png/dddddd/000000",
      "name": "Bridgeman",
      "email": "cbridgemana@ca.gov",
      "phone": "121-714-5334"
    }, {
      "img": "http://dummyimage.com/100x100.png/dddddd/000000",
      "name": "Bartlomiej",
      "email": "abartlomiejb@columbia.edu",
      "phone": "394-841-3654"
    }
  ]
  return (
    <div className="App">
      <h2>Contract</h2>
      
      {data.map((e)=>{
        return <Contract key={e.phone} name={e.name} img={e.img} phone={e.phone} email={e.email}/>
        })}
    </div>

  );
}

export default App;
