import React from "react";
import { assets } from "../../assets/assets";

const AddDoctor = () => {
  return (
      <form>
        <p>Add Doctor</p>

        <div>
          <div>
            <label htmlFor="doc-img">
              <img src={assets.upload_area} alt="" />
            </label>
            <input type="file" id="doc-img" hidden />
            <p>
              Upload doctor <br /> picture
            </p>
          </div>

          <div>
            <div>
              <div>
                <p>Doctor Name</p>
                <input type="text" placeholder="Name" required />
              </div>

              <div>
                <p>Doctor Email</p>
                <input type="email" placeholder="Email" required />
              </div>

              <div>
                <p>Doctor Password</p>
                <input type="password" placeholder="Password" required />
              </div>

              <div>
                <p>Experience in Years</p>
                <select name="" id="">
                  <option value="1 Year">1</option>
                  <option value="1 Year">2</option>
                  <option value="1 Year">3</option>
                  <option value="1 Year">4</option>
                  <option value="1 Year">5</option>
                  <option value="1 Year">6</option>
                  <option value="1 Year">7</option>
                  <option value="1 Year">8</option>
                  <option value="1 Year">9</option>
                  <option value="1 Year">10</option>
                </select>
              </div>

              <div>
                <p>Doctor Fees</p>
                <input type="number" placeholder="fees" required />
              </div>
            </div>

            <div>
              <div>
                <p>Speciality</p>
                <select name="" id="">
                  <option value="General physician">General physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                </select>
              </div>

              <div>
                <p>Education</p>
                <input type="text" placeholder="Education" required />
              </div>

              <div>
                <p>Address</p>
                <input type="text" placeholder="address 1" required />
                <input type="text" placeholder="address 2" required />
              </div>
            </div>
          </div>

          <div>
            <p>About Doctor</p>
            <textarea placeholder="Write about doctor" rows={5} />
          </div>
          <button>Add Doctor</button>
        </div>
      </form>
  );
};

export default AddDoctor;
