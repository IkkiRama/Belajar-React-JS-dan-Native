import { useState } from "react";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import ModalKeranjang from "./ModalKeranjang";
import TotalBayar from "./TotalBayar";

const Hasil = ({ callHasil, setCallHasil }) => {
  let [keranjangs, setKeranjangs] = useState(null);
  let [totalBayar, setTotalBayar] = useState(0);

  let [detailKeranjang, setDetailKeranjang] = useState(null);
  let [handleClose, setHandleClose] = useState(true);
  let [showModal, setShowModal] = useState(false);

  if (callHasil)
    fetch("http://localhost:8000/keranjangs")
      .then((res) => res.json())
      .then((data) => setKeranjangs(data));

  const handleModal = (id) =>
    fetch(`http://localhost:8000/keranjangs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Cant fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setHandleClose(false);
        setShowModal(true);
        return setDetailKeranjang(data);
      })
      .catch((e) => {
        console.log(e.message);
      });

  return (
    <Col md={3} className="mt-3">
      <h4>
        <strong>Keranjang</strong>
      </h4>
      <hr />
      {!keranjangs ||
        (keranjangs.length === 0 && (
          <strong>
            Keranjang masih kosong. Silahkan klik menu terlebih dahulu!!
          </strong>
        ))}
      {/* keranjangs.length !== 0 && */}
      {keranjangs && (
        <Card className="overflow-auto hasil">
          <ListGroup variant="flush">
            {keranjangs.map((keranjang) => (
              <ListGroup.Item
                style={{ cursor: "pointer" }}
                key={keranjang.id}
                onClick={() => handleModal(keranjang.id)}
              >
                <Row>
                  <Col xs={2}>
                    <h4>
                      <Badge pill variant="success">
                        {keranjang.jumlah}
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{keranjang.product.nama}</h5>
                    <p>Rp. {keranjang.product.harga}</p>
                    <p style={{ display: "none" }}>
                      {(totalBayar += keranjang.total_harga)}
                    </p>
                  </Col>
                  <Col>
                    <strong className="float-right">
                      Rp. {keranjang.total_harga}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <ModalKeranjang
              handleClose={handleClose}
              showModal={showModal}
              detailKeranjang={detailKeranjang}
              setHandleClose={setHandleClose}
              setShowModal={setShowModal}
              setCallHasil={setCallHasil}
            />
          </ListGroup>
        </Card>
      )}
      <TotalBayar totalBayar={totalBayar} setCallHasil={setCallHasil} />
    </Col>
  );
};

export default Hasil;
