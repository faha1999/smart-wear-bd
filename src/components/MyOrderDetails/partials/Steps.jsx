import React from 'react';
import { RiHomeSmile2Fill, RiShoppingBag3Fill } from 'react-icons/ri';
import { AiFillCheckCircle, AiFillExclamationCircle } from 'react-icons/ai';
import { FaCalendarAlt, FaShippingFast } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const Steps = () => {
  return (
    <>
      <div className="steps">
        {/* Order received */}
        <div>
          <div id="OrderReceived" className="step completed d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <FaCalendarAlt />
              </div>
              <h4 className="step-title">Order received</h4>
            </div>
          </div>

          <div id="OrderReceivedDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>

          <div id="OrderReceivedDetails" className="step issue d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillExclamationCircle />
              </div>
              <Link href="" style={{ color: 'red' }}>
                <h4 className="step-title">1 item canceled.</h4>
              </Link>
            </div>
          </div>

          <div id="OrderReceivedDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>
        </div>

        {/* Shipped */}
        <div>
          <div id="shipped" className="step completed d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <TbTruckDelivery />
              </div>
              <h4 className="step-title">Your order is shipped</h4>
            </div>
          </div>

          <div id="shippedDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>

          <div id="shippedDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>
        </div>

        {/* Return */}
        <div>
          <div id="return" className="step completed d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <GiReturnArrow />
              </div>
              <Link style={{ color: 'orange' }}>
                <h4 className="step-title">Return request</h4>
              </Link>
            </div>
          </div>

          <div id="returnDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>

          <div id="returnDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>
        </div>

        {/* Return Received */}
        <div>
          <div id="return" className="step completed d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <RiHomeSmile2Fill />
              </div>
              <h4 className="step-title">Item received</h4>
            </div>
          </div>

          <div id="returnReceivedDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>

          <div id="returnReceivedDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>
        </div>

        {/* Refund processed */}
        <div>
          <div id="refund" className="step completed d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <FaShippingFast />
              </div>
              <h4 className="step-title">Refund processed</h4>
            </div>
          </div>

          <div id="refundDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>

          <div id="refundDetails" className="step complete d_flex">
            <div className="date">
              <h4>5:30pm</h4>
              <h4>Dec. 19th</h4>
            </div>

            <div className="step-icon-wrap d_flex">
              <div className="step-icon">
                <AiFillCheckCircle />
              </div>
              <h4 className="step-title">Lorem ipsum dolor sit.</h4>
            </div>
          </div>
        </div>

        {/* Delivered */}
        <div id="delivered" className="step completed d_flex">
          <div className="date">
            <h4>5:30pm</h4>
            <h4>Dec. 19th</h4>
          </div>

          <div className="step-icon-wrap d_flex">
            <div className="step-icon">
              <RiShoppingBag3Fill />
            </div>
            <h4 className="step-title">Delivered</h4>
          </div>
        </div>
      </div>
    </>
  );
};
