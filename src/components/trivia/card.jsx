import { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";

function Cardinterface() {
  // Categories and their subcategories
  const categories = {
    general: ["General Knowledge", "Geography", "History", "Science", "Mathematics"],
    entertainment: ["Movies", "TV Shows", "Music", "Video Games", "Art & Literature", "Celebrities & Pop Culture"],
    sports: ["Football", "Health & Fitness", "Travel & Places", "Fashion & Lifestyle"],
    fun: ["Animals & Wildlife", "Environment & Sustainability", "Holidays & Festivals", "Business & Economy", "Medicine & Health", "Social Media Trends", "Mythology & Legends", "Random Fun Facts"],
    creativity: ["Riddles & Puzzles", "Technology & Innovation", "Mental Health & Wellness", "Adventure & Exploration", "Space & Astronomy"],
  };

  const [selected, setSelected] = useState(null);

  return (
    <main className="my-4">
      <Container>
        {/* Category Buttons */}
        <div className="mb-3 d-flex flex-wrap gap-2">
          {Object.keys(categories).map((cat) => (
            <Button key={cat} variant="outline-primary" onClick={() => setSelected(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Button>
          ))}
        </div>

        {/* Display Subcategories */}
        {selected && (
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold text-center">
                {selected.charAt(0).toUpperCase() + selected.slice(1)} Topics
              </Card.Title>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {categories[selected].map((item, idx) => (
                  <Button key={idx} variant="secondary" size="sm">
                    {item}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </Card>
        )}
      </Container>
    </main>
  );
}

export default Cardinterface;
