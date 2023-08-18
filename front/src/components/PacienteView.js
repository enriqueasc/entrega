import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentPaciente from "../utils/contentPaciente";

class Content extends Component {
 
  
  render() {
    return ( 
      
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Registrate como paciente?</h2>
        <Row className="d-flex justify-content-between">
        
          {contentPaciente.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <h6 className="mb-3">
                <a href={col.link}>
                  <FontAwesomeIcon icon="link" className="mr-2" />
                  {col.title}
                </a>
              </h6>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const alda = () => {
  console.log("contentPaciente", contentPaciente);
}

alda();
export default Content;