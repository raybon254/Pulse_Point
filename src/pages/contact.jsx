import { Form, Button } from "react-bootstrap";
// Implement yulp for validation

function Contact() {
    return(
        <Form onSubmit="">
            <Form.Group>
                {/* name */}
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="ray junior" />

                {/* Email */}
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="ray@mail.com" />

                {/* Contact */}
                <Form.Label>Contact</Form.Label>
                <Form.Control type="phone" placeholder="+2547000000" />

                {/* Enquiry */}
                <Form.Label>Enquiry/Proposal</Form.Label>
                <Form.Control type="textarea" placeholder="Enter text here..." />
                <Form.Text>Your contribution is our great concern.</Form.Text>
            </Form.Group>

            <Button variant="primary">Submit</Button>
        </Form>
    )
}


export default Contact;