const RB=ReactBootstrap;
const {Alert, Card, Button, Table} = ReactBootstrap;


class App extends React.Component {
    title = (
      <Alert variant="info">
        <b>Work6 :</b> Firebase
      </Alert>
    );
    footer = (
      <div>
        By xxxxxxxxxx-x xxxxxxxxxxxxx xxxxxxxxxxxxxx <br />
        College of Computing, Khon Kaen University
      </div>
    );
    state = {
        scene: 0,
    }      
    render() {
      return (
        <Card>
          <Card.Header>{this.title}</Card.Header>  
          <Card.Body></Card.Body>
          <Card.Footer>{this.footer}</Card.Footer>
        </Card>          
      );
    }      
const firebaseConfig = {
  apiKey: "AIzaSyDOHna1KebH_Yrv5q9WUEw7_zkfTpx1cBQ",
  authDomain: "web2567-a5441.firebaseapp.com",
  projectId: "web2567-a5441",
  storageBucket: "web2567-a5441.firebasestorage.app",
  messagingSenderId: "738533559337",
  appId: "1:738533559337:web:7a5ecae9fe687c1960a038",
  measurementId: "G-784M00GQML"
};
firebase.initializeApp(firebaseConfig);      
const db = firebase.firestore();
db.collection("students").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`,doc.data());
  });
});
  }



  const container = document.getElementById("myapp");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);

