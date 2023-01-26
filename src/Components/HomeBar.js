import React from "react";
import '../Components/Home.css'
import { BagDash, Bell, ChatSquareDots, Command, Headphones, Search } from "react-bootstrap-icons";
function HomeBar() {
  return (
    <div>
      <div className="row mt-2 border-bottom">
        <div className="col-2 text-center p-2">
          <h2>OtFit</h2>
        </div>
        <div className="col-8  border-start border-end">
        <div className="row ">
            <div className="col-md-8 ">
            <div class="mb-3 ms-5 p-2 border d-flex align-items-center rounded search">
            <Search color="gray" />
            <input
              type="text"
              class="form-control border border-0 searchbar"
              placeholder="Search or type a command"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary bg-light shadow-lg d-flex align-items-center command"
              type="button"
              id="button-addon2"
            >
              <Command/>
              F
            </button>
          </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center ">
                <div className="d-flex justify-content-evenly align-items-center p-3 mt-2 w-50 h-50 p-2 border border-2 rounded  align-items-center">
                    <ChatSquareDots/>
                    <BagDash/>
                    <Bell/>
                    <Headphones/>
                </div>
            </div>
        </div>

        </div>
        <div className="col-2">
            <div className="user mt-2">
                <img className="usericon me-2" src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"/>
                <h6>Abcdefg</h6>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBar;
