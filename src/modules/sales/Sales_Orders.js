import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Row, Col, Table } from "antd";
import MainLayout from "../../components/MainLayout";
import { saleOrderColumns, saleOrderData } from "../../data/sale/data";
import $ from "jquery";
import axios from "axios";
const SaleOrder = (props) => {
  console.log(props.location.state);

  const [selectedRow, setSelectedRow] = useState();
  const [rowClick, setRowClick] = useState(false);
  const [dataTable, setDataTable] = useState(saleOrderData && saleOrderData);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  // useEffect(() => {
  //   axios.get("http://localhost:3001/requisition").then((res) => {
  //     setDataTable(res.data);
  //   });
  // }, []);
  const config = {
    projectId: 3,
    title: "SALES",
    show: true,
    breadcrumb: ["Home", "Sale Orders"],
    search: true,
    create: "/sales/orders/create",
    buttonAction: ["Create", "Edit"],
    edit: {
      data: selectedRow,
      path: selectedRow && "/sales/orders/edit/" + selectedRow.id,
    },
    disabledEditBtn: !rowClick,
    discard: "/sales/orders",
    onCancel: () => {
      console.log("Cancel");
    },
  };
  console.log(selectedRow);

  return (
    <div>
      <MainLayout {...config}>
        <Row>
          <Col span={24}>
            <Table
              columns={saleOrderColumns}
              dataSource={dataTable}
              onChange={onChange}
              size="small"
              rowClassName="row-pointer"
              onRow={(record, rowIndex) => {
                return {
                  onClick: (e) => {
                    setRowClick(true);
                    $(e.target)
                      .closest("tbody")
                      .find("tr")
                      .removeClass("selected-row");
                    $(e.target).closest("tr").addClass("selected-row");
                    setSelectedRow(record);
                    props.history.push({
                      pathname: "/sales/orders/view/" + record.id,
                      state: record,
                    });
                  },
                };
              }}
            />
          </Col>
        </Row>
      </MainLayout>
    </div>
  );
};

export default withRouter(SaleOrder);
