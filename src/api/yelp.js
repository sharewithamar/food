import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer LFuP-KCohN6FUw31YQyS6icOixk762fNvFPqE_hrfEjt6uQ_qwoBXA0KkcBv8T7rsd2jXKvKm1dzS4GVZ4F8r6nB6kaV-jD9F5kGnkhHinwx12JpXVj7mO0E2ILoXnYx',
  },
});
