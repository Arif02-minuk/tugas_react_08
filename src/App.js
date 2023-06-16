import React from "react";
import writer from "./writer.png";
import {
  Container,
  Navbar,
  Dropdown,
  Figure,
  Row,
  Col,
  Breadcrumb,
  Carousel,
  ListGroup,
  Jumbotron,
  Button,
  Form,
} from "react-bootstrap";
import HandleButton from "./handleButton";


function App() {
  
  return (
    <Container fluid>
      <Navbar className=" bg-dark  justify-content-between">
        <Dropdown style={{ marginTop: "-70px" }}>
          <Dropdown.Toggle variant="primary">Pilih Bahasa</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/">Bahasa sunda </Dropdown.Item>
            <Dropdown.Item href="/">Bahasa Jawa</Dropdown.Item>
            <Dropdown.Item href="/">Bahasa Indonesia</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Figure style={{ marginRight: "70px" }}>
          <Figure.Image
            width={50}
            height={50}
            alt="171x180"
            src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
          />
          <Figure.Caption className="text-white">Alan Saputra</Figure.Caption>
        </Figure>
      </Navbar>

      <br />

      <Row>
        <Col md={{ span: 3, offset: 3 }}></Col>

        <Col md={{ span: 3, offset: 3 }} style={{ backgroundColor: "#DDE6ED" }}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Berita
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Neymar Bahas Kontrak Baru Di Paris Saint-German</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600 "
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>
                  Sang Rizki Fauzi Tegaskan Mental Pemain Indonesua U-23 Tetap
                  Bagus
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col></Col>
      </Row>
      <br />
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
            <ListGroup.Item>Liga Premier Inggris</ListGroup.Item>
            <ListGroup.Item disabled>Divisi Primers</ListGroup.Item>
            <ListGroup.Item>Serie A</ListGroup.Item>
            <ListGroup.Item>Ligue 1</ListGroup.Item>
            <ListGroup.Item>Bundes Liga</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Jumbotron>
            <h1>DIVISI PRIMERA</h1>
            <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
            <p>
              <Button variant="primary">Read more</Button>
            </p>
          </Jumbotron>
        </Col>
        <Col>
          <Form>
            <Figure style={{ marginLeft: "150px" }}>
              <Figure.Image
                width={50}
                height={50}
                alt="ikon"
                src={writer}
                style={{ marginLeft: "50px" }}
              />
              <Figure.Caption>
                <h3>Silahkan Login</h3>
              </Figure.Caption>
            </Figure>
            <br />
            <Form.Group>
              <Form.Control type="email" placeholder="Maasukan Email" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Check type="checkbox" label="Term & Condition" />
            </Form.Group>
            <br />

            <HandleButton />
           
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
  

export default App;
