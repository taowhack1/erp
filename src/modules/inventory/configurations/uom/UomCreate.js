import { Col, Input, message, Row, Tabs, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSelect from "../../../../components/CustomSelect";
import MainLayout from "../../../../components/MainLayout";
import Authorize from "../../../system/Authorize";
import {
  dataOptions,
  uomFields,
  uomFieldsReQuire,
  uomFieldsReQuire2,
} from "./UomConfig";
import moment from "moment";
import { validateFormHead } from "../../../../include/js/function_main";
import { useHistory } from "react-router-dom";
import {
  createConfigurationUom,
  upDateConfigurationUom,
} from "../../../../actions/inventory/configurations/uom/uomAction";
function UomCreate(props) {
  const { Title, Text } = Typography;
  const history = useHistory();
  const authorize = Authorize();
  const dispatch = useDispatch();
  const uom = useSelector((state) => state.inventory.configurations.uom);
  const current_project = useSelector((state) => state.auth.currentProject);
  const auth = useSelector((state) => state.auth.authData);
  const [loading, setLoading] = useState(false);
  authorize.check_authorize();
  const data =
    props.location && props.location.state ? props.location.state : 0;

  const [dataUomCreate, setDataUomCreate] = useState(
    data && data
      ? { ...data, commit: 1, user_name: auth.user_name }
      : {
          ...uomFields,
          commit: 1,
          user_name: auth.user_name,
          uom_created: moment().format("DD/MM/YYYY"),
        }
  );
  const upDateFormValue = (data) => {
    setDataUomCreate({ ...dataUomCreate, ...data });
  };
  const config = {
    projectId: current_project && current_project.project_id,
    title: current_project && current_project.project_name,
    home: current_project && current_project.project_url,
    show: true,
    breadcrumb: [
      "Home",
      "UoM",
      dataUomCreate.uom_id ? "Edit" : "Create",
      dataUomCreate.uom_id &&
        " [ " + dataUomCreate.uom_id + " ] " + dataUomCreate.uom_name,
    ],
    search: false,
    buttonAction: ["Save", "Discard"],
    create: "",
    save: "function",
    discard: "/inventory/configurations/uom",
    onSave: (e) => {
      const key = "validate";
      const validate = validateFormHead(dataUomCreate, Fields);
      if (validate.validate) {
        dataUomCreate.uom_id
          ? dispatch(
              upDateConfigurationUom(
                dataUomCreate.uom_id,
                dataUomCreate,
                redirectToView
              )
            )
          : dispatch(createConfigurationUom(dataUomCreate, redirectToView));
      } else {
        message.warning({
          content: "Please fill your form completely.",
          key,
          duration: 2,
        });
      }
    },
    onEdit: (e) => {
      //e.preventDefault();
      console.log("Edit");
    },
    onApprove: (e) => {
      //e.preventDefault();
      console.log("Approve");
    },
    onConfirm: () => {
      console.log("Confirm");
    },
  };
  const redirectToView = (id) => {
    history.push("/inventory/configurations/uom/view/" + (id ? id : "new"));
  };

  const Fields = dataUomCreate.uom_name_ref
    ? uomFieldsReQuire2
    : uomFieldsReQuire;
  return (
    <MainLayout {...config}>
      <div id="form">
        {/* {Head} */}
        <Row className="col-2">
          <Col span={8}>
            <h2>
              <strong>
                {dataUomCreate.uom_id ? "Edit" : "Create"} UoM{" "}
                {dataUomCreate.uom_id && "#" + dataUomCreate.uom_no}
              </strong>
            </h2>
          </Col>
          <Col span={12}></Col>
          <Col span={2}>
            <Text strong>Create Date :</Text>
          </Col>
          <Col span={2} style={{ textAlign: "right" }}>
            <Text className="text-view">{dataUomCreate.uom_created}</Text>
          </Col>
        </Row>

        <Row className="col-2 row-tab-margin">
          <Col span={24} style={{ marginBottom: 8 }}>
            <Title level={5}>
              <span className="require">* </span>Name :{" "}
            </Title>
            <Col span={24}>
              <Input
                placeholder="Name"
                name="uom_name"
                onChange={(e) => upDateFormValue({ uom_name: e.target.value })}
                value={dataUomCreate.uom_name}
              />
            </Col>
          </Col>
        </Row>
        <Row className="col-2 row-tab-margin-l">
          <Col span={24}>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane
                tab={
                  <span>
                    <span className="require">* </span>
                    Detail
                  </span>
                }
                key="1"
              >
                {/*Information */}
                <Row className="col-2 row-margin-vertical">
                  <Col span={12} className="col-border-right">
                    <Row className="row-margin">
                      <Col span={5}>
                        <Text strong>
                          <span className="require">*</span> Short Name :
                        </Text>
                      </Col>
                      <Col span={18}>
                        <Input
                          name="uom_no"
                          placeholder="Short Name"
                          onChange={(e) =>
                            upDateFormValue({ uom_no: e.target.value })
                          }
                          value={dataUomCreate.uom_no}
                        />
                      </Col>
                      <Col span={1}></Col>
                    </Row>
                    <Row className="row-margin">
                      <Col span={5}>
                        <Text strong>
                          <span className="require">*</span> Unit Value :
                        </Text>
                      </Col>
                      <Col span={18}>
                        <Input placeholder="Unit Value" name="unit_value" />
                      </Col>
                      <Col span={1}></Col>
                    </Row>
                    <Row className="row-margin">
                      <Col span={5}>
                        <Text strong>Thai Name :</Text>
                      </Col>
                      <Col span={18}>
                        <Input
                          name="uom_name_th"
                          placeholder={"Thai Name"}
                          onChange={(e) =>
                            upDateFormValue({
                              uom_name_th: e.target.value,
                            })
                          }
                          value={dataUomCreate.uom_name_th}
                        />
                      </Col>
                      <Col span={1}></Col>
                    </Row>
                    <Row className="row-margin">
                      <Col span={5}>
                        <Text strong>Description :</Text>
                      </Col>
                      <Col span={18}>
                        <Input
                          name="uom_remark"
                          placeholder={"Description"}
                          onChange={(e) =>
                            upDateFormValue({ uom_remark: e.target.value })
                          }
                          value={dataUomCreate.uom_remark}
                        />
                      </Col>
                      <Col span={1}></Col>
                    </Row>
                  </Col>
                  {/* { col right} */}
                  <Col span={12}>
                    <Row className="col-2 row-margin-vertical">
                      <Col span={1}></Col>
                      <Col span={6}>
                        <Text strong>Reference Unit :</Text>
                      </Col>
                      <Col span={15}>
                        <CustomSelect
                          allowClear
                          showSearch
                          placeholder={
                            "Reference Unit of Measure for this category"
                          }
                          name="uom_name_ref"
                          field_id="uom_id"
                          field_name="uom_name"
                          value={dataUomCreate.uom_name_ref}
                          data={uom}
                          onChange={(data, option) => {
                            data && data
                              ? upDateFormValue({
                                  uom_id_ref: data,
                                  uom_name_ref: option.title,
                                })
                              : upDateFormValue({
                                  uom_id_ref: null,
                                  uom_name_ref: null,
                                  size_of_ref: null,
                                  ratio: null,
                                });
                          }}
                        />
                      </Col>
                      <Col span={1}></Col>
                    </Row>
                    <Row className="col-2 row-margin-vertical">
                      <Col span={1}></Col>
                      <Col span={6}>
                        <Text strong>
                          <span className="require">
                            {" "}
                            {dataUomCreate.uom_name_ref ? "*" : ""}
                          </span>{" "}
                          Ratio :
                        </Text>
                      </Col>
                      <Col span={15}>
                        <Input
                          disabled={dataUomCreate.uom_name_ref ? false : true}
                          placeholder="e.g: 1*(reference unit)=ratio*(this unit)"
                          name="ratio"
                          onChange={(e) =>
                            upDateFormValue({ ratio: e.target.value })
                          }
                          value={dataUomCreate.ratio}
                        />
                      </Col>
                      <Col span={1}></Col>
                    </Row>
                    <Row className="row-margin">
                      <Col span={1}></Col>
                      <Col span={6}>
                        <Text strong>
                          <span className="require">
                            {dataUomCreate.uom_name_ref ? "*" : ""}
                          </span>{" "}
                          Type :
                        </Text>
                      </Col>
                      <Col span={15}>
                        <CustomSelect
                          allowClear
                          showSearch
                          disabled={dataUomCreate.uom_name_ref ? false : true}
                          placeholder={
                            "Bigger,Smaller,Equal than the reference Unit of Measure"
                          }
                          name="size_of_ref"
                          field_id="uom_id"
                          field_name="uom_name"
                          value={dataUomCreate.size_of_ref}
                          options={dataOptions}
                          onChange={(dataOption, option) => {
                            dataOption && dataOption
                              ? upDateFormValue({
                                  size_of_ref: dataOption,
                                })
                              : upDateFormValue({
                                  size_of_ref: null,
                                });
                          }}
                        />
                      </Col>
                      <Col span={1}></Col>
                    </Row>
                  </Col>
                </Row>
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}

export default UomCreate;
