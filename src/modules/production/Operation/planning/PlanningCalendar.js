import FullCalendar from "@fullcalendar/react";
import React, { useEffect, useState } from "react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import Text from "antd/lib/typography/Text";
import moment from "moment";
import { Button, Col, Divider, Input, Row, Space } from "antd";
import Modal from "antd/lib/modal/Modal";
import CustomLabel from "../../../../components/CustomLabel";
import { useDispatch, useSelector } from "react-redux";
import { getPlanningCalendarData } from "../../../../actions/production/planningActions";
import DetailLoading from "../../../../components/DetailLoading";
import { convertTimeToHr } from "../../../../include/js/function_main";
import { convertDigit } from "../../../../include/js/main_config";
import Search from "../../../../components/Search";
import Title from "antd/lib/typography/Title";
import ModalCostCenterPlanning from "./ModalCostCenterPlanning";
import { SET_LOADING_PLANNING_CALENDAR } from "../../../../actions/types";
let countRender = 1;
const CustomFullCalendar = () => {
  const dispatch = useDispatch();
  const { loading, costCenter, plan } = useSelector(
    (state) => state.production.planning
  );
  const [state, setState] = useState({
    costCenter,
    plan,
  });
  const [search, setSearch] = useState({
    costCenter: null,
    plan: null,
    date: null,
  });
  const [modal, setModal] = useState({
    visible: false,
    data: {},
  });
  console.log(state);
  const openModal = (data) => setModal({ ...modal, visible: true, ...data });
  const closeModal = (data) =>
    setModal({
      visible: false,
      data: {},
    });
  const saveModal = (data) => {
    setModal({
      visible: false,
      data: {},
    });
    dispatch({ type: SET_LOADING_PLANNING_CALENDAR, payload: true });
    dispatch({ type: SET_LOADING_PLANNING_CALENDAR, payload: false });
  };
  const onSearch = (type, text) => {
    switch (type) {
      case "costCenter":
        setState({
          ...state,
          costCenter: costCenter.filter(
            (obj) =>
              obj.id.indexOf(text) >= 0 ||
              obj.title.toUpperCase().indexOf(text.toUpperCase()) >= 0
          ),
        });
        break;

      default:
        break;
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case 1:
        return "#59FF34";
      case 2:
        return "red";
      default:
        return "red";
    }
  };
  const materialStatusBar = () => (
    <Row className="col-2 mt-1">
      <Col span={20} offset={4}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomLabel label={"Material Status : "} />
          <div
            style={{
              backgroundColor: "#59FF34",
              borderRadius: "50%",
              width: "14px",
              height: "14px",
              border: "1px solid gray",
              marginRight: 10,
            }}
            className={"ml-2"}
          ></div>
          <CustomLabel label={"Ready"} readOnly={true} />
          <div
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: "14px",
              height: "14px",
              border: "1px solid gray",
              marginRight: 10,
            }}
            className={"ml-2"}
          ></div>
          <CustomLabel label={"Not Ready"} readOnly={true} />
        </div>
      </Col>
    </Row>
  );

  const renderEventContent = (eventInfo) => {
    console.log(eventInfo);
    const props = eventInfo.event._def.extendedProps;
    console.log("props", props);
    return (
      <>
        <div className="arrow">
          {props.shift.map((objShift, key) => (
            <div key={objShift.id}>
              <div
                key={objShift.id}
                className={"text-center arrow"}
                style={{
                  // backgroundColor: "white",
                  // border: "1px solid #FFC357",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  backgroundColor: "white",
                }}
                onClick={() => {
                  console.log(eventInfo);
                  console.log("data", eventInfo.event._def.extendedProps);
                }}
              >
                {/* Render Job */}
                <div
                  style={{
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    zIndex: 1,
                  }}
                  className="arrow"
                >
                  {objShift?.job_detail?.length ? (
                    objShift.job_detail.map((obj, key) => (
                      <div
                        key={obj.id}
                        style={{
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#78FFFD",
                          border: "1px solid #00D8D4 ",
                          width: "100%",
                          marginTop: 5,
                          padding: 2,
                          zIndex: 10,
                          boxShadow: "0px 0px 3px #ccc",
                        }}
                        className="job-head pointer"
                        onClick={() =>
                          openModal({ data: obj, visible: !modal.visible })
                        }
                      >
                        <Text strong className="ml-1 mr-1">
                          {obj.title}
                        </Text>
                        <Text strong>
                          {convertTimeToHr(obj.plan_job_plan_time)} Hr.
                        </Text>
                      </div>
                    ))
                  ) : (
                    <Text className="text-value">{"< - - - ว่าง - - - >"}</Text>
                  )}
                </div>
              </div>
              {/* Shift Tab */}
              <div
                style={{
                  border: "1px solid #FFE3B0",
                  marginTop: 5,
                  backgroundColor: "#ffc459",
                  boxShadow: "0px 0px 3px #ccc",
                  fontSize: 14,
                }}
                className="arrow"
              >
                <Row className="col-2 pd-left-1">
                  <Col span={15}>
                    <Space size={8}>
                      <Text strong>{objShift.title}</Text>
                    </Space>
                  </Col>
                  <Col span={9}>
                    <Text strong>
                      {convertDigit(
                        convertTimeToHr(objShift.sum_plan_job_plan_time),
                        2
                      ) ?? "-"}
                    </Text>
                    <Text strong>{" Hr."}</Text>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderLabelContent = (e) => {
    const eventTitle = `[ ${e.resource._resource.id} ] ${e.fieldValue}`;
    return (
      <div className="pd-left-1" title={eventTitle}>
        <Text>{"[ " + e.resource._resource.id + " ]"}</Text>
        <br />
        <p
          style={{
            maxWidth: 100,
            overflowWrap: "break-word",
            wordWrap: "break-word",
          }}
        >
          {e.fieldValue}
        </p>
      </div>
    );
  };
  const configs = {
    resourceAreaWidth: 230,
    plugins: [resourceTimelinePlugin],
    // eventContent: renderEventContent,
    initialView: "resourceTimelineMonth",
    aspectRatio: 2.5,
    timeZone: "UTC",
    initialDate: moment().format("YYYY-MM-DD HH:mm:ss"),
    resourceLabelContent: renderLabelContent,
    resourceOrder: "sortNo",
    views: {
      resourceTimelineMonth: {
        slotMinWidth: 160,
        slotLabelFormat: (value) => {
          return (
            moment(value.date.marker).format("ddd") +
            " | " +
            moment(value.date.marker)
              .utc(true)
              .subtract(7, "hours")
              .format("DD/MM/YY")
          );
        },
        businessHours: {
          daysOfWeek: [1, 2, 3, 4, 5],
        },
      },
      resourceTimelineDay: {
        slotLabelFormat: (obj) => {
          return moment(obj.date.marker)
            .utc(true)
            .subtract(7, "hours")
            .format("H:mm");
        },
      },
    },
    eventClick: (info) => {
      info.el.style.backgroundColor = "white";
      // console.log(info);
    },
    nowIndicator: true,
    events: state.plan,
    schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
    timeZone: "UTC",
    headerToolbar: {
      left: "",
      center: "title",
      right: "prev,next",
    },
    editable: true,
    resourceAreaHeaderContent: (
      <div className="require full-width">
        {/* Cost Center <br /> */}
        <Search
          onSearch={(text) => onSearch("costCenter", text)}
          placeholder={"Cost Center"}
        />
      </div>
    ),
    eventOrder: ["id"],
    resources: state.costCenter,
    eventTimeFormat: {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    },
  };
  useEffect(() => {
    dispatch(getPlanningCalendarData());
  }, [dispatch]);

  console.log("render", countRender++);
  console.log("state", state);
  return (
    <>
      <div style={{ margin: "50px auto", width: "95%", height: 800 }}>
        {loading ? (
          <DetailLoading />
        ) : (
          <>
            {/* <div
              style={{
                padding: 10,
                border: "1px solid gray",
                borderRadius: 10,
              }}
              className="mb-1"
            > */}
            <FullCalendar {...configs} eventContent={renderEventContent} />
            {materialStatusBar()}
            {/* </div> */}
            <ModalCostCenterPlanning
              visible={modal.visible}
              closeModal={closeModal}
              data={modal.data}
              saveModal={saveModal}
            />
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(CustomFullCalendar);