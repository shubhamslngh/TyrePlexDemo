import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-5">
      <div className="container mt-3 mb-4 p-4 border shadow-sm">
        <h6 className="d-flex fw-bold">Payment Mode</h6>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group list-inline">
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Deposit to Account
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Credit Card/Debit Card
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Wallets (PayTM/PhonePe/Amazon etc.)
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-group list-inline">
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Net Banking
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                UPI
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="col">
          <div className="col-md-12 text-center text-md-start mt-4 mt-md-0">
            <div
              style={{ backgroundColor: "#FFEAAA" }}
              className="p-3  rounded">
              <h6 className="fw-bold mb-3">Have a question about Tyres?</h6>
              <p>Get an answer in 24 hours from our experts.</p>
              <form className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Ask or search your question"
                />
                <button type="submit" className="btn btn-outline-dark">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <img
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
              alt="TyrePlex"
              className="mb-3 mb-md-0"
            />
            <div className="mt-2">
              <a href="#" className="text-dark me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark me-3">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-dark me-3">
              Who We Are
            </a>
            <a href="#" className="text-dark me-3">
              Are you a Tyre Dealer?
            </a>
            <a href="#" className="text-dark me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-dark">
              Terms of use
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-3 bg-light">
        <small>
          &copy;2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
          Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
