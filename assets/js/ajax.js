const reviewTexts = document.querySelectorAll('.review-text');
let currentReviewIndex = 0;

function showReview(index) {
  reviewTexts.forEach((reviewText, i) => {
    if (i === index) {
      reviewText.classList.add('active');
    } else {
      reviewText.classList.remove('active');
    }
  });
}

function nextReview() {
  currentReviewIndex = (currentReviewIndex + 1) % reviewTexts.length;
  showReview(currentReviewIndex);
}

setInterval(nextReview, 10000); /* Adjust the interval duration as per your requirement */
