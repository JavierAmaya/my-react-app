import React,{useState} from "react";
import Header,{} from "../components/header";
import Card, {} from "../components/cards";

import {information_service} from "../fakeservices/information"

const Course:React.FC = () => {
    const [showConfirmation,setShowConfirmation] = useState(true);
    const [action, setAction]= useState(false);
    const [question,setQuestion] = useState(false);
    const [sad,setSad] = useState(false);


    const accept = ()=>{
        setShowConfirmation(false);
        setAction(true);
        setQuestion(false);
        setSad(false);
    }

    const reject = () => {
        setShowConfirmation(false);
        setAction(false);
        setQuestion(true);
        setSad(true);
    }

    const again = () =>{
        setShowConfirmation(true);
        setAction(false);
        setQuestion(false);
        setSad(false);
    }

    

    return(
        <div>
          <Header title="Base de Datos" show_button={question} again={again}/>
          <Card
             open={showConfirmation}
             title={information_service[0].title}
             description={information_service[0].description}
             question={information_service[0].pregunta}
             label_main_btn={information_service[0].label_main_btn}
             show_second_btn
             doit = {accept}
             reject={reject}
          />
          <Card
             open={action}
             title={information_service[1].title}
             description={information_service[1].description}
             label_main_btn={information_service[1].label_main_btn}
             show_second_btn={false}
             doit={() => window.location.replace("https://github.com/JavierAmaya/my-react-app")}
          />
          <Card
              open={sad}
              title="Que lastima :("
              description="Vuelvelo a pensar"
              label_main_btn="Volver a preguntar"
              show_second_btn={false}
              doit={again}
          /> 
          
        </div>
    )
};

export default Course;
