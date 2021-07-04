import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import ProjectReviewsSummary from './ProjectReviewsSummary';
import ProjectReviewCard from './ProjectReviewCard';

const ProjectReviews = (props) => {
  const { reviews, ...other } = props;

  const rating = reviews.reduce((acc, review) => acc + review.value, 0) / reviews.length;

  return (
    <div {...other}>
      <ProjectReviewsSummary
        rating={rating}
        reviewsCount={reviews.length}
      />
      {reviews.map((review) => (
        <Box
          key={review.id}
          sx={{ mt: 2 }}
        >
          <ProjectReviewCard
            authorAvatar={review.author.avatar}
            authorName={review.author.name}
            comment={review.comment}
            createdAt={review.createdAt}
            value={review.value}
          />
        </Box>
      ))}
    </div>
  );
};

ProjectReviews.propTypes = {
  reviews: PropTypes.array
};

export default ProjectReviews;
