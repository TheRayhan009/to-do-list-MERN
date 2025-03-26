export default function Home() {

    let c = async(e)=>{
        e.preventDefault();
        
        console.log( e.nativeEvent.srcElement.elements.email.value );
        console.log( e.nativeEvent.srcElement.elements.pass.value );
        console.log( e.nativeEvent.srcElement.elements.check.checked );
        // e.nativeEvent.srcElement.elements.email.value = '';
    
      }
      
    return(
        <>
    <Form onSubmit={c}>
      <Form.Group className="mb-3" controlId="formBasicEmail "  >
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='pass' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name='check' type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>


    )
  }
  