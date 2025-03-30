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
                "task":newTask,
            });
            e.nativeEvent.srcElement[0].value="";
    
            loadData();
        }
        
    }

    let delData = async (taskID)=>{
      let deleteData = await axios.post("http://localhost:8000/del",{
        "id":taskID
      })
      loadData();
    }

    let TaskDone = async(Taskid)=>{
      let ComTaskData = await axios.post("http://localhost:8000/comtask",{
        "id":Taskid
      });
      // console.log("data:",ComTaskData );
      loadData();
      return <Foote /> ;

    }

  return (
    <Container style={{
        // display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        marginLeft:"14em",
        minWidth:"100vh",
        maxWidth:"200vh",
        // maxHeight:"10vh",
        }}>
      <Row className="justify-content-center" >
        <Col md={900} >
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
                          onChange={() => TaskDone(task._id)}
                          checked={task.doneOrNot}
                          disabled={task.doneOrNot}
                        />

                        {/* Task Description */}
                        <span 
                          className="fw-bold flex-grow-1" 
                          style={task.doneOrNot ? { textDecoration: "line-through", color: "gray" } : {}}>
                          {task.task}
                        </span>

                        {/* Edit & Delete Buttons */}
                        <Button variant="primary" className="ms-2" >Edit</Button>
                        <Button variant="danger" className="ms-2" onClick={() => delData(task._id)}>Delete</Button>

                        {/* Time and Date Display */}
                        <div className="text-muted ms-auto text-end" style={{ fontSize: "0.9em"} }>
                          <div>{task.time}</div>
                          <div style={{marginLeft:"15px"}}>{task.date}</div>
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

