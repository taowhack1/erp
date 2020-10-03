import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Table } from "antd";
import MainLayout from "../../components/MainLayout";
import { Badge } from "antd";

const StockOnHand = () => {
  const [selectedRow, setSelectedRow] = useState();
  const [rowClick, setRowClick] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  // useEffect(() => {
  //   axios.get("http://localhost:3001/items").then((res) => {
  //     setDataTable(res.data);
  //   });
  // }, []);
  const projectDetail = JSON.parse(localStorage.getItem("project_detail"));
  const config = {
    projectId: projectDetail.project_id,
    title: projectDetail.project_name,
    home: projectDetail.project_url,
    show: true,
    breadcrumb: ["Home", "Stock on hand"],
    search: true,
    create: "/inventory/items/create",
    buttonAction: [],
    edit: {
      data: selectedRow,
      path: selectedRow && "/inventory/items/edit/" + selectedRow.key,
    },
    disabledEditBtn: !rowClick,
    discard: "/inventory/items",
    onCancel: () => {
      console.log("Cancel");
    },
  };
  const expandedRowRender = () => {
    const subColumns = [
      { title: "Location", dataIndex: "locationName", key: "loName" },
      { title: "Lot/Batch No.", dataIndex: "locationLot", key: "loLot" },
      { title: "Qty on hand", dataIndex: "locationOnHand", key: "loOnHand" },
      { title: "Unit", dataIndex: "locationUnit", key: "loUnit" },
      {
        title: "Item Status",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            PASS
          </span>
        ),
      },
    ];

    const subData = [];
    for (let i = 0; i < 3; ++i) {
      subData.push({
        key: i,
        locationName: "Location " + i,
        locationLot: "L20090000" + i * 3,
        locationOnHand: Math.round(Math.random() * 100),
        locationUnit: "pc",
        locationItemStatus: "OK",
      });
    }
    return (
      <Table columns={subColumns} dataSource={subData} pagination={false} />
    );
  };

  const mainColumns = [
    { title: "Item Code", dataIndex: "itemCode", key: "itemCode" },
    { title: "Name", dataIndex: "itemName", key: "itemName" },
    { title: "Quantity on hand", dataIndex: "itemQty", key: "itemOnHand" },
  ];

  const mainData = [];
  for (let i = 0; i < 3; ++i) {
    mainData.push({
      key: i,
      itemCode: "[102SLA030001]",
      itemName: "Item " + i + 1,
      itemQty: Math.round(Math.random() * 100),
    });
  }

  return (
    <div>
      <MainLayout {...config}>
        <Row>
          <Col span={24}>
            <Table
              columns={mainColumns}
              dataSource={mainData}
              expandable={{ expandedRowRender }}
              onChange={onChange}
              size="small"
            />
          </Col>
        </Row>
      </MainLayout>
    </div>
  );
};

export default withRouter(StockOnHand);
