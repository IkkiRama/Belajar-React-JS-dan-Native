import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import UseFetch from "../utils/UseFetch";

const TotalBayar = ({ totalBayar, setCallHasil }) => {
  const { data: keranjangs } = UseFetch("http://localhost:8000/keranjangs");
  const history = useHistory();
  const bayar = () => {
    let menu = { keranjangs };
    let postData = {
      total_bayar: totalBayar,
      menu,
    };

    fetch("http://localhost:8000/pesanans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    keranjangs.map((keranjang) => {
      fetch(`http://localhost:8000/keranjangs/${keranjang.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    });

    setCallHasil(true);
    swal(
      "Pesanan Berhasil Ditambahkan",
      "Pesanan Berhasil Ditambahkan, silahkan menunggu",
      "success"
    );

    history.push("/sukses");
  };

  return (
    <>
      {/* Web */}
      <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga :
              <strong className="float-right mr-2">Rp. {totalBayar}</strong>
            </h4>
            <Button
              variant="primary"
              block
              className="mb-2 mt-4 mr-2"
              size="lg"
              onClick={() => bayar()}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>

      {/* Mobile  */}
      <div className="d-sm-block d-md-none">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga :{" "}
              <strong className="float-right mr-2">Rp. {totalBayar}</strong>
            </h4>
            <Button
              variant="primary"
              block
              className="mb-2 mt-4 mr-2"
              size="lg"
              onClick={() => bayar()}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TotalBayar;
