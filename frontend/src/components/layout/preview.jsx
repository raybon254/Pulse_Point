import { Container, Card } from "react-bootstrap";

function Preview() {
  return (
    <section style={{ 
      background: "linear-gradient(135deg, #FAF3E0 0%, #F0F4FF 100%)", 
      padding: "100px 0",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative elements */}
      <div style={{
        position: "absolute",
        top: "-80px",
        right: "-80px",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(163, 177, 138, 0.1) 0%, rgba(227, 151, 116, 0.2) 100%)",
        zIndex: "0",
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "-60px",
        left: "-60px",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(92, 158, 173, 0.1) 0%, rgba(161, 198, 234, 0.2) 100%)",
        zIndex: "0",
      }}></div>
      
      <Container style={{ position: "relative", zIndex: "1" }}>
        <Card className="mx-auto border-0" style={{ 
          maxWidth: "800px", 
          borderRadius: "20px",
          background: "linear-gradient(135deg, #EAF4F4 0%, #FFFFFF 100%)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transition: "all 0.4s ease"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.15)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)";
        }}>
          <Card.Body style={{ padding: "50px 40px", textAlign: "center" }}>
            <Card.Title style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              fontSize: "2.2rem",
              color: "#1D3557",
              marginBottom: "20px",
              textShadow: "0 2px 4px rgba(0,0,0,0.05)",
              position: "relative",
              paddingBottom: "15px"
            }}>
              A Glimpse Into CalmQuest
              <div style={{
                content: "''",
                display: "block",
                width: "60px",
                height: "3px",
                background: "linear-gradient(to right, #5C9EAD, #E39774)",
                margin: "15px auto 0",
                borderRadius: "2px",
              }}></div>
            </Card.Title>
            <Card.Text style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.15rem",
              color: "rgba(29, 53, 87, 0.8)",
              lineHeight: "1.7",
              marginBottom: "0",
            }}>
              Discover how our platform blends interactive experiences with wellness tools to help
              you stay focused, connected, and inspired every day.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default Preview;