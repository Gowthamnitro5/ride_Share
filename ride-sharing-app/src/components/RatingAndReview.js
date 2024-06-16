import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const RatingAndReview = () => {
  const { offerId } = useParams(); // Get offerId from URL params
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send rating and comment to backend API
    // You can use fetch or any other method to send data to backend
    fetch(`/api/rate-ride/${offerId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating, comment }),
    })
      .then((response) => {
        if (response.ok) {
          // Rating submitted successfully
          // You can redirect or show a success message here
        } else {
          // Handle errors
          throw new Error('Failed to submit rating');
        }
      })
      .catch((error) => {
        console.error('Error submitting rating:', error);
        // Handle error state or display error message to user
      });
  };

  return (
    <div>
      <h2>Rate and Review Ride</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <select value={rating} onChange={handleRatingChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <label>Comment:</label>
          <textarea value={comment} onChange={handleCommentChange} />
        </div>
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
};

export default RatingAndReview;
