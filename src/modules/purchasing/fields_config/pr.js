export const pr_list_columns = [
  {
    title: "PR Code",
    dataIndex: "pr_no",
    key: "pr_no",
    width: "10%",
    align: "left",
  },
  {
    title: "PR Date",
    dataIndex: "pr_created",
    key: "pr_created",
    width: "10%",
    align: "center",
  },
  {
    title: "PR Due Date",
    dataIndex: "pr_due_date",
    key: "pr_due_date",
    width: "10%",
    align: "left",
  },
  {
    title: "Job Name",
    dataIndex: "job_id",
    key: "job_id",
    width: "20%",
    align: "left",
  },
  {
    title: "Request By",
    dataIndex: "pr_created_by",
    key: "pr_created_by",
    width: "10%",
    align: "left",
  },
  {
    title: "Vendor",
    dataIndex: "vendor_name",
    key: "vendor_name",
    width: "15%",
    align: "left",
  },
  {
    title: "Description",
    dataIndex: "pr_description",
    key: "pr_description",
    width: "15%",
    align: "left",
  },
  {
    title: "PR Status",
    dataIndex: "process_name",
    key: "process_name",
    width: "10%",
    align: "left",
  },
];

export const pr_fields = {
  pr_id: null,
  pr_no: null,
  pr_description: null,
  pr_due_date: null,
  pr_contact_description: null,
  pr_remark: null,
  pr_lock: 0,
  pr_actived: null,
  pr_created: null,
  pr_created_by: null,
  pr_cost_center: "250000 MIS",
  pr_updated: null,
  pr_updated_by: null,
  branch_id: 1,
  vendor_id: null,
  vendor_name: null,
  vat_id: 1,
  process_id: 0,
  tg_trans_status_id: 0,
  tg_pr_amount: 0,
  tg_pr_discount: 0,
  tg_pr_sum_amount: 0,
  tg_pr_vat_amount: 0,
  tg_pr_total_amount: 0,
};
export const pr_detail_fields = {
  pr_id: null,
  item_id: null,
  uom_id: null,
  pr_detail_id: null,
  pr_detail_due_date: null,
  pr_detail_qty: 0,
  pr_detail_price: 0,
  pr_detail_discount: 0,
  pr_detail_discount_pct: 0,
  pr_detail_price_total: 0,
  pr_detail_remark: null,
  pr_detail_actived: 1,
  pr_detail_created: null,
  pr_detail_created_by: null,
  pr_detail_updated: null,
  pr_detail_updated_by: null,
};
