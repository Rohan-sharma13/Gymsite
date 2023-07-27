import React from "react";
import Styles from "./contactReviewSlider.module.css";
import { BsCircle, BsCircleFill } from "react-icons/bs";

export default function ContactReviewSlider() {
  return (
    <div>
      <div className={Styles.mainContainer}>
        <div className={Styles.container}>
          <div className={Styles.borderTop}>___</div>
          <div className={Styles.topHeading}>What people say</div>

          <div className={Styles.slider}>
            <div className={Styles.slider_child}>
              <div className={Styles.comas}>66</div>
              <div className={Styles.heading}>
                Very Professional Club and Coaches
              </div>
              <div className={Styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                error reprehenderit quam enim obcaecati, repudiandae officia a
                cumque nemo provident!
              </div>
              <div className={Styles.reviwer_name}>John Donas</div>
              <div className={Styles.reviwer_post}>Executive Manager</div>
              <div className={Styles.bottomLogos}>
                <BsCircleFill
                  style={{ fontSize: "0.7vw", marginRight: "0.3vw" }}
                />
                <BsCircle style={{ fontSize: "0.7vw" }} />
                <BsCircle style={{ fontSize: "0.7vw" }} />
                <BsCircle style={{ fontSize: "0.7vw" }} />
              </div>
            </div>
            <div className={Styles.slider_child}>
              <div className={Styles.comas}>66</div>
              <div className={Styles.heading}>
                A great start to a healthy life right here
              </div>
              <div className={Styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                error reprehenderit quam enim obcaecati, repudiandae officia a
                cumque nemo provident!
              </div>
              <div className={Styles.reviwer_name}>Micheal Hussey</div>
              <div className={Styles.reviwer_post}>Manager</div>
              <div className={Styles.bottomLogos}>
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
                <BsCircleFill
                  style={{ fontSize: "0.7vw", marginRight: "0.3vw" }}
                />
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
              </div>
            </div>
            <div className={Styles.slider_child}>
              <div className={Styles.comas}>66</div>
              <div className={Styles.heading}>
                The Workout session worth attending every bit
              </div>
              <div className={Styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                error reprehenderit quam enim obcaecati, repudiandae officia a
                cumque nemo provident!
              </div>
              <div className={Styles.reviwer_name}>Donas Jack</div>
              <div className={Styles.reviwer_post}>Marketing Manager</div>
              <div className={Styles.bottomLogos}>
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
                <BsCircleFill
                  style={{ fontSize: "0.7vw", marginRight: "0.3vw" }}
                />
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
              </div>
            </div>
            <div className={Styles.slider_child}>
              <div className={Styles.comas}>66</div>
              <div className={Styles.heading}>
                Shape your body and mind in the best way really
              </div>
              <div className={Styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                error reprehenderit quam enim obcaecati, repudiandae officia a
                cumque nemo provident!
              </div>
              <div className={Styles.reviwer_name}>Hiker Jons</div>
              <div className={Styles.reviwer_post}>Product Assistant</div>
              <div className={Styles.bottomLogos}>
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
                <BsCircleFill
                  style={{ fontSize: "0.7vw", marginRight: "0.3vw" }}
                />
              </div>
            </div>
            <div className={Styles.slider_child}>
              <div className={Styles.comas}>66</div>
              <div className={Styles.heading}>
                Very Professional Club and Coaches
              </div>
              <div className={Styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                error reprehenderit quam enim obcaecati, repudiandae officia a
                cumque nemo provident!
              </div>
              <div className={Styles.reviwer_name}>John Donas</div>
              <div className={Styles.reviwer_post}>Executive Manager</div>
              <div className={Styles.bottomLogos}>
                <BsCircleFill
                  style={{ fontSize: "0.7vw", marginRight: "0.3vw" }}
                />
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
                <BsCircle style={{ fontSize: "0.7vw", marginRight: "0.3vw" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
