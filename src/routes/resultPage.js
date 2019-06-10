import React, { useState } from "react";
import { connect } from "dva";
import {
  Modal,
  NavBar,
  List,
  Icon,
  Toast
} from "antd-mobile";
import { isAuthenticated } from "../utils/session";
import { search } from "../services/service";
import { routerRedux } from "dva/router";
const Item = List.Item;
const img = [
  "https://www.wegene.com/static/dist/svg/metabolism.svg",
  "https://www.wegene.com/static/dist/svg/physical.svg",
  "https://www.wegene.com/static/dist/svg/weight_lose.svg",
  "https://www.wegene.com/static/dist/svg/response_to_exercise.svg",
  "https://www.wegene.com/static/dist/svg/sports_protection.svg"
];
class resultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [
        {
          id: 1,
          name: "血压",
          stat: "ACTIVE",
          desc: "血压描述",
          dataProductIndices: [
            {
              id: 1,
              productid: 1,
              name: "舒张压",
              value: null,
              unit: "个",
              stat: "ACTIVE"
            },
            {
              id: 2,
              productid: 1,
              name: "收缩压",
              value: "104",
              unit: "个",
              stat: "ACTIVE"
            }
          ],
          dataProductIdea: null,
          resultType: "中等"
        }
      ],
      userInfo: ""
    };
  }

  componentDidMount() {
    this.userId = this.props.location.query;
    // const cookies = isAuthenticated();
    // if (cookies) {
    //  const userInfo = JSON.parse(cookies);
    //  this.batchNum = userInfo.batchNum;
    // }
  }

  goBack = () => {
    this.props.dispatch(routerRedux.goBack());
  };

  handClick = index => {
    alert(index)
    // this.props.dispatch(routerRedux.push("/detail"));
  };
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.goBack}
        >
          测试数据
        </NavBar>
        <div style={{ marginTop: 20 }}>
          {this.state.userInfo ? (
            <div
              style={{
                background: "linear-gradient(90deg,#bfe885,#98e07e)",
                minHeight: 90,
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10
              }}
            >
              <div>
                <p style={{ fontSize: "18px" }}>邹东辉</p>
                <p style={{ marginTop: 5 }}>男 26岁</p>
              </div>
              <div>
                <p style={{ fontSize: "18px" }}>编号：111</p>
              </div>
            </div>
          ) : (
            <div
              style={{
                height: 90,
                lineHeight: "90px",
                textAlign: "center",
                background: "linear-gradient(90deg,#bfe885,#98e07e)",
                color: "#fff"
              }}
            >
              暂无该用户
            </div>
          )}
          {this.state.productData &&
            this.state.productData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  style={{
                    padding: "0 10px",
                    marginTop: 20,
                    background: "#fff"
                  }}
                >
                  <div
                  onClick={()=>{this.handClick(index)}}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: 40,
                      justifyContent: "space-between"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img width="26" alt="" src={img[index % 5]} />
                      <p style={{ marginLeft: 10 }}>{item.name}</p>
                    </div>

                    <div  style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ marginRight: 10 }}>{item.resultType}</p>
                      <Icon type='right' />
                    </div>
                  </div>
                  <List className="my-list">
                    {item.dataProductIndices &&
                      item.dataProductIndices.map(sub => {
                        return (
                          <Item key={sub.id} extra={sub.value + sub.unit}>
                            {sub.name}
                          </Item>
                        );
                      })}
                  </List>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default connect()(resultPage);
