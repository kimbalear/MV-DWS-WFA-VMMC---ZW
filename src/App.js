import { Component } from "react";
import "./App.css";
import "./styles/style.css";
import ExportPdfComponent from "./export-pdf.component";

class App extends Component {

  render() {
    return (
      <>
        <ExportPdfComponent/>
      </>
    );
  }
}
export default App;