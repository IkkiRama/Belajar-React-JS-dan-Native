import {
  faUtensils,
  faCheese,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup } from "react-bootstrap";

const ListKategori = ({ kategori, kategoriAktif, setKategoriAktif }) => {
  return (
    <ListGroup.Item
      className={kategoriAktif.trim() === kategori.nama ? "category-aktif" : ""}
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        setKategoriAktif(e.target.innerText);
        kategoriAktif = e.target.innerText;
      }}
    >
      <h5>
        {kategori.nama === "Makanan" && (
          <FontAwesomeIcon icon={faUtensils} className="mr-2" />
        )}
        {kategori.nama === "Minuman" && <FontAwesomeIcon icon={faCoffee} />}
        {kategori.nama === "Cemilan" && (
          <FontAwesomeIcon icon={faCheese} className="mr-2" />
        )}

        {` ${kategori.nama}`}
      </h5>
    </ListGroup.Item>
  );
};

export default ListKategori;
