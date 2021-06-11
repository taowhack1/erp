import { InputNumber } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import CustomTable from "../../../../../components/CustomTable";
import {
  convertDigit,
  getNumberFormat,
} from "../../../../../include/js/main_config";
const columns = [
  {
    title: "No.",
    dataIndex: "id",
    width: "5%",
    align: "center",
    className: "tb-col-sm",
    render: (val, _, index) => index + 1,
  },
  {
    title: (
      <div className="text-center">
        <Text>Item</Text>
      </div>
    ),
    dataIndex: "item_no_name",
    align: "left",
    ellipsis: true,
    className: "tb-col-sm",
  },
  {
    title: (
      <div className="text-center">
        <Text>% Waste</Text>
      </div>
    ),
    dataIndex: "npr_product_cost_waste_percent_qty",
    align: "right",
    width: "20%",
    className: "tb-col-sm",
    render: (val) => (
      <InputNumber
        {...getNumberFormat(4)}
        value={val}
        placeholder="% Waste"
        step={1}
        min={0}
        size="small"
        className="full-width"
      />
    ),
  },
];
const mockupData = [
  {
    id: 0,
    item_no_name: "[TEST1] TEST ITEM PK 1",
    npr_product_cost_waste_percent_qty: 6,
  },
  {
    id: 1,
    item_no_name: "[TEST2] TEST ITEM PK 2",
    npr_product_cost_waste_percent_qty: 6,
  },
  {
    id: 2,
    item_no_name: "[TEST3] TEST ITEM PK 3",
    npr_product_cost_waste_percent_qty: 6,
  },
];
const NPRItemPackageList = () => {
  return (
    <>
      <div className="under-line mb-1">
        <Text strong>Packaging</Text>
      </div>
      <CustomTable
        columns={columns}
        dataSource={mockupData}
        bordered
        rowKey={"id"}
        pagination={false}
        rowClassName="row-table-detail"
      />
    </>
  );
};

export default NPRItemPackageList;
