import {
  EditTwoTone,
  EllipsisOutlined,
  PrinterTwoTone,
  TrophyOutlined,
} from "@ant-design/icons";
import { Button, message } from "antd";
import Modal from "antd/lib/modal/Modal";
import Text from "antd/lib/typography/Text";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router";
import {
  getNPRRequestSample,
  saveSampleRequest,
} from "../../../../../../actions/sales/nprActions";
import CustomTable from "../../../../../../components/CustomTable";
import { AppContext } from "../../../../../../include/js/context";
import { sortData } from "../../../../../../include/js/function_main";
import { convertDigit } from "../../../../../../include/js/main_config";
import RequestSampleForm from "./RequestSampleForm";
const columns = ({ onSelect }) => [
  {
    title: (
      <div className="text-center">
        <Text>No.</Text>
      </div>
    ),
    dataIndex: "id",
    align: "center",
    width: "5%",
    render: (val) => val + 1,
  },
  {
    title: (
      <div className="text-center">
        <Text>Request Date.</Text>
      </div>
    ),
    dataIndex: "npr_additional_request_date",
    align: "center",
    width: "12.5%",
    render: (val) => val,
  },
  {
    title: (
      <div className="text-center">
        <Text>Sample Qty.</Text>
      </div>
    ),
    align: "center",
    width: "20%",
    children: [
      {
        title: (
          <div className="text-center">
            <Text>Request</Text>
          </div>
        ),
        dataIndex: "npr_additional_request_qty",
        align: "right",
        render: (val) => (val ? convertDigit(val, 4) : "-"),
      },
      {
        title: (
          <div className="text-center">
            <Text>Actual</Text>
          </div>
        ),
        dataIndex: "npr_additional_actual_qty",
        align: "right",
        render: (val) => (val ? convertDigit(val, 4) : "-"),
      },
    ],
  },
  {
    title: (
      <div className="text-center">
        <Text>Batch Size(g)</Text>
      </div>
    ),
    dataIndex: "npr_additional_batch_size",
    width: "10%",
    align: "right",
    render: (val) => (val !== null ? convertDigit(val, 4) : "-"),
  },
  {
    title: (
      <div className="text-center">
        <Text>PIC</Text>
      </div>
    ),
    dataIndex: "npr_additional_response_by_name",
    align: "left",
    width: "20%",
    ellipsis: true,
    render: (val) => val || "-",
  },
  {
    title: (
      <div className="text-center">
        <Text>Due Date</Text>
      </div>
    ),
    dataIndex: "npr_additional_response_due_date",
    align: "center",
    width: "12%",
    render: (val) => val || "-",
  },
  {
    title: (
      <div className="text-center">
        <Text>Status</Text>
      </div>
    ),
    dataIndex: "trans_status",
    align: "center",
    width: "12%",
    render: (val) => <Text strong>{val || "N/A"}</Text>,
  },
  {
    title: (
      <div className="text-center">
        <EllipsisOutlined />
      </div>
    ),
    dataIndex: "id",
    align: "center",
    width: "5%",
    render: (val, record) => (
      <div className="text-center">
        <PrinterTwoTone
          className="button-icon"
          // onClick={() => onOpen({ data: null })}
        />
        {/* <EditTwoTone
          className="button-icon pd-left-1"
          onClick={() => onSelect(record)}
        /> */}
      </div>
    ),
  },
];
const initialState = {
  npr_id: null,
  npr_additional_request_qty: null,
  user_name: null,
  commit: null,
  npr_additional_remark: null,
  npr_additional_remark_reject: null,
  npr_additional_request_date: null,
  npr_additional_request_by: null,
  npr_additional_response_date: null,
  npr_additional_response_by: null,
  npr_additional_response_due_date: null,
  npr_additional_response_actual_date: null,
  npr_additional_actual_qty: null,
  npr_additional_receive_date: null,
  npr_additional_receive_by: null,
  npr_additional_batch_size: null,
  tg_trans_status_id: null,
  tg_trans_close_id: null,
  trans_id: null,
};
const ModalRDRequestSample = ({
  visible = false,
  readOnly = false,
  id = null,
  onClose,
}) => {
  const [state, setState] = useState([]);
  const [record, setRecord] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const {
    auth: { user_name },
  } = useContext(AppContext);
  const methods = useForm({
    defaultValues: initialState,
  });

  const onSelect = (data) => {
    methods.reset({
      ...data,
      commit: 1,
      user_name,
      npr_id: id,
      npr_additional_request_by: user_name,
      npr_additional_request_date: moment().format("DD/MM/YYYY"),
    });
    setRecord(data);
  };

  const onSubmit = async (data) => {
    console.log("onSubmit", data);
    const resp = await saveSampleRequest(data, false);
    console.log("resp", resp);
    if (resp.success) {
      message.success("Save Successfully.");
      methods.reset(initialState);
    }
  };

  useEffect(() => {
    setLoading(true);
    const getData = async (id) => {
      const resp = await getNPRRequestSample(id);
      console.log("ModalRDRequestSample", resp);
      if (resp.success) {
        setState(sortData(resp.data.filter((obj) => obj.trans_id !== 1)));
        setLoading(false);
      }
    };
    id && getData(id);
  }, [id]);

  const npr_additional_id = methods.watch("npr_additional_id");
  const watchData = methods.watch("trans_id");
  const disabledEdit = [5, 6].includes(record.trans_id);
  const contextValue = React.useMemo(
    () => ({
      ...methods,
      readOnly: false,
      npr_additional_id,
      disabledEdit,
      record,
    }),
    [id, methods.formState.errors, npr_additional_id]
  );
  const modalConfig = {
    title: "Request Sample",
    visible,
    width: 1000,
    onOk: onClose,
    onCancel: onClose,
    footer: [
      <Button key="discard" onClick={onClose} loading={loading}>
        {disabledEdit ? "Back" : "Discard"}
      </Button>,
      !disabledEdit && (
        <Button
          key="back"
          loading={loading}
          className={npr_additional_id ? "primary" : ""}
          disabled={npr_additional_id ? false : true}
          onClick={() => {
            document.getElementById("modal-submit-btn").click();
            // if (methods.formState.errors !== {})
            //   message.warning("Please fill your form completely.");
          }}
        >
          Save
        </Button>
      ),
    ],
  };

  return (
    <Modal {...modalConfig} destroyOnClose>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...contextValue}>
          <div className="under-line pb-1">
            <Text className="detail-tab-header ">Form</Text>
          </div>
          <div className="form-section">
            <RequestSampleForm />
          </div>
          <div className="under-line pb-1 mt-2">
            <Text className="detail-tab-header ">History</Text>
          </div>
          <div className="form-section">
            <CustomTable
              rowClassName="row-table-detail pointer"
              dataSource={state}
              columns={columns({ onSelect })}
              rowKey={"id"}
              onClick={(record, index) => {
                message.info(`Record Selected.`);
                onSelect(record);
              }}
            />
            {/* <ModalRequestSample {...modalConfig} /> */}
          </div>
          <button type="submit" id="modal-submit-btn" className="d-none">
            Submit
          </button>
        </FormProvider>
      </form>
    </Modal>
  );
};

export default React.memo(ModalRDRequestSample);