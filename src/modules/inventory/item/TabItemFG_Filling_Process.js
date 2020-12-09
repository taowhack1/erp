import { Col, InputNumber, Row, TimePicker } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import { useSelector } from "react-redux";
import CustomSelect from "../../../components/CustomSelect";
import { convertDigit, numberFormat } from "../../../include/js/main_config";
import { item_filling_weight_columns } from "../config/item";
import PackagingProcess from "./Item_Packaging";
import moment from "moment";

const TabFillingProcess = ({
  uom_name,
  data_head,
  upDateFormValue,

  readOnly,
  data_filling_detail,
  fillingDetailDispatch,
  data_weight_detail,
  weightDetailDispatch,
}) => {
  const rm_list = useSelector((state) =>
    state.inventory.master_data.item_list.filter((item) => item.type_id === 3)
  );
  const onChangeValue = (rowId, data) => {
    weightDetailDispatch({
      type: "CHANGE_DETAIL_VALUE",
      payload: {
        id: rowId,
        data: data,
      },
    });
  };
  return (
    <>
      <Row className="col-2 row-margin-vertical">
        <Col span={12} className="col-left">
          <Row className="col-2 row-margin-vertical">
            <Col span={6}>
              <Text strong className="pd-left-1">
                {!readOnly && <span className="require">* </span>}
                Bulk Code
              </Text>
            </Col>
            <Col span={15}>
              {readOnly ? (
                <Text className="text-left">
                  {data_head.item_ref_no_name ?? "-"}
                </Text>
              ) : (
                <CustomSelect
                  className="full-width"
                  allowClear
                  showSearch
                  placeholder={"Raw Material Code"}
                  name="item_id_ref"
                  field_id="item_id_ref"
                  field_name="item_no_name"
                  value={data_head.item_ref_no_name}
                  data={rm_list}
                  onChange={(data, option) => {
                    data && data
                      ? upDateFormValue({
                          item_id_ref: option.data.item_id,
                          item_ref_no_name: option.data.item_no_name,
                        })
                      : upDateFormValue({
                          item_id_ref: null,
                          item_ref_no_name: null,
                        });
                  }}
                />
              )}
            </Col>
            <Col span={3}></Col>
          </Row>
          <Row className="col-2 row-margin-vertical">
            <Col span={6}>
              <Text strong className="pd-left-1">
                {!readOnly && <span className="require">* </span>}Used Time / 1
                pc. :
              </Text>
            </Col>
            <Col span={15}>
              {readOnly ? (
                <Text className="text-view">
                  {data_head.item_filling_process_time
                    ? data_head.item_filling_process_time
                    : "-"}
                </Text>
              ) : (
                <TimePicker
                  className="full-width"
                  format={"HH:mm:ss"}
                  showNow={false}
                  name={"item_filling_process_time"}
                  placeholder="00:00:00 (HH : mm : ss)"
                  required
                  value={
                    data_head.item_filling_process_time
                      ? moment(data_head.item_filling_process_time, "HH:mm:ss")
                      : ""
                  }
                  onChange={(data) => {
                    const time = moment(data, "HH:mm:ss").format("HH:mm:ss");
                    console.log(time);
                    upDateFormValue({
                      item_filling_process_time: data ? time : null,
                    });
                  }}
                />
              )}
            </Col>
            <Col span={3}>
              <Text strong className="pd-left-1">
                Hour
              </Text>
            </Col>
          </Row>
        </Col>
        <Col span={12} className="col-right"></Col>
      </Row>
      <Row className="col-2 detail-tab-row mt-3 mb-1">
        <Col span={24}>
          <Text strong className="detail-tab-header">
            Weight
          </Text>
        </Col>
      </Row>
      <Row className="col-2 row-margin-vertical">
        <Col span={18}>
          <Row className="col-2 row-margin-vertical">
            <Col span={4}></Col>
            <Col span={18}>
              {/* Weight Columns */}
              <Row gutter={2} className="detail-table-head">
                {item_filling_weight_columns &&
                  item_filling_weight_columns.map((col, key) => {
                    return (
                      <Col key={col.id} span={col.size} className="col-outline">
                        {col.require && !readOnly && (
                          <span className="require">* </span>
                        )}
                        <Text strong>{col.name}</Text>
                      </Col>
                    );
                  })}
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row className="col-2 row-margin-vertical">
            <Col span={4}>
              <Text strong>Filling Weight</Text>
            </Col>
            <Col span={18}>
              {/* weight */}
              <Row
                key={0}
                style={{
                  margin: "0px 1px",
                  backgroundColor: 0 % 2 ? "#F8F8F8" : "#FCFCFC",
                }}
                name={`row-${0}`}
                gutter={4}
                className="form-row"
              >
                <Col span={5} className="text-number">
                  {readOnly ? (
                    <Text className="text-view text-number">
                      {data_weight_detail.length &&
                      data_weight_detail[0].item_weight_standard_qty
                        ? convertDigit(
                            data_weight_detail[0].item_weight_standard_qty
                          )
                        : "-"}
                    </Text>
                  ) : (
                    <InputNumber
                      {...numberFormat}
                      name="item_weight_standard_qty"
                      placeholder="Standard"
                      value={data_weight_detail[0].item_weight_standard_qty}
                      defaultValue={0.0}
                      min={0.0001}
                      step={1.0}
                      onChange={(data) => {
                        onChangeValue(data_weight_detail[0].id, {
                          item_weight_standard_qty: data,
                        });
                      }}
                      style={{ width: "100%" }}
                      size="small"
                    />
                  )}
                </Col>
                <Col span={3} className="text-center">
                  {/* std. unit */}
                  <Text>{"[ g ] Gram"}</Text>
                </Col>
                <Col span={5} className="text-number">
                  {readOnly ? (
                    <Text className="text-view text-number">
                      {data_weight_detail.length &&
                      data_weight_detail[0].item_weight_min_qty
                        ? convertDigit(
                            data_weight_detail[0].item_weight_min_qty
                          )
                        : "-"}
                    </Text>
                  ) : (
                    <InputNumber
                      {...numberFormat}
                      name="item_weight_min_qty"
                      placeholder="Min"
                      value={data_weight_detail[0].item_weight_min_qty}
                      defaultValue={0.0}
                      min={0.0001}
                      step={1.0}
                      onChange={(data) => {
                        onChangeValue(data_weight_detail[0].id, {
                          item_weight_min_qty: data,
                        });
                      }}
                      style={{ width: "100%" }}
                      size="small"
                    />
                  )}
                </Col>
                <Col span={3} className="text-center">
                  {/* std. unit */}
                  <Text>{"[ g ] Gram"}</Text>
                </Col>
                <Col span={5} className="text-number">
                  {readOnly ? (
                    <Text className="text-view text-number">
                      {data_weight_detail.length &&
                      data_weight_detail[0].item_weight_max_qty
                        ? convertDigit(
                            data_weight_detail[0].item_weight_max_qty
                          )
                        : "-"}
                    </Text>
                  ) : (
                    <InputNumber
                      {...numberFormat}
                      name="item_weight_max_qty"
                      placeholder="Max"
                      value={data_weight_detail[0].item_weight_max_qty}
                      defaultValue={0.0}
                      min={0.0001}
                      // max={100.0}
                      step={1.0}
                      onChange={(data) => {
                        onChangeValue(data_weight_detail[0].id, {
                          item_weight_max_qty: data,
                        });
                      }}
                      style={{ width: "100%" }}
                      size="small"
                    />
                  )}
                </Col>
                <Col span={3} className="text-center">
                  {/* std. unit */}
                  <Text>{"[ g ] Gram"}</Text>
                </Col>
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row className="col-2 row-margin-vertical">
            <Col span={4}>
              <Text strong>FG Weight </Text>
            </Col>
            <Col span={18}>
              {/* weight */}
              <Row
                key={1}
                style={{
                  margin: "0px 1px",
                  backgroundColor: 1 % 2 ? "#F8F8F8" : "#FCFCFC",
                }}
                name={`row-${1}`}
                gutter={4}
                className="form-row"
              >
                <Col span={5} className="text-number">
                  {readOnly ? (
                    <Text className="text-view text-number">
                      {data_weight_detail.length &&
                      data_weight_detail[1].item_weight_standard_qty
                        ? convertDigit(
                            data_weight_detail[1].item_weight_standard_qty
                          )
                        : "-"}
                    </Text>
                  ) : (
                    <InputNumber
                      {...numberFormat}
                      name="item_weight_standard_qty"
                      placeholder="Standard"
                      value={data_weight_detail[1].item_weight_standard_qty}
                      defaultValue={0.0}
                      min={0.0001}
                      step={1.0}
                      onChange={(data) => {
                        onChangeValue(data_weight_detail[1].id, {
                          item_weight_standard_qty: data,
                        });
                      }}
                      style={{ width: "100%" }}
                      size="small"
                    />
                  )}
                </Col>
                <Col span={3} className="text-center">
                  {/* std. unit */}
                  <Text>{"[ g ] Gram"}</Text>
                </Col>
                <Col span={5} className="text-number">
                  {readOnly ? (
                    <Text className="text-view text-number">
                      {data_weight_detail.length &&
                      data_weight_detail[1].item_weight_min_qty
                        ? convertDigit(
                            data_weight_detail[1].item_weight_min_qty
                          )
                        : "-"}
                    </Text>
                  ) : (
                    <InputNumber
                      {...numberFormat}
                      name="item_weight_min_qty"
                      placeholder="Min"
                      value={
                        data_weight_detail.length &&
                        data_weight_detail[1].item_weight_min_qty
                      }
                      defaultValue={0.0}
                      min={0.0001}
                      step={1.0}
                      onChange={(data) => {
                        onChangeValue(data_weight_detail[1].id, {
                          item_weight_min_qty: data,
                        });
                      }}
                      style={{ width: "100%" }}
                      size="small"
                    />
                  )}
                </Col>
                <Col span={3} className="text-center">
                  {/* std. unit */}
                  <Text>{"[ g ] Gram"}</Text>
                </Col>
                <Col span={5} className="text-number">
                  {readOnly ? (
                    <Text className="text-view text-number">
                      {data_weight_detail.length &&
                      data_weight_detail[1].item_weight_max_qty
                        ? convertDigit(
                            data_weight_detail[1].item_weight_max_qty
                          )
                        : "-"}
                    </Text>
                  ) : (
                    <InputNumber
                      {...numberFormat}
                      name="item_weight_max_qty"
                      placeholder="Max"
                      value={data_weight_detail[1].item_weight_max_qty}
                      defaultValue={0.0}
                      min={0.0001}
                      // max={100.0}
                      step={1.0}
                      onChange={(data) => {
                        onChangeValue(data_weight_detail[1].id, {
                          item_weight_max_qty: data,
                        });
                      }}
                      style={{ width: "100%" }}
                      size="small"
                    />
                  )}
                </Col>
                <Col span={3} className="text-center">
                  {/* std. unit */}
                  <Text>{"[ g ] Gram"}</Text>
                </Col>
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row className="col-2 row-margin-vertical">
            <Col span={4}>
              <Text strong>FG Weight / Box</Text>
            </Col>
            <Col span={18}>
              {/* weight */}
              <Row
                key={2}
                style={{
                  margin: "0px 1px",
                  backgroundColor: 2 % 2 ? "#F8F8F8" : "#FCFCFC",
                }}
                name={`row-${2}`}
                gutter={4}
                className="form-row"
              >
                <Col span={5} className="text-number">
                  {readOnly ? (
                    <Text className="text-view text-number">
                      {data_weight_detail.length &&
                      data_weight_detail[2].item_weight_standard_qty
                        ? convertDigit(
                            data_weight_detail[2].item_weight_standard_qty
                          )
                        : "-"}
                    </Text>
                  ) : (
                    <InputNumber
                      {...numberFormat}
                      name="item_weight_standard_qty"
                      placeholder="Standard"
                      value={data_weight_detail[2].item_weight_standard_qty}
                      defaultValue={0.0}
                      min={0.0001}
                      step={1.0}
                      onChange={(data) => {
                        onChangeValue(data_weight_detail[2].id, {
                          item_weight_standard_qty: data,
                        });
                      }}
                      style={{ width: "100%" }}
                      size="small"
                    />
                  )}
                </Col>
                <Col span={3} className="text-center">
                  {/* std. unit */}
                  <Text>{"[ g ] Gram"}</Text>
                </Col>
                <Col span={5} className="text-number">
                  {readOnly ? (
                    <Text className="text-view text-number">
                      {data_weight_detail.length &&
                      data_weight_detail[2].item_weight_min_qty
                        ? convertDigit(
                            data_weight_detail[2].item_weight_min_qty
                          )
                        : "-"}
                    </Text>
                  ) : (
                    <InputNumber
                      {...numberFormat}
                      name="item_weight_min_qty"
                      placeholder="Min"
                      value={data_weight_detail[2].item_weight_min_qty}
                      defaultValue={0.0}
                      min={0.0001}
                      step={1.0}
                      onChange={(data) => {
                        onChangeValue(data_weight_detail[2].id, {
                          item_weight_min_qty: data,
                        });
                      }}
                      style={{ width: "100%" }}
                      size="small"
                    />
                  )}
                </Col>
                <Col span={3} className="text-center">
                  {/* std. unit */}
                  <Text>{"[ g ] Gram"}</Text>
                </Col>
                <Col span={5} className="text-number">
                  {readOnly ? (
                    <Text className="text-view text-number">
                      {data_weight_detail.length &&
                      data_weight_detail[2].item_weight_max_qty
                        ? convertDigit(
                            data_weight_detail[2].item_weight_max_qty
                          )
                        : "-"}
                    </Text>
                  ) : (
                    <InputNumber
                      {...numberFormat}
                      name="item_weight_max_qty"
                      placeholder="Max"
                      value={data_weight_detail[2].item_weight_max_qty}
                      defaultValue={0.0}
                      min={0.0001}
                      // max={100.0}
                      step={1.0}
                      onChange={(data) => {
                        onChangeValue(data_weight_detail[2].id, {
                          item_weight_max_qty: data,
                        });
                      }}
                      style={{ width: "100%" }}
                      size="small"
                    />
                  )}
                </Col>
                <Col span={3} className="text-center">
                  <Text>{"[ g ] Gram"}</Text>
                </Col>
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row className="col-2 row-margin-vertical">
            <Col span={2}></Col>
            <Col span={6}>{/* Right Col */}</Col>
            <Col span={16}>{/* LEFT Col */}</Col>
          </Row>
          <Row className="col-2 row-tab-margin"></Row>
          <Row className="col-2 row-margin-vertical">
            <Col span={2}></Col>
            <Col span={6}>{/* Right Col */}</Col>
            <Col span={16}>{/* LEFT Col */}</Col>
          </Row>
        </Col>
      </Row>
      <Row className="col-2 row-tab-margin-lg detail-tab-row">
        <Col span={24}>
          <Text strong className="detail-tab-header">
            Filling Process
          </Text>
        </Col>
      </Row>
      <Row className="col-2 row-tab-margin">
        {/* PackagingProcess */}
        <Col span={24}>
          <PackagingProcess
            readOnly={readOnly}
            uom_name={uom_name}
            data_filling_detail={data_filling_detail}
            fillingDetailDispatch={fillingDetailDispatch}
          />
        </Col>
      </Row>
    </>
  );
};

export default TabFillingProcess;
