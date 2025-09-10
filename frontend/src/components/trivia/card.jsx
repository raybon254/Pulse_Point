import React from 'react';
import { Card, Container } from 'react-bootstrap';

function CardInterface() {
  return (
    <main style={{ 
      margin: "2rem 0", 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      background: "linear-gradient(135deg, #e6f7ff 0%, #f0f9eb 100%)",
      padding: "20px",
      fontFamily: "'Nunito', sans-serif"
    }}>
      <Container>
        <Card style={{ 
          border: "none", 
          borderRadius: "20px", 
          boxShadow: "0 10px 30px rgba(146, 187, 191, 0.2)",
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <Card.Header style={{ 
            background: "linear-gradient(90deg, #92BBBF 0%, #B5C8D6 100%)",
            border: "none",
            padding: "1.8rem",
            textAlign: "center",
            position: "relative"
          }}>
            <p style={{ 
              margin: "0", 
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "white",
              textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
              letterSpacing: "0.5px"
            }}>
              <span style={{ color: "#F5F5F5", fontWeight: "700" }}>Nurture</span> Your Mind… or <span style={{ color: "#FDFD96", fontWeight: "700" }}>Question</span> It? 
              <br />Take a Mindful Moment
            </p>
          </Card.Header>
          
          <Card.Body style={{ 
            padding: "2.2rem"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {/* Mindfulness */}
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                padding: "1rem 1.2rem",
                background: "rgba(230, 247, 255, 0.5)",
                borderRadius: "14px",
                transition: "all 0.3s ease"
              }}>
                <span style={{ 
                  fontSize: "2.2rem", 
                  marginRight: "1rem",
                  filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))"
                }}>🌿</span> 
                <div style={{ textAlign: "left", flex: "1" }}>
                  <h3 style={{ 
                    margin: "0", 
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#5A7D7C",
                    letterSpacing: "0.3px"
                  }}>
                    Mindfulness
                  </h3>
                  <p style={{ 
                    margin: "0.2rem 0 0 0", 
                    color: "#7A8D8C",
                    fontWeight: "500",
                    fontSize: "0.95rem"
                  }}>
                    Presence & awareness
                  </p>
                </div>
              </div>
              
              {/* Self-Care */}
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                padding: "1rem 1.2rem",
                background: "rgba(245, 245, 220, 0.5)",
                borderRadius: "14px",
                transition: "all 0.3s ease"
              }}>
                <span style={{ 
                  fontSize: "2.2rem", 
                  marginRight: "1rem",
                  filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))"
                }}>💆‍♂️</span> 
                <div style={{ textAlign: "left", flex: "1" }}>
                  <h3 style={{ 
                    margin: "0", 
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#5A7D7C",
                    letterSpacing: "0.3px"
                  }}>
                    Self-Care
                  </h3>
                  <p style={{ 
                    margin: "0.2rem 0 0 0", 
                    color: "#7A8D8C",
                    fontWeight: "500",
                    fontSize: "0.95rem"
                  }}>
                    Nurturing & compassion
                  </p>
                </div>
              </div>
              {/* Balance */}
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                padding: "1rem 1.2rem",
                background: "rgba(240, 249, 235, 0.5)",
                borderRadius: "14px",
                transition: "all 0.3s ease"
              }}>
                <span style={{ 
                  fontSize: "2.2rem", 
                  marginRight: "1rem",
                  filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))"
                }}>⚖️</span> 
                <div style={{ textAlign: "left", flex: "1" }}>
                  <h3 style={{ 
                    margin: "0", 
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#5A7D7C",
                    letterSpacing: "0.3px"
                  }}>
                    Balance
                  </h3>
                  <p style={{ 
                    margin: "0.2rem 0 0 0", 
                    color: "#7A8D8C",
                    fontWeight: "500",
                    fontSize: "0.95rem"
                  }}>
                    Emotional equilibrium
                  </p>
                </div>
              </div>
              
              {/* Reflection */}
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                padding: "1rem 1.2rem",
                background: "rgba(253, 253, 150, 0.2)",
                borderRadius: "14px",
                transition: "all 0.3s ease"
              }}>
                <span style={{ 
                  fontSize: "2.2rem", 
                  marginRight: "1rem",
                  filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))"
                }}>🤔</span> 
                <div style={{ textAlign: "left", flex: "1" }}>
                  <h3 style={{ 
                    margin: "0", 
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#5A7D7C",
                    letterSpacing: "0.3px"
                  }}>
                    Reflection
                  </h3>
                  <p style={{ 
                    margin: "0.2rem 0 0 0", 
                    color: "#7A8D8C",
                    fontWeight: "500",
                    fontSize: "0.95rem"
                  }}>
                    Self-awareness & insight
                  </p>
                </div>
              </div>
              
              {/* Inspiration message */}
              <div style={{ 
                fontStyle: "italic", 
                fontSize: "1.1rem", 
                color: "#6A8A89",
                margin: "1.5rem 0 0 0",
                padding: "1.2rem",
                background: "rgba(181, 200, 214, 0.15)",
                borderRadius: "14px",
                fontWeight: "500",
                lineHeight: "1.6",
                textAlign: "center",
                borderLeft: "3px solid #92BBBF"
              }}>
                🌟 Every mindful moment is an opportunity for growth. Be gentle with yourself, 
                honor your feelings, and remember that your mental health journey is unique to you.
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </main>
  );
}

export default CardInterface;