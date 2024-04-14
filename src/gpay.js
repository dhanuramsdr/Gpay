import React from 'react';
import Card from 'react-bootstrap/Card';
import GooglePayButton from '@google-pay/button-react';
import './gpay.css';
import images from'./images/Screenshot 2024-04-12 231441.png'


const GooglePayComponent = () => {
  
  const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: "CARD",
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"]
                },
                tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                        gateway: "example"
                    }
                }
            }
        ],
        merchantInfo: {
            merchantId: "8807130095@paytm",
            merchantName: "Demo Merchant"
        },
        transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "INR",
            countryCode: "IN"
        }
    };

    return (
        <div>
        {/* Image Card */}
        <div className="demo">
          <div className="row mt-4 justify-content-center"> {/* Center the card within the row */}
            <div className="col-md-4">
              <Card>
                <Card.Body className="text-center"> {/* Add text-center class */}
                  <Card.Title>SCANE THE QRCODE</Card.Title> {/* Title centered */}
                  <img src={images} alt="Qrimage" />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/* Google Pay Button */}
        <GooglePayButton
          environment="TEST"
          paymentRequest={paymentRequest}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
        />
      </div>
      

    );
}

export default GooglePayComponent;
