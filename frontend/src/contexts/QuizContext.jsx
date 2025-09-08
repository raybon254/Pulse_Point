import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const API_BASE = "http://localhost:5000/api"; 


  const getCategories = async () => {
    try {
      const res = await fetch(`${API_BASE}/categories`);
      if (!res.ok) throw new Error("Failed to fetch categories");
      return await res.json();
    } catch (err) {
      console.error("Error fetching categories:", err);
      return [];
    }
  };


  const getSubcategories = async (categoryKey = null) => {
    try {
      let url = `${API_BASE}/subcategories`;
      if (categoryKey) url += `?category=${categoryKey}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch subcategories");
      return await res.json();
    } catch (err) {
      console.error("Error fetching subcategories:", err);
      return [];
    }
  };


  const getQuestionsBySubcategory = async (subcategory, limit = 30, shuffle = true) => {
    try {
      const url = `${API_BASE}/questions?subcategory=${encodeURIComponent(
        subcategory
      )}&limit=${limit}&shuffle=${shuffle}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch questions");
      return await res.json();
    } catch (err) {
      console.error("Error fetching questions:", err);
      return [];
    }
  };

 
  const getRandomMixed = async (perSubcategory = 5) => {
    try {
      const url = `${API_BASE}/random?per_subcategory=${perSubcategory}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch mixed random questions");
      return await res.json();
    } catch (err) {
      console.error("Error fetching mixed questions:", err);
      return [];
    }
  };


  const validateAnswer = async (questionId, choiceId) => {
    try {
      const res = await fetch(`${API_BASE}/validate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question_id: questionId, choice_id: choiceId }),
      });
      if (!res.ok) throw new Error("Failed to validate answer");
      return await res.json(); 
    } catch (err) {
      console.error("Error validating answer:", err);
      return { correct: false };
    }
  };

  return (
    <QuizContext.Provider
      value={{
        getCategories,
        getSubcategories,
        getQuestionsBySubcategory,
        getRandomMixed,
        validateAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};


export const useQuiz = () => useContext(QuizContext);
