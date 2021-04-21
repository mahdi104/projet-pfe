import React from "react";
import { Form } from "react-bootstrap";
import { addBtn } from "../../Assets/image/add.png";
import { editBtn } from "../../Assets/image/edit.png";

const AddProduct = () => {
  const isEdit = useSelector((state) => state.productReducer.isEdit);
  const product = useSelector((state) => state.productReducer.product);

  // State
  const [product, setProduct] = useState({
    title: "",
    description: "",
    details: "",
    categories: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    isEdit
      ? productReducer(productReducer)
      : setProduct({ title: "", description: "", details: "", categories: "" });
  }, [isEdit, productReducer]);

  // handleEdit function
  const handleEdit = () => {
    dispatch(esitProduct(product._id, product));
  };

  // handleAdd function
  const handleAdd = () => {
    dispatch(addContact(product));
  };

  // handlechange
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form className="my-form">
        {/* input Title */}
        <Form.Group className="my-little-form">
          <Form.Control
            type="text"
            placeholder="Enter Product Title ..."
            name="title"
            value={product.title}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Title is required !!</Form.Text>
        </Form.Group>

        {/* input Description */}
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter Description ..."
            name="Description"
            value={product.description}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Description is required !!
          </Form.Text>
        </Form.Group>

        {/* input Details */}
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter contact phone ..."
            name="Details"
            value={product.details}
            onChange={handleChange}
          />
        </Form.Group>

        {/* add or edit button*/}
        {isEdit ? (
          <img
            src={editBtn}
            alt="edit"
            className="edit-btn"
            onClick={() => {
              handleEdit();
              history.push("/");
            }}
          />
        ) : (
          <img
            src={addBtn}
            alt="add"
            className="add-btn"
            onClick={() => {
              handleAdd();
              history.push("/");
            }}
          />
        )}
      </Form>
      )
    </div>
  );
};

export default AddProduct;
