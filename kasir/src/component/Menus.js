import { Card, Col } from "react-bootstrap";
import swal from "sweetalert";

const Menus = ({ menu, kategoriAktif, setCallHasil }) => {
  const addToCart = (menu) => {
    const product = {
      id: menu.id,
      kode: menu.kode,
      nama: menu.nama,
      harga: menu.harga,
      is_ready: true,
      gambar: menu.gambar,
      category: {
        id: menu.category.id,
        nama: menu.category.nama,
      },
    };
    fetch("http://localhost:8000/keranjangs")
      .then((res) => res.json())
      .then((data) => {
        let cek;
        data.length !== 0
          ? (cek = data.filter((keranjang) => keranjang.product.id === menu.id))
          : (cek = data);

        if (cek.length === 0) {
          // masukkan
          let data = {
            jumlah: 1,
            total_harga: menu.harga,
            product,
          };
          fetch("http://localhost:8000/keranjangs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          setCallHasil(true);
          swal("Berhasil!", "Data berhasil ditambahkan!", "success");
        } else {
          // update
          let data = {
            jumlah: (cek[0].jumlah += 1),
            total_harga: menu.harga * cek[0].jumlah,
            product,
          };
          fetch(`http://localhost:8000/keranjangs/${menu.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          setCallHasil(true);
          swal("Berhasil!", "Data berhasil ditambahkan!", "success");
        }
      });
  };
  if (menu.category.nama === kategoriAktif.trim()) {
    return (
      <>
        <Col
          md={4}
          xs={6}
          style={{ cursor: "pointer" }}
          className="mb-4"
          onClick={() => addToCart(menu)}
        >
          <Card className="shadow">
            <Card.Img
              variant="top"
              src={`images/${kategoriAktif.trim().toLowerCase()}/${
                menu.gambar
              }`}
            />
            <Card.Body>
              <Card.Title>
                {menu.nama}
                <strong> {menu.kode}</strong>
              </Card.Title>
              <Card.Text>Rp. {menu.harga}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
};

export default Menus;
