import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { Row, Col, Input, Typography } from "antd";
import CustomSelect from "../../../components/CustomSelect";
import { useSelector } from "react-redux";
import { WOContext } from "./WorkOrderCreate";
const { Text } = Typography;
const { TextArea } = Input;

const WorkOrderHead = () => {
  const { headReducer } = useContext(WOContext);
  const [state, setState] = useState(headReducer.data);
  const { data_so_ref } = useSelector(
    (state) => state.production.operations.workOrder
  );
  return (
    <>
      <Row className="col-2">
        <Col span={24}>
          <h3>
            <strong>
              <span className="require">* </span>Description / Job Name.
            </strong>
          </h3>
          <Col span={24}>
            <Input
              name="work_center_description"
              required
              placeholder={"Description / Job Name."}
              onChange={(e) =>
                setState({
                  ...state,
                  work_center_description: e.target.value,
                })
              }
              value={state.work_center_description}
              onBlur={() => {
                headReducer.onChangeHeadValue(state);
              }}
            />
          </Col>
          <Row className="col-2 mt-2" gutter={[32, 0]}>
            <Col span={12}>
              <Row className="col-2 row-margin-vertical">
                <Col span={6}>
                  <Text strong>
                    <span className="require">* </span>SO Document :
                  </Text>
                </Col>
                <Col span={18}>
                  {/* data_so_ref */}
                  <CustomSelect
                    allowClear
                    showSearch
                    // size={"small"}
                    placeholder={"SO Document"}
                    name="so_id"
                    field_id="so_id"
                    field_name="so_no"
                    value={state.so_no}
                    data={data_so_ref ?? []}
                    onChange={(data, option) => {
                      data && data
                        ? setState({
                            ...state,
                            so_id: option.data.so_id,
                            so_no: option.data.so_no,
                            so_detail: option.data.so_detail,
                            item_id: null,
                            item_no_name: null,
                            wo_delivery_date: null,
                            wo_qty: 0,
                            uom_id: null,
                            uom_no: null,
                          })
                        : setState({
                            ...state,
                            so_id: null,
                            so_no: null,
                            so_detail: null,
                            item_id: null,
                            item_no_name: null,
                            wo_delivery_date: null,
                            wo_qty: 0,
                            uom_id: null,
                            uom_no: null,
                          });
                    }}
                    onBlur={() => {
                      headReducer.onChangeHeadValue(state);
                    }}
                  />
                </Col>
              </Row>
              <Row className="col-2 row-margin-vertical">
                <Col span={6}>
                  <Text strong className="pd-left-1">
                    Due Date :
                  </Text>
                </Col>
                <Col span={18}>
                  <Text className="text-view">
                    {state.wo_delivery_date ?? "DD/MM/YYYY"}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row className="col-2 row-margin-vertical">
                <Col span={6}>
                  <Text strong>
                    <span className="require">* </span>FG Item :
                  </Text>
                </Col>
                <Col span={18}>
                  <CustomSelect
                    allowClear
                    showSearch
                    // size={"small"}
                    placeholder={"SO Document"}
                    name="item_id"
                    field_id="item_id"
                    field_name="item_no_name"
                    value={state.item_no_name}
                    data={state.so_detail ?? []}
                    onChange={(data, option) => {
                      data && data
                        ? setState({
                            ...state,
                            item_id: option.data.item_id,
                            item_no_name: option.data.item_no_name,
                            wo_delivery_date:
                              option.data.so_detail_delivery_date,
                            wo_qty: option.data.so_detail_qty,
                            uom_id: option.data.uom_id,
                            uom_no: option.data.uom_no,
                          })
                        : setState({
                            ...state,
                            item_id: null,
                            item_no_name: null,
                            wo_delivery_date: null,
                            wo_qty: 0,
                            uom_id: null,
                            uom_no: null,
                          });
                    }}
                    onBlur={() => {
                      headReducer.onChangeHeadValue(state);
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default WorkOrderHead;
