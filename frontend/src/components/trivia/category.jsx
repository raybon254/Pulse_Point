import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Card, Button, ProgressBar } from "react-bootstrap"; 
import { useQuiz } from "../../contexts/QuizContext"; 
import Cardinterface from "./card";
import creativity from "../../assets/creativity.jpg";
import entertainment2 from "../../assets/entertainment2.jpeg";
import fun from "../../assets/fun.jpg";
import general from "../../assets/general.jpeg";
import sports from "../../assets/sports.jpg";

function Categories() {
  const { getQuestionsBySubcategory, validateAnswer } = useQuiz();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [quizFinished, setQuizFinished] = useState(false);

  // Alerts
  const alert = (file) => {
    const audio = new Audio(`/alerts/${file}`);
    audio.play().catch((err) => {
      console.error("Audio play failed:", err);
    });
  }

  // Questions
  useEffect(() => {
    if (selectedItem) {
      (async () => {
        const qs = await getQuestionsBySubcategory(selectedItem, 10, true);
        setQuestions(qs);
        setCurrentIndex(0);
        setScore(0);
        setQuizFinished(false);
        setTimeLeft(20);
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
      alert("success.wav");
      setScore((prev) => prev + 100);
    }
    else{
      alert("fail.wav")
    }
    handleNextQuestion();
  };

  // Question sequence
  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(20);
    } else {
      alert("completed.wav")
      setQuizFinished(true);
    }
  };

  const SidebarCard = ({ src, label, onClick, emoji }) => (
    <Card 
      className="mb-4 text-center border-0" 
      style={{ 
        cursor: "pointer", 
        borderRadius: "18px", 
        background: "linear-gradient(135deg, #E6F2FF, #F0F8FF)",
        transition: "all 0.3s ease",
        boxShadow: "0 6px 15px rgba(163, 177, 138, 0.15)",
        overflow: "hidden"
      }} 
      onClick={onClick}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 20px rgba(163, 177, 138, 0.2)";
        e.currentTarget.style.background = "linear-gradient(135deg, #DAE8FF, #E6F2FF)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(163, 177, 138, 0.15)";
        e.currentTarget.style.background = "linear-gradient(135deg, #E6F2FF, #F0F8FF)";
      }}
    >
      <Card.Body className="d-flex flex-column align-items-center p-3">
        <div style={{ 
          fontSize: "2.5rem", 
          marginBottom: "12px",
          filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))"
        }}>
          {emoji}
        </div>
        <Image 
          src={src} 
          alt={label} 
          fluid 
          style={{ 
            width: "100%", 
            height: "100px", 
            objectFit: "cover", 
            borderRadius: "12px",
            border: "2px solid rgba(163, 177, 138, 0.2)"
          }} 
          className="mb-3"
        />
        <span className="fw-semibold" style={{ 
          fontSize: "1rem", 
          color: "#5A7D7C", 
          fontFamily: "'Nunito', sans-serif",
          letterSpacing: "0.3px"
        }}>
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
        <div className="text-center py-4">
          <div style={{ fontSize: "4.5rem", marginBottom: "25px", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}>🎉</div>
          <h3 className="fw-bold mb-3" style={{ color: "#5A7D7C", fontFamily: "'Nunito', sans-serif", fontSize: "2.2rem" }}>Quiz Completed!</h3>
          <p className="fs-4 mb-4" style={{ color: "#7A8D8C", fontFamily: "'Nunito', sans-serif" }}>Your Score: <span style={{ color: "#92BBBF", fontWeight: "bold" }}>{score}</span> / {questions.length * 100}</p>
          <Button
            style={{
              backgroundColor: "#92BBBF",
              border: "none",
              borderRadius: "25px",
              padding: "12px 30px",
              fontWeight: "600",
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.1rem",
              boxShadow: "0 4px 12px rgba(146, 187, 191, 0.3)",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#7AA8AC";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#92BBBF";
              e.target.style.transform = "scale(1)";
            }}
            onClick={() => {
              setSelectedCategory(null);
              setSelectedItem(null);
              setQuestions([]);
              setScore(0);
              setQuizFinished(false);
            }}
          >
            Play Again
          </Button>
        </div>
      );
    }

    if (selectedItem && questions.length > 0) {
      const q = questions[currentIndex];
      return (
        <div className="text-center w-100 px-3">
          <h4 className="fw-bold mb-4" style={{ color: "#5A7D7C", fontFamily: "'Nunito', sans-serif", fontSize: "1.6rem", lineHeight: "1.4" }}>{q.text}</h4>
          
          <ProgressBar 
            now={(timeLeft / 20) * 100} 
            label={`${timeLeft}s`} 
            className="mb-4 mx-auto"
            style={{ 
              height: "20px", 
              borderRadius: "15px", 
              width: "90%",
              border: "2px solid rgba(163, 177, 138, 0.2)"
            }}
            variant={timeLeft <= 5 ? "danger" : timeLeft <= 10 ? "warning" : "success"}
          />
          
          <div className="d-flex flex-column align-items-center mb-4">
            {q.choices.map((c) => (
              <Button  
                key={c.id}  
                variant="outline-primary" 
                className="mb-3 w-75" 
                style={{
                  borderRadius: "15px",
                  padding: "14px",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "1.1rem",
                  border: "2px solid #B5C8D6",
                  color: "#5A7D7C",
                  backgroundColor: "rgba(181, 200, 214, 0.1)",
                  transition: "all 0.2s ease",
                  fontWeight: "500"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#B5C8D6";
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1.03)";
                  e.target.style.borderColor = "#A3B18A";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "rgba(181, 200, 214, 0.1)";
                  e.target.style.color = "#5A7D7C";
                  e.target.style.transform = "scale(1)";
                  e.target.style.borderColor = "#B5C8D6";
                }}
                onClick={() => handleAnswer(q.id, c.id)}
              >
                {c.text}
              </Button>
            ))}
          </div>
          
          <div className="d-flex justify-content-between px-4">
            <p style={{ color: "#7A8D8C", fontFamily: "'Nunito', sans-serif", fontWeight: "500" }}>
              Question {currentIndex + 1} / {questions.length}
            </p>
            <p className="fw-bold" style={{ color: "#92BBBF", fontSize: "1.2rem", fontFamily: "'Nunito', sans-serif" }}>
              Score: {score}
            </p>
          </div>
        </div>
      );
    }

    if (selectedCategory) {
      return (
        <div className="w-100 px-3">
          <h3 className="fw-bold text-center mb-4" style={{ 
            color: "#5A7D7C", 
            fontFamily: "'Nunito', sans-serif", 
            fontSize: "1.8rem",
            textShadow: "1px 1px 2px rgba(0,0,0,0.05)"
          }}>
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Topics
          </h3>
          <div className="d-flex flex-wrap justify-content-center">
            {categories[selectedCategory].map((item, idx) => (
              <div 
                key={idx} 
                style={{
                  cursor: "pointer",
                  background: "linear-gradient(135deg, #F5F9FF, #FFFFFF)",
                  margin: "10px",
                  padding: "18px 22px",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 5px 12px rgba(163, 177, 138, 0.15)",
                  transition: "all 0.3s ease",
                  minWidth: "180px",
                  border: "1px solid rgba(163, 177, 138, 0.1)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 18px rgba(163, 177, 138, 0.2)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #E6F2FF, #F5F9FF)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 12px rgba(163, 177, 138, 0.15)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #F5F9FF, #FFFFFF)";
                }}
                onClick={() => setSelectedItem(item)}
              >
                <span style={{ 
                  fontFamily: "'Nunito', sans-serif", 
                  color: "#5A7D7C", 
                  fontWeight: "600",
                  fontSize: "0.95rem"
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <Container fluid style={{ 
      background: "linear-gradient(135deg, #F8FBFF 0%, #F0F8FF 100%)", 
      minHeight: "100vh", 
      padding: "25px 0",
      fontFamily: "'Nunito', sans-serif"
    }}>
      <Row className="justify-content-center">
        {/* Left Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-stretch p-3">
          <SidebarCard src={general} label="General Knowledge" onClick={() => setSelectedCategory("general")} emoji="📚" />
          <SidebarCard src={entertainment2} label="Entertainment & Media" onClick={() => setSelectedCategory("entertainment")} emoji="🎬" />
          <SidebarCard src={sports} label="Sports & Lifestyle" onClick={() => setSelectedCategory("sports")} emoji="⚽" />
        </Col>

        {/* Center Content */}
        <Col xs={12} md={8} className="d-flex justify-content-center align-items-center p-4">
          <Card
            className="border-0 p-4"
            style={{ 
              width: "100%", 
              maxWidth: "1000px", 
              minHeight: "550px", 
              borderRadius: "22px", 
              background: "linear-gradient(135deg, #FFFFFF, #F8FBFF)",
              boxShadow: "0 15px 35px rgba(146, 187, 191, 0.2)",
              border: "1px solid rgba(181, 200, 214, 0.3)"
            }}
          >
            <Card.Title 
              className="text-center fw-bold p-3 mb-4"
              style={{
                background: "linear-gradient(90deg, #92BBBF, #B5C8D6)",
                borderRadius: "16px",
                color: "white",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "2rem",
                fontWeight: "700",
                letterSpacing: "0.5px",
                textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                boxShadow: "0 5px 15px rgba(146, 187, 191, 0.3)"
              }}
            >
              🌟 Mindful Trivia Challenge
            </Card.Title>
            <Card.Body className="d-flex justify-content-center align-items-center">
              {renderCenterContent()}
            </Card.Body>
          </Card>
        </Col>

        {/* Right Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-stretch p-3">
          <SidebarCard src={creativity} label="Mind & Creativity" onClick={() => setSelectedCategory("creativity")} emoji="💡" />
          <SidebarCard src={fun} label="Fun & Theme" onClick={() => setSelectedCategory("fun")} emoji="🎉" />
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;