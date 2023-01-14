import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import swal from "sweetalert";
const ModalKeranjang = ({
  showModal,
  handleClose,
  detailKeranjang,
  setHandleClose,
  setShowModal,
  setCallHasil,
}) => {
  const [Jumlah, setJumlah] = useState(0);
  let [Keterangan, setKeterangan] = useState("");

  const simpanKeranjang = (e) => {
    e.preventDefault();

    if (Jumlah === 0) {
      setJumlah(detailKeranjang.jumlah);
    }
    if (Keterangan.trim() === "") {
      setKeterangan(detailKeranjang.keterangan);
    }

    let data = {
      jumlah: Jumlah,
      total_harga: detailKeranjang.product.harga * Jumlah,
      keterangan: Keterangan,
    };
    fetch(`http://localhost:8000/keranjangs/${detailKeranjang.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setShowModal(false);
    setHandleClose(true);
    setCallHasil(true);
    setKeterangan("");
    setJumlah(0);
    swal("Berhasil!", "Data berhasil ditambahkan!", "success");
  };

  const deleteKeranjang = (id) => {
    swal({
      title: "Apakah Yakin?",
      text: "Apakah yakin kamu akan menghapus menu ini dari keranjang!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:8000/keranjangs/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            setShowModal(false);
            setHandleClose(true);
            setCallHasil(true);
            setKeterangan("");
            setJumlah(0);
            swal("Berhasil Dihapus!", "Data berhasil dihapus!", "success");
          })
          .catch((e) => swal("Berhasil Gagal Dihapus!", e.message, "error"));
      } else {
        swal("Data tidak jadi dihapus");
      }
    });
  };

  if (detailKeranjang !== null) {
    let TotalHarga = detailKeranjang.product.harga * detailKeranjang.jumlah;
    return (
      <Modal show={showModal} onHide={handleClose}>
        {/* // <Modal> */}
        <Modal.Header
          closeButton={() => {
            setShowModal(false);
            setHandleClose(true);
          }}
        >
          <Modal.Title>
            {`${detailKeranjang.product.nama} ${detailKeranjang.product.kode}`}{" "}
            <br />
            <strong>Rp. {detailKeranjang.product.harga}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga :</Form.Label>
              <p>
                <strong>Rp. {TotalHarga}</strong>
              </p>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah :</Form.Label>
              <br />
              <Button variant="primary" size="sm" className="mr-2">
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={() => {
                    if (Jumlah <= 1) {
                      return alert(
                        "Tidak bisa mengurangi lagi, jumlah sudah minimal"
                      );
                    } else {
                      return setJumlah((detailKeranjang.jumlah -= 1));
                    }
                  }}
                />
              </Button>

              {Jumlah <= detailKeranjang.jumlah && (
                <strong> {detailKeranjang.jumlah} </strong>
              )}
              {Jumlah > detailKeranjang.jumlah && <strong> {Jumlah} </strong>}

              <Button variant="primary" size="sm" className="ml-2">
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => setJumlah((detailKeranjang.jumlah += 1))}
                />
              </Button>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Keterangan :</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="keterangan"
                value={detailKeranjang.keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                placeholder="Contoh : Pedes, Nasi Setengah"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => simpanKeranjang(e)}
            >
              Simpan
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => deleteKeranjang(detailKeranjang.id)}
          >
            <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
