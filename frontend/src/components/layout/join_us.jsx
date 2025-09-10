import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function CallToAction() {
  return (
    <section style={{ 
      background: "linear-gradient(135deg, #A3B18A 0%, #DAD7CD 50%, #9C8A7C 100%)", 
      color: "#1D3557", 
      padding: "100px 0",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative elements */}
      <div style={{
        position: "absolute",
        top: "-80px",
        left: "-80px",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.15)",
        zIndex: "0",
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "-100px",
        right: "-100px",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(163, 177, 138, 0.2)",
        zIndex: "0",
      }}></div>
      
      <Container className="text-center" style={{ position: "relative", zIndex: "1" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: "700",
          fontSize: "2.8rem",
          marginBottom: "24px",
          color: "#1D3557",
          textShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}>
          Start Your CalmQuest Journey Today
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.25rem",
          marginBottom: "40px",
          color: "rgba(29, 53, 87, 0.9)",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.6",
        }}>
          Join a supportive community and explore AI-powered tools for your mind and heart.
        </p>
        <Button 
          as={NavLink} 
          to="/trivia" 
          size="lg" 
          style={{
            backgroundColor: "#5C9EAD",
            color: "white",
            border: "none",
            borderRadius: "30px",
            padding: "14px 40px",
            fontSize: "1.1rem",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(92, 158, 173, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#4d8a99";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 16px rgba(92, 158, 173, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#5C9EAD";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 12px rgba(92, 158, 173, 0.3)";
          }}
        >
          Get Started
        </Button>
      </Container>
    </section>
  );
}

export default CallToAction;