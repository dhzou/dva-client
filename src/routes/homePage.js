import React from "react";
import { connect } from "dva";
import { List, Button, NavBar, Toast } from "antd-mobile";
import { login } from "../services/service";
import styles from "../assets/css/home.less";
import { isAuthenticated, authenticateSuccess } from "../utils/session";
import { routerRedux } from "dva/router";
const Item = List.Item;
const Brief = Item.Brief;
class homePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
      
    
    

        {
          id: 8,
          userid: 71,
          testUserCode: "8",
          testName: "测试6号",
          gender: "男",
          birthday: 1559491200000,
          stat: "ACTIVE",
          age: 33,
          cid: null,
          openid: null,
          type: null
        },
        {
          id: 9,
          userid: 71,
          testUserCode: "9",
          testName: "测试6号",
          gender: "男",
          birthday: 1559491200000,
          stat: "ACTIVE",
          age: 33,
          cid: null,
          openid: null,
          type: null
        },
        {
          id: 10,
          userid: 71,
          testUserCode: "10",
          testName: "测试6号",
          gender: "男",
          birthday: 1559491200000,
          stat: "ACTIVE",
          age: 33,
          cid: null,
          openid: null,
          type: null
        },
        {
          id: 11,
          userid: 71,
          testUserCode: "11",
          testName: "测试9号",
          gender: "男",
          birthday: 1559491200000,
          stat: "ACTIVE",
          age: 33,
          cid: null,
          openid: null,
          type: null
        },
        {
          id: 12,
          userid: 71,
          testUserCode: "12",
          testName: "测试9号",
          gender: "男",
          birthday: 1559491200000,
          stat: "ACTIVE",
          age: null,
          cid: null,
          openid: null,
          type: null
        }
      ]
    };
  }
  componentDidMount() {
    const cookies = isAuthenticated();
    if (cookies) {
      const userInfo = JSON.parse(cookies);
      this.setState({
        userName: userInfo.username,
        password: userInfo.password
      });
    }
  }

  handleItemClick = (item) =>{
    this.props.dispatch(routerRedux.push({
      pathname: '/result',
      query: {id: item.id}
    }))
  }

  handleClick = () => {
    if (!this.state.userName || !this.state.password) {
      Toast.info("参数不能为空");
      return;
    } else {
      login({
        username: this.state.userName,
        password: this.state.password
      }).then(data => {
        if (data.data.status === 0) {
          authenticateSuccess(JSON.stringify(data.data.data));
          this.props.dispatch(routerRedux.push("/result"));
        } else {
          Toast.info(data.data.message);
        }
      });
    }
  };
  render() {
    return (
      <div className={styles["animate-route"]}>
        <NavBar mode="dark">用户列表</NavBar>
        <div style={{ marginTop: 16 }} className="my-list">
          <List>
            {this.state.users.map(item=>{
              return     <Item key = {item.id} arrow="horizontal" onClick={()=>this.handleItemClick(item)}>
              <div style={{ display: "flex", alignItems: "center",padding:'10px 0' }}>
                <img
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                  alt=""
                  src="https://img.soulapp.cn/heads/1559898451854.png"
                />
                <div style={{marginLeft:20}}>
                  <p style={{fontSize:14,color:'#cccccc'}}>姓名:{item.testName}</p>
                  <p style={{padding:'5px 0',fontSize:14,color:'rgba(16,16,16,1)',lineHeight:'20px'}}>年龄:{item.age}</p>
                </div>
                <div style={{marginLeft:30}}>
                  <p style={{fontSize:14,color:'#cccccc'}}>姓别:{item.gender}</p>
                  <p style={{padding:'5px 0',fontSize:14,color:'rgba(16,16,16,1)',lineHeight:'20px'}}>编号:{item.testUserCode}</p>
                </div>
              </div>
            </Item>
            })}
          </List>
          <Button
            style={{marginTop: 20,marginLeft:10,marginRight:10 }}
            type="primary"
            onClick={this.handleClick}
          >
            创建用户
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(homePage);
