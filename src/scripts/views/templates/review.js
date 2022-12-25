const AddReview = () => `
<form class="review-form" autocomplete="on">
        <div class="name-container">
          <label for="input-name">Name</label>
          <input placeholder="Your Name"  id="input-name" type="text" required />
        </div>
        <div class="review-container">
          <label for="input-review">Review</label>
          <textarea placeholder="Your Review"  id="input-review" cols="30" rows="4" required ></textarea>
        </div>
        <button tabindex="0" id="button-review" type="submit">Add Review</button>
      </form>
`;
export default AddReview;
