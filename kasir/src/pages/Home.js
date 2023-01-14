import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Hasil from "../component/Hasil";
import ListKategori from "../component/ListKategori";
import Menus from "../component/Menus";
import UseFetch from "../utils/UseFetch";

const Home = () => {
  const { data: kategories, loadingKategories } = UseFetch(
    "http://localhost:8000/categories"
  );

  const { data: menus, loadingMenus } = UseFetch(
    "http://localhost:8000/products"
  );

  let [kategoriAktif, setKategoriAktif] = useState("Makanan");
  let [callHasil, setCallHasil] = useState(true);

  if (callHasil) {
    setTimeout(() => {
      setCallHasil(false);
    }, 1000);
  }

  return (
    <div className="mt-3">
      <Container fluid>
        <Row>
          <Col md={2} className="mt-3">
            <h4>
              <strong>Daftar Kategori</strong>
            </h4>
            <hr />
            {loadingKategories && <strong>Loading kategori....</strong>}
            {kategories && (
              <ListGroup>
                {kategories &&
                  kategories.map((kategori) => (
                    <ListKategori
                      kategori={kategori}
                      key={kategori.id}
                      kategoriAktif={kategoriAktif}
                      setKategoriAktif={setKategoriAktif}
                    />
                  ))}
              </ListGroup>
            )}
          </Col>
          <Col className="mt-3">
            <h4>
              <strong>Daftar Produk</strong>
            </h4>
            <hr />
            <Row className="overflow-auto menu">
              {loadingMenus && <strong>Loading Menus....</strong>}
              {menus &&
                menus.map((menu) => (
                  <Menus
                    key={menu.id}
                    menu={menu}
                    // masukKeranjang={this.masukKeranjang}
                    kategoriAktif={kategoriAktif}
                    setCallHasil={setCallHasil}
                  />
                ))}
            </Row>
          </Col>
          <Hasil callHasil={callHasil} setCallHasil={setCallHasil} />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
