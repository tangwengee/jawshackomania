import { Badge, Button, Card, Col, Divider, Input, Row, Tag } from "antd";
import { FC } from "react";
import { Leaf } from "../Leaf";

export const JoinContent: FC = () => {
  const cardStyle = {
    boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.2)",
    fontSize: "14px",
    fontWeight: "600",
    height: "550px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "15px",
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 700,
          fontSize: "18px",
          borderRadius: "20px",
          boxShadow: "3px 3px #bcd4d4",
          border: "2px solid #bcd4d4",
          gap: "10px",
          maxWidth: "80vw"
        }}
      >
        <div style={{ fontSize: "23px" }}>JOIN A PRIVATE LEAGUE?</div>
        <div style={{ gap: "3px", fontWeight: 500 }}>
          <div style={{textAlign: "center"}}>
            Join your friend's league, compete together for more rewards and{" "}
            <img src="/greenleaf.png" width="15" height="15" alt="" /> !
          </div>
        </div>
        <Input placeholder="Enter League PIN" style={{width: "50%"}}/>
        <Button style={{backgroundColor: "#75ebc5", fontWeight: 700}}>JOIN LEAGUE</Button>
      </div>
      <div>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 700,
            fontSize: "25px",
          }}
        >
          Explore Public Leagues
        </div>
        <Row gutter={[8, 16]} style={{ paddingBottom: "20px", width: "90vw" }}>
          <Col span={12}>
            <div>
              <a>
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>Climate Champion</div>
                      <img
                        src="/rightarrow.png"
                        width="17"
                        height="17"
                        alt=""
                      />
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="spevent.jpg" />}
                >
                  <p>
                    Empowering individuals to become champions for climate
                    action, our league drives initiatives that address
                    environmental challenges and promote sustainable solutions.
                  </p>
                  <Divider />
                  <p>Members: 200</p>
                  <p>Points: 1100</p>
                  <p>Started Since: April 30, 2016</p>
                  <Tag color="green">Water Consumption</Tag>
                  <Tag color="cyan">Conference</Tag>
                </Card>
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <a>
              <Badge.Ribbon
                  text="Hot Discussions"
                  color="red"
                  style={{ marginTop: "160px" }}
                >
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>Garden By The Bay</div>
                      <img
                        src="/rightarrow.png"
                        width="17"
                        height="17"
                        alt=""
                      />
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event8.jpg" />}
                >
                  <p>
                    Inspired by Singapore's iconic Gardens by the Bay, our
                    league cultivates a community committed to preserving
                    nature's beauty and biodiversity through conservation
                    efforts.
                  </p>
                  <Divider />
                  <p>Members: 150</p>
                  <p>Points: 800</p>
                  <p>Started Since: December 12, 2015</p>
                  <Tag color="blue">Trending</Tag>
                  <Tag color="geekblue">Free</Tag>
                </Card>
                </Badge.Ribbon>
              </a>
            </div>
          </Col>
        </Row>
        <Row gutter={[8, 16]} style={{ paddingBottom: "20px", width: "90vw" }}>
          <Col span={12}>
            <div>
              <a>
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>Green Impact</div>
                      <img
                        src="/rightarrow.png"
                        width="17"
                        height="17"
                        alt=""
                      />
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event8.jpg" />}
                >
                  <p>
                    Making a positive impact on the environment one step at a
                    time, Green Impact fosters eco-friendly practices and
                    encourages sustainable living among its members.
                  </p>
                  <Divider />
                  <p>Members: 180</p>
                  <p>Points: 900</p>
                  <p>Started Since: November 23, 2020</p>
                  <Tag color="magenta">New</Tag>
                  <Tag color="red">Carbon Emission</Tag>
                  <Tag color="volcano">Orchard</Tag>
                </Card>
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <a>
                <Card
                  bordered={false}
                  style={{
                    boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.2)",
                    fontSize: "17px",
                    fontWeight: "900",
                    height: "550px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  View list of ALL events...
                </Card>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
