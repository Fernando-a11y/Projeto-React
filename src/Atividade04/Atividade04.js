// Ensure these paths are correct
import Toolbar from "./componentes/Toolbar";
import Counter from "./componentes/Counter";
import Form from "./componentes/Form";
import MovingDot from "./componentes/MovingDot";
import Form2 from "./componentes/Form2";
import Form3 from "./componentes/Form3";
import List from "./componentes/List";
import List2 from "./componentes/List2";
import ShapeEditor from "./componentes/ShapeEditor";
import CounterList from "./componentes/CounterList";
import List3 from "./componentes/List3";
import List4 from "./componentes/List4";
import BucketList from "./componentes/BucketList";
import { Link } from "react-router-dom";


export default function Atividade04(){
    return (
        <>
          <h2> Atividade 04</h2>
          <Link className="voltar" to="/"> Voltar</Link>
          <Toolbar />
          <Counter />
          <Form />
          <MovingDot />
          <Form2 />
          <Form3 />
          <List />
          <List2 />
          <ShapeEditor />
          <CounterList />
          <List3 />
          <List4 />
          <BucketList />
        </>
    );
}
