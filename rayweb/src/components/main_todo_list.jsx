import axios from "axios";
import React from "react";
import { Container, Row, Col, Card, Form, Nav, ListGroup, Button } from "react-bootstrap";
let x=true;
export default function TodoApp() {
    const [tasks, setTasks] = React.useState([]);
    let loadData = async()=>{
        
        let GetData = await axios.get("http://localhost:8000/");
        console.log(GetData.data);
        let finalData = GetData.data.reverse();
        setTasks(finalData);

    }

    if(x){
        loadData();
        x=false;
    }

    let addTask = async(e)=>{
        e.preventDefault();
        
        let newTask = e.nativeEvent.srcElement[0].value;
        if (newTask !== "") {
            let request = await axios.post("http://localhost:8000/add",{
                "username":"therayhan009",
                "task":newTask
            });
            e.nativeEvent.srcElement[0].value="";
    
            loadData();
        }
        
    }

  return (
    <Container style={{
        // display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        marginLeft:"22em",
        minWidth:"50vh",
        maxWidth:"45em",
        // maxHeight:"10vh",
        }}>
      <Row className="justify-content-center" >
        <Col md={800} >
          <Card className="shadow-sm p-4">
            <Card.Body>
              <Form onSubmit={addTask}>
                <Form.Control name="Ntask" type="text" placeholder="New Task..." />
              
                <Card className="shadow-sm mt-3" style={{ maxHeight: "300px", overflowY: "auto" }}>
                {tasks.map((task) => (
                    <ListGroup className="mt-3" id={task._id}>
                    <ListGroup.Item className="d-flex align-items-center">
                        {/* Checkbox for task completion */}
                        <Form.Check 
                        className="me-2 custom-checkbox"
                        style={{ transform: "scale(1.2)" }} 
                        />
                        
                        {/* Task Description */}
                        <span style={{ fontWeight: 'bold', flex: 1 ,minWidth:" 30em"}}>{task.task}</span>

                        {/* Time and Date Display */}
                        <div className="text-muted" style={{ fontSize: "0.9em", textAlign: "right" , marginLeft: "-2em" }}>
                        <div>{task.time}</div>
                        <div>{task.date}</div>
                        </div>
                    </ListGroup.Item>
                    </ListGroup>
                ))}
                </Card>
                <Button variant="primary" className="mt-3" type="submit">
                    Add Task
                </Button>
                </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

