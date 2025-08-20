import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contact: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number")
    .required("Contact is required"),
  enquiry: Yup.string().min(10, "At least 10 characters").required("Enquiry is required"),
});

function Contact() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4 fw-bold">Contact Us</h2>

          <Formik
            initialValues={{ name: "", email: "", contact: "", enquiry: "" }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Submitted Data:", values);
              alert("Thank you! We’ll get back to you soon.");
              resetForm();
            }}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <Form noValidate onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
                {/* Name */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Ray Junior"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={touched.name && !!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="ray@mail.com"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Contact */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Contact</Form.Label>
                  <Form.Control
                    type="tel"
                    name="contact"
                    placeholder="+254700000000"
                    value={values.contact}
                    onChange={handleChange}
                    isInvalid={touched.contact && !!errors.contact}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.contact}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Enquiry */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Enquiry/Proposal</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="enquiry"
                    placeholder="Enter your text here..."
                    value={values.enquiry}
                    onChange={handleChange}
                    isInvalid={touched.enquiry && !!errors.enquiry}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.enquiry}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Your contribution is our great concern.
                  </Form.Text>
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" variant="primary" size="lg">
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
