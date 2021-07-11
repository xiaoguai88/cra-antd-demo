import React, { Component } from "react";
import { getInfoByPost } from "../../service";
import { Table, Card, Tag, Button } from "antd";
import TodoList from "../reduxtodolist";
const columsTitles = {
  title: "标题",
  auther: "作者",
  amount: "阅读量",
  des: "描述",
};

const columsValues = Object.values(columsTitles);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  creatColumns = () => {
    const columns = columsValues.map((column, index) => {
      if (column === "阅读量") {
        return {
          title: column,
          width: 200,
          render: (text, row) => (
            <Tag color={row?.amount > 200 ? "red" : "cyan"}>{row?.amount}</Tag>
          ),
        };
      }
      return {
        title: column,
        dataIndex: Object.keys(columsTitles).find(
          (item) => columsTitles[item] === column
        ),
        key: index,
        width: 200,
        align: "center",
        ellipsis: true,
      };
    });
    columns.push({
      title: "操作",
      align: "center",
      width: 200,
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: () => [
        <Button key="detail" type="link">
          详情
        </Button>,
        <Button key="delete" type="link">
          删除
        </Button>,
      ],
    });
    return columns;
  };
  async componentDidMount() {
    const res = await getInfoByPost({ currentPage: 2, pageNumber: 20 });
    this.setState({
      dataSource: res,
    });
  }
  render() {
    const { dataSource } = this.state;
    console.log("dataSource", dataSource);
    return (
      <div>
        <Card title={"文章列表"}>
          <TodoList />
          <Table
            rowKey="id"
            columns={this.creatColumns()}
            dataSource={dataSource.data?.data}
          />
        </Card>
      </div>
    );
  }
}
export default Home;
