import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Card, ListGroup, Button, ProgressBar } from "react-bootstrap"; 
import { useQuiz } from "../../contexts/QUizContext"; 
import Cardinterface from "./card";
import creativity from "../../assets/creativity.jpg";
import entertainment2 from "../../assets/entertainment2.jpeg";
import fun from "../../assets/fun.jpg";
import general from "../../assets/general.jpeg";
import sports from "../../assets/sports.jpg";
import "./category.css";

function Categories() {
  const { getQuestionsBySubcategory, validateAnswer } = useQuiz();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [quizFinished, setQuizFinished] = useState(false);

  // Questions
  useEffect(() => {
    if (selectedItem) {
      (async () => {
        const qs = await getQuestionsBySubcategory(selectedItem, 10, true);
        setQuestions(qs);
        setCurrentIndex(0);
        setScore(0);
        setQuizFinished(false);
        setTimeLeft(10);
      })();
    }
  }, [selectedItem]);

  //Timer countdown 
  useEffect(() => {
    if (questions.length === 0 || quizFinished) return;
    if (timeLeft <= 0) {
      handleNextQuestion(); // auto-move to next if time runs out
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, questions, quizFinished]);

  const categories = {
  general: ["General Knowledge", "Geography", "History", "Science", "Mathematics"],
  entertainment: ["Movies", "TV Shows", "Music", "Video Games", "Art & Literature", "Celebrities & Pop Culture"],
  sports: ["Football", "Health & Fitness", "Travel & Places", "Fashion & Lifestyle"],
  fun: ["Animals & Wildlife", "Environment & Sustainability", "Holidays & Festivals", "Business & Economy", "Medicine & Health", "Social Media Trends", "Mythology & Legends", "Random Fun Facts"],
  creativity: ["Riddles & Puzzles", "Technology & Innovation", "Mental Health & Wellness", "Adventure & Exploration", "Space & Astronomy"],
  };

  // Answer
  const handleAnswer = async (qid, cid) => {
    const result = await validateAnswer(qid, cid);
    if (result.correct) {
      setScore((prev) => prev + 100);
    }
    handleNextQuestion();
  };

  // Question sequence
  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(10);
    } else {
      setQuizFinished(true);
    }
  };

  const SidebarCard = ({ src, label, onClick }) => (
    <Card className="mb-4 shadow-sm hover-card text-center border-0" style={{ cursor: "pointer", borderRadius: "12px", background: "#f9f9f9", transition: "transform 0.2s ease, box-shadow 0.2s ease",}} onClick={onClick}>
      <Card.Body className="d-flex flex-column align-items-center">
        <Image src={src} alt={label} fluid rounded style={{ width: "200px", height: "100px", objectFit: "cover" }} className="mb-2"/>
        <span className="fw-bold" style={{ fontSize: "1.2rem", color: "#2c3e50" }}>
          {label}
        </span>
      </Card.Body>
    </Card>
  );

  const renderCenterContent = () => {
    if (!selectedCategory && !selectedItem) {
      return <Cardinterface />;
    }

   
    if (quizFinished) {
      return (
        <div className="text-center">
          <h3 className="fw-bold">Quiz Finished!</h3>
          <p className="fs-4">Your Score: {score} / {questions.length * 100}</p>
          <Button
            variant="primary"
            onClick={() => {
              setSelectedCategory(null);
              setSelectedItem(null);
              setQuestions([]);
              setScore(0);
              setQuizFinished(false);
            }}
          >
            End Quiz & Return
          </Button>
        </div>
      );
    }

    if (selectedItem && questions.length > 0) {
      const q = questions[currentIndex];
      return (
        <div className="text-center w-100">
          <h4 className="fw-bold mb-3">{q.text}</h4>
          <ProgressBar now={(timeLeft / 10) * 100} label={`${timeLeft}s`} className="mb-3"/>
          <div className="d-flex flex-column align-items-center">
            {q.choices.map((c) => (
              <Button  key={c.id}  variant="outline-dark"  className="mb-2 w-50"  onClick={() => handleAnswer(q.id, c.id)}>
                {c.text}
              </Button>
            ))}
          </div>
          <p className="mt-3">Question {currentIndex + 1} / {questions.length}</p>
          <p className="fw-bold">Score: {score}</p>
        </div>
      );
    }

    if (selectedCategory) {
      return (
        <div>
          <h3 className="fw-bold text-center mb-3">
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Topics
          </h3>
          <ListGroup>
            {/* Map from static categories list */}
            {Object.values(categories[selectedCategory]).map((item, idx) => (
              <ListGroup.Item key={idx} action style={{ cursor: "pointer" }} onClick={() => setSelectedItem(item)}>
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      );
    }
  };

  return (
    <Container fluid>
      <Row>
        {/* Left Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-stretch p-3" style={{ background: "linear-gradient(180deg, #2c3e50, #34495e)" }}>
          <SidebarCard src={general} label="General Knowledge" onClick={() => setSelectedCategory("general")} />
          <SidebarCard src={entertainment2} label="Entertainment & Media" onClick={() => setSelectedCategory("entertainment")} />
          <SidebarCard src={sports} label="Sports & Lifestyle" onClick={() => setSelectedCategory("sports")} />
        </Col>

        {/* Center Content */}
        <Col xs={12} md={8} className="d-flex justify-content-center align-items-center p-4" style={{ background: "#ecf0f1" }}>
          <Card
            className="shadow-lg border-0 p-3"
            style={{ width: "100%", maxWidth: "1020px", minHeight: "500px", borderRadius: "16px", background: "#ffffff",}}
          >
            <Card.Title className="trivia-header text-center fw-bold p-3">
              <span className="highlight3">
                🎯 <span className="fw-bolder fs-2 highlight">W</span>elcome to Trivia
              </span>{" "}
              <span className="highlight2">Challenge!</span>
            </Card.Title>
            <Card.Body className="d-flex justify-content-center align-items-center">
              {renderCenterContent()}
            </Card.Body>
          </Card>
        </Col>

        {/* Right Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-stretch p-3" style={{ background: "linear-gradient(180deg, #2c3e50, #34495e)" }}>
          <SidebarCard src={creativity} label="Mind & Creativity" onClick={() => setSelectedCategory("creativity")} />
          <SidebarCard src={fun} label="Fun & Theme" onClick={() => setSelectedCategory("fun")} />
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;

