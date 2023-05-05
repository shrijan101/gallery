import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function GalleryList() {
  const [galleryList] = useState([
    {
      title: "abcd",
      totalImages: 4,
    },
    {
      title: "anothr Title",
      totalImages: 6,
    },
  ]);

  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Total Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {galleryList.map((object, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{object.title}</td>
              <td>{object.totalImages}</td>
              <td>
                <Link to="/edit">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <Link to={"/"}>
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
