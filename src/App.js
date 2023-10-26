// import PostsList from "./components/PostsList";
import { Button, Container } from "react-bootstrap";
import Header from "./components/layout/Header";
import Table from "react-bootstrap/Table";
import { Fragment, useEffect, useState } from "react";
import AddProductModal from "./components/ui/modals/AddProductModal";
import UserForm from "./components/UserForm";

const DUMMY_PRODUCTS = [
  { id: Math.random(), title: "title 1", desc: "desc 1" },
  { id: Math.random(), title: "title 2", desc: "desc 2" },
  { id: Math.random(), title: "title 3", desc: "desc 3" },
];

function App() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [modalData, setModalData] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "1") {
      setLoggedIn(true);
    }
  }, []);

  const addOrUpdateProduct = (data) => {
    console.log(data, typeof data.id);
    if (data.id === null) {
      setProducts((prevState) => {
        return [
          ...prevState,
          { id: Math.random(), title: data.title, desc: data.description },
        ];
      });
    } else {
      setProducts((prevState) => {
        let existingProduct = prevState.find((item) => {
          return data.id == item.id;
        });

        existingProduct.title = data.title;
        existingProduct.desc = data.description;
        return prevState.map((item) => {
          if (item.id == existingProduct.id) {
            return existingProduct;
          }
          return item;
        });
      });
    }
  };

  const deleteProductHandler = (productId) => {
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== productId)
    );
  };

  const editProductHandler = (id) => {
    let product = products.find((item) => {
      return item.id === id;
    });

    setModalData({
      id: product.id,
      title: product.title,
      description: product.desc,
    });
    setShow(true);
  };

  return (
    <div>
      <Header setShowModal={setShow} />
      {!loggedIn && (
        <Container className="my-5">
          <UserForm setLoggedIn={setLoggedIn} />
        </Container>
      )}
      {loggedIn && (
        <Fragment>
          <Container className="my-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.desc}</td>
                    <td>
                      <Button size="sm" variant="success">
                        Show
                      </Button>
                      <Button
                        size="sm"
                        variant="info"
                        className="mx-2"
                        onClick={() => {
                          editProductHandler(product.id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => deleteProductHandler(product.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button
              onClick={() => {
                setLoggedIn(false);
                localStorage.removeItem("loggedIn");
              }}
            >
              Logout
            </Button>
          </Container>
          <AddProductModal
            show={show}
            handleClose={() => {
              setShow(false);
              setModalData(undefined);
            }}
            formSubmitHandler={addOrUpdateProduct}
            data={modalData}
          />
        </Fragment>
      )}
    </div>
  );
}

export default App;
