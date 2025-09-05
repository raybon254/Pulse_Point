import { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";

function Cardinterface() {
  return (
    <main className="my-4">
      <Container>
        <Card>
          <Card.Header className=" fw-bold fs-3 text-center text-muted">
                <p><span className=" text-success">Trust</span> Your Brain… or <span className=" text-danger">Doubt</span> It? Take the Challenge!</p>
            </Card.Header >
          <Card.Body  className="fw-bold text-center">
            <Card.Text className="d-flex flex-column ">
                <p><span className="fs-1">🎯</span> <span className=" text-muted"><span className="fs-3 text-muted">T</span>arget</span> <span className="text-body-secondary">→ focus & winning</span></p>
                <p><span className="fs-1">🧠</span> <span className=" text-muted"><span className="fs-3 text-muted">B</span>rain</span> <span className="text-body-secondary">→ knowledge</span></p>
                <p><span className="fs-1">🔥</span> <span className=" text-muted"><span className="fs-3 text-muted">F</span>ire</span> <span className="text-body-secondary">→ excitement, energy</span></p>
                <p><span className="fs-1">🤔</span> <span className=" text-muted"><span className="fs-3 text-muted">T</span>hinking face</span> <span className="text-body-secondary">→ decision making</span></p>
                <p class="fst-italic fs-5 text-muted">
                  🌟 Every question is a chance to prove yourself. Think fast, trust your instincts, and see how far your knowledge takes you!
                </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </main>
  );
}

export default Cardinterface;
