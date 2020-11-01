import React, { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { withRouter } from "react-router-dom";
import { get_all_vendor } from "../../actions/purchase/vendorActions";
import { getMasterDataItem } from "../../actions/inventory";
import { get_select_dep, get_select_cost_center } from "../../actions/hrm";
import { useDispatch, useSelector } from "react-redux";
import { reset_comments } from "../../actions/comment&log";
import { get_vendor_payment_term_list } from "../../actions/accounting";
const Purchase = (props) => {
  const dispatch = useDispatch();
  const current_project = useSelector((state) => state.auth.currentProject);
  const auth = useSelector((state) => state.auth.authData[0]);
  useEffect(() => {
    dispatch(get_all_vendor());
    dispatch(getMasterDataItem());
    dispatch(get_vendor_payment_term_list());
    dispatch(reset_comments());
  }, [dispatch]);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const config = {
    projectId: current_project.project_id,
    title: current_project.project_name,
    home: current_project.project_url,
    show: true,
    breadcrumb: ["Home"],
    search: true,
    create: "",
    buttonAction: [""],
    discard: current_project.project_url,
    onCancel: () => {
      console.log("Cancel");
    },
  };
  // const onChange = (pagination, filters, sorter, extra) => {
  //   console.log("params", pagination, filters, sorter, extra);
  // };
  // const config = {
  //   projectId: 2,
  //   title: "PURCHASE",
  //   home: "/purchase",
  //   show: true,
  //   breadcrumb: ["Home"],
  //   search: true,
  //   create: "",
  //   buttonAction: [""],
  //   discard: "/purchase",
  //   onCancel: () => {
  //     console.log("Cancel");
  //   },
  // };

  return (
    <div>
      <MainLayout {...config}>
        <h1>Home Purchase</h1>
        {/* <Row>
               <Col span={24}>
                 <Table columns={columns} dataSource={data} onChange={this.onChange} size='small'/>
               </Col>
           </Row> */}
      </MainLayout>
    </div>
  );
};

export default withRouter(Purchase);
