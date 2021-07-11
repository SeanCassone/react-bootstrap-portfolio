import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
const Home = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <div className="display-3">Thinkful Student + Software Engineer</div>
        <p>
          I am new to the Raleigh, NC, area. While I spend most of my time on
          the computer learning about development, I like to get outside and
          enjoy the outdoors. You can find me hiking or biking on a trail
          nearby, watching some of my favorite shows on TV, or a good sci-fi
          movie.
        </p>
      </Container>
    </Jumbotron>
  );
};
export default Home;
