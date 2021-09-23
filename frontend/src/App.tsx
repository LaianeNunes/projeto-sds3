import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container"> {/*para deixar as coisas em caixinha*/}
        <h1 className="text-primary py-3">DashBorad de vendas </h1>{/*py é espaçamento vertical(em y), isso ocorre devido ao bootstrap*/}

        <div className="row px-3"> {/*vou deixar em linha e com espaçamento na horizontal(em x) de 3*/}
          <div className="col-sm-6"> {/*o bootstrap separa o seu layout em 12 partes, e se eu falar que estou usando 6 das 12 é o mesmo que falar que estou usando a metade*/}
            <h5 className="text-center text-secondary"> Taxa de sucesso (%)</h5> {/*aqui devido ao bootstrap, consigo fazer alguns comandos com className; como alinhar o texto*/}
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> Todas vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary"> Todas vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
