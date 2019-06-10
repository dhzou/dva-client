import React from "react";
import { connect } from "dva";
import {
  List,
  Button,
  NavBar,
  Toast,
  DatePicker,
  Flex,
  Radio
} from "antd-mobile";
import { login } from "../services/service";
import styles from "../assets/css/home.less";
import { isAuthenticated, authenticateSuccess } from "../utils/session";
import { routerRedux } from "dva/router";
const Item = List.Item;
const Brief = Item.Brief;
class newPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  componentDidMount() {}

  handleItemClick = item => {
    this.props.dispatch(
      routerRedux.push({
        pathname: "/result",
        query: { id: item.id }
      })
    );
  };

  handleClick = () => {};
  render() {
    return (
      <div className={styles["animate-route"]}>
        <NavBar mode="dark">创建用户</NavBar>
        <div style={{ textAlign: "center", marginTop: 30, fontSize: "20px" }}>
          你的姓名
        </div>
        <input
          style={{
            width: 200,
            margin: "20px auto",
            height: 40,
            border: 0,
            borderBottom: "1px solid #dbdbdb"
          }}
        />
        <div style={{ textAlign: "center", marginTop: 30, fontSize: "20px" }}>
          你的性别
        </div>
        <Flex style={{ padding: "15px", width: 100, margin: "0 auto" }}>
          <Flex.Item>
            <div
              style={{
                border: "1px solid #ccc",
                height: 40,
                width: 40,
                lineHeight: "40px",
                textAlign: "center",
                borderRadius: "50%"
              }}
            >
              男
            </div>
          </Flex.Item>
          <Flex.Item>
            <div
              style={{
                border: "1px solid #ccc",
                height: 40,
                width: 40,
                lineHeight: "40px",
                textAlign: "center",
                borderRadius: "50%"
              }}
            >
              女
            </div>
          </Flex.Item>
        </Flex>
        <div
          style={{
            width: 300,
            margin: "0 auto",
            textAlign: "center",
            paddingTop: 20
          }}
        >
          <DatePicker
            width="300px"
            mode="date"
            extra="请选择"
            value={this.state.date}
            onChange={date => this.setState({ date })}
          >
            <List.Item >您的生日</List.Item>
          </DatePicker>
        </div>

        <div style={{ marginTop: 16 }}>
          <Button
            style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}
            type="primary"
            onClick={this.handleClick}
          >
            确定
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(newPage);
